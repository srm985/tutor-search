import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiProvider {

  private URL: any;
  private searchResults: any[];

  constructor(
    private http: HttpClient
  ) {
    this.URL = {
      baseURL: 'http://localhost:8100/api',
      apiVersion: 'v108',
      token: '033c58e9-b003-4b9a-9eeb-f2bc1e835187',
      utcOffset: '-6',
      keywords: 'subjectKeywords=spanish',
      zip: '60654',
      minRate: '10',
      maxRate: '200',
      minAge: '18',
      maxAge: '100',
      gender: null,
      backgroundCheck: null,
      pageNumber: '0',
      pageSize: '1000',
      tutorSearchType: '2'
    }
    this.searchResults = [];
  }

  searchTutor(searchLoad) {
    let asyncRequestList,
      pageListRequests = [];

    this.searchResults = [];

    // Map search data into URL object.
    //this.URL.utcOffset = searchLoad.utcOffset;
    //this.URL.zip = searchLoad.zip;
    this.URL.minRate = searchLoad.minRate;
    this.URL.maxRate = searchLoad.maxRate;
    this.URL.minAge = searchLoad.minAge;
    this.URL.maxAge = searchLoad.maxAge;
    this.URL.gender = searchLoad.gender;
    this.URL.backgroundCheck = searchLoad.backgroundCheck;

    asyncRequestList = searchLoad.keywords.map((item) => {
      let pageCount = 1;

      return new Promise((resolve) => {
        this.URL.keywords = `subjectKeywords=${item}`;
        this.URL.pageNumber = 0;
        this.makeRequest(this.buildSearchString()).then((results: any) => {

          pageCount = Math.ceil(results.TotalResultsCount / results.ResultsPage.length);
          console.log('page count: ' + pageCount);

          this.searchResults = this.searchResults.concat(results.ResultsPage);
          if (pageCount > 1) {
            for (let i = 1; i < pageCount; i++) {
              pageListRequests[i - 1] = new Promise((resolve) => {
                this.URL.pageNumber = i;
                this.makeRequest(this.buildSearchString()).then((results: any) => {
                  if (results) {
                    this.searchResults = this.searchResults.concat(results.ResultsPage);
                  } else {
                    console.error(`Query page ${i} was invalid!`);
                  }
                  resolve();
                });
              });
            }
            Promise.all(pageListRequests).then(() => {
              console.log('All pages retrieved!');
              resolve();
            });
          } else {
            resolve();
          }
        });
      });
    });

    return new Promise((resolve) => {
      Promise.all(asyncRequestList).then(() => {

        console.log('length');
        console.log(this.searchResults);

        this.searchResults = this.searchResults.filter((result, index, self) =>
          index === self.findIndex((t) => (
            t.TutorUserID === result.TutorUserID
          ))
        );

        console.log(this.searchResults);

        if (searchLoad.filterWords[0].length) {
          console.log('Filtering...');
          this.searchResults = this.filterResults(searchLoad.filterWords, this.searchResults);
        }

        resolve(this.searchResults);
      });
    });
  }

  private makeRequest(searchString) {
    return new Promise((resolve, reject) => {
      this.http.get(searchString).subscribe((results: any) => {
        console.log('Results loaded...');
        console.log(results);
        resolve(results);
      }, (err) => {
        console.error('Invalid request!');
        resolve(false);
      });
    });
  }

  private buildSearchString() {
    //let searchString = `${this.URL.baseURL}/${this.URL.apiVersion}/gueststudents/${this.URL.token}/searchtutors?utcOffset=${this.URL.utcOffset}&filterByMatchCriteria=true&displayTutorSortDetails=true&${this.URL.keywords}&zip=${this.URL.zip}&minimumHourlyRate=${this.URL.minRate}&maximumHourlyRate=${this.URL.maxRate}&minimumAge=${this.URL.minAge}&maximumAge=${this.URL.maxAge}&keywordSubjectFilter=3&pageNumber=${this.URL.pageNumber}&pageSize=${this.URL.pageSize}&isMale=${this.URL.gender}&backgroundCheck=${this.URL.backgroundCheck}`;

    let searchString = `${this.URL.baseURL}/${this.URL.apiVersion}/gueststudents/${this.URL.token}/searchtutors?utcOffset=${this.URL.utcOffset}&filterByMatchCriteria=true&displayTutorSortDetails=true&${this.URL.keywords}&zip=${this.URL.zip}&minimumHourlyRate=${this.URL.minRate}&maximumHourlyRate=${this.URL.maxRate}&minimumAge=${this.URL.minAge}&maximumAge=${this.URL.maxAge}&keywordSubjectFilter=3&pageSize=${this.URL.pageSize}&pageNumber=${this.URL.pageNumber}&isMale=${this.URL.gender}&backgroundCheck=${this.URL.backgroundCheck}&tutorSearchType=${this.URL.tutorSearchType}`;

    console.log(searchString);
    return searchString;
  }

  private filterResults(filterWords: string[], results) {
    let found,
      filteredResults = [];

    results.forEach((r) => {
      found = false;
      filterWords.forEach((w) => {
        if (
          !found
          && ((r.Headline && r.Headline.toLowerCase().includes(w))
            || (r.FreeResponse && r.FreeResponse.toLowerCase().includes(w))
            || (r.UnderGradCollege && r.UnderGradCollege.toLowerCase().includes(w))
            || (r.GraduateCollege && r.GraduateCollegeOne.toLowerCase().includes(w))
            || (r.GraduateCollegeTwo && r.GraduateCollegeTwo.toLowerCase().includes(w)))
        ) {
          found = true;
          filteredResults.push(r);
        }
      });
    });
    return filteredResults;
  }

}
