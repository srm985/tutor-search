import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ApiProvider } from '../../providers/api/api';
import { TimeZonesProvider } from '../../providers/time-zones/time-zones';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  searchQuantity: number;
  searchResults: any[];
  priceRange: any;
  ageRange: any;
  searchObject: any;
  hoursExperience: any;

  constructor(
    private navCtrl: NavController,
    private api: ApiProvider,
    private zoneList: TimeZonesProvider
  ) {
    this.searchObject = {
      utcOffset: '',
      keywords: '',
      filterWords: '',
      zip: '',
      minRate: '10',
      maxRate: '200',
      minAge: '18',
      maxAge: '100',
      gender: null,
      backgroundCheck: null
    }

    this.priceRange = {
      lower: this.searchObject.minRate,
      upper: this.searchObject.maxRate
    };
    this.ageRange = {
      lower: this.searchObject.minAge,
      upper: this.searchObject.maxAge
    };
    this.hoursExperience = 0;
    //this.search();
  }

  search() {
    let temp = JSON.parse(JSON.stringify(this.searchObject));

    temp.keywords = temp.keywords.trim().toLowerCase().replace(/\,\s+/g, '\,').split(',');
    temp.filterWords = temp.filterWords.trim().toLowerCase().replace(/\,\s+/g, '\,').split(',');
    temp.minRate = this.priceRange.lower;
    temp.maxRate = this.priceRange.upper;
    temp.minAge = this.ageRange.lower;
    temp.maxAge = this.ageRange.upper;
    temp.utcOffset = temp.utcOffset[0];

    this.api.searchTutor(temp).then((results: any) => {
      this.searchQuantity = results.length;
      this.searchResults = results;
    });
  }

  updateHoursFilter() {
    console.log(this.hoursExperience);
  }
}
