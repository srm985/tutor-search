import { Injectable } from '@angular/core';

@Injectable()
export class TimeZonesProvider {

  zoneList: any[];

  constructor() {
    this.zoneList = [
      {
        'offset': '-12',
        'name': 'Etc/GMT-12'
      },
      {
        'offset': '-11',
        'name': 'Etc/GMT-11'
      },
      {
        'offset': '-11',
        'name': 'Pacific/Midway'
      },
      {
        'offset': '-10',
        'name': 'America/Adak'
      },
      {
        'offset': '-9',
        'name': 'America/Anchorage'
      },
      {
        'offset': '-9',
        'name': 'Pacific/Gambier'
      },
      {
        'offset': '-8',
        'name': 'America/Dawson_Creek'
      },
      {
        'offset': '-8',
        'name': 'America/Ensenada'
      },
      {
        'offset': '-8',
        'name': 'America/Los_Angeles'
      },
      {
        'offset': '-7',
        'name': 'America/Chihuahua'
      },
      {
        'offset': '-7',
        'name': 'America/Denver'
      },
      {
        'offset': '-6',
        'name': 'America/Belize'
      },
      {
        'offset': '-6',
        'name': 'America/Cancun'
      },
      {
        'offset': '-6',
        'name': 'America/Chicago'
      },
      {
        'offset': '-6',
        'name': 'Chile/EasterIsland'
      },
      {
        'offset': '-5',
        'name': 'America/Bogota'
      },
      {
        'offset': '-5',
        'name': 'America/Havana'
      },
      {
        'offset': '-5',
        'name': 'America/New_York'
      },
      {
        'offset': '-4:30',
        'name': 'America/Caracas'
      },
      {
        'offset': '-4',
        'name': 'America/Campo_Grande'
      },
      {
        'offset': '-4',
        'name': 'America/Glace_Bay'
      },
      {
        'offset': '-4',
        'name': 'America/Goose_Bay'
      },
      {
        'offset': '-4',
        'name': 'America/Santiago'
      },
      {
        'offset': '-4',
        'name': 'America/La_Paz'
      },
      {
        'offset': '-3',
        'name': 'America/Argentina/Buenos_Aires'
      },
      {
        'offset': '-3',
        'name': 'America/Montevideo'
      },
      {
        'offset': '-3',
        'name': 'America/Araguaina'
      },
      {
        'offset': '-3',
        'name': 'America/Godthab'
      },
      {
        'offset': '-3',
        'name': 'America/Miquelon'
      },
      {
        'offset': '-3',
        'name': 'America/Sao_Paulo'
      },
      {
        'offset': '-3:30',
        'name': 'America/St_Johns'
      },
      {
        'offset': '-2',
        'name': 'America/Noronha'
      },
      {
        'offset': '-1',
        'name': 'Atlantic/Cape_Verde'
      },
      {
        'offset': '0',
        'name': 'Europe/Belfast'
      },
      {
        'offset': '0',
        'name': 'Africa/Abidjan'
      },
      {
        'offset': '0',
        'name': 'Europe/Dublin'
      },
      {
        'offset': '0',
        'name': 'Europe/Lisbon'
      },
      {
        'offset': '0',
        'name': 'Europe/London'
      },
      {
        'offset': '0',
        'name': 'UTC'
      },
      {
        'offset': '+1',
        'name': 'Africa/Algiers'
      },
      {
        'offset': '+1',
        'name': 'Africa/Windhoek'
      },
      {
        'offset': '+1',
        'name': 'Atlantic/Azores'
      },
      {
        'offset': '+1',
        'name': 'Atlantic/Stanley'
      },
      {
        'offset': '+1',
        'name': 'Europe/Amsterdam'
      },
      {
        'offset': '+1',
        'name': 'Europe/Belgrade'
      },
      {
        'offset': '+1',
        'name': 'Europe/Brussels'
      },
      {
        'offset': '+2',
        'name': 'Africa/Cairo'
      },
      {
        'offset': '+2',
        'name': 'Africa/Blantyre'
      },
      {
        'offset': '+2',
        'name': 'Asia/Beirut'
      },
      {
        'offset': '+2',
        'name': 'Asia/Damascus'
      },
      {
        'offset': '+2',
        'name': 'Asia/Gaza'
      },
      {
        'offset': '+2',
        'name': 'Asia/Jerusalem'
      },
      {
        'offset': '+3',
        'name': 'Africa/Addis_Ababa'
      },
      {
        'offset': '+3',
        'name': 'Asia/Riyadh89'
      },
      {
        'offset': '+3',
        'name': 'Europe/Minsk'
      },
      {
        'offset': '+3:30',
        'name': 'Asia/Tehran'
      },
      {
        'offset': '+4',
        'name': 'Asia/Dubai'
      },
      {
        'offset': '+4',
        'name': 'Asia/Yerevan'
      },
      {
        'offset': '+4',
        'name': 'Europe/Moscow'
      },
      {
        'offset': '+4:30',
        'name': 'Asia/Kabul'
      },
      {
        'offset': '+5',
        'name': 'Asia/Tashkent'
      },
      {
        'offset': '+5:30',
        'name': 'Asia/Kolkata'
      },
      {
        'offset': '+5:45',
        'name': 'Asia/Katmandu'
      },
      {
        'offset': '+6',
        'name': 'Asia/Dhaka'
      },
      {
        'offset': '+6',
        'name': 'Asia/Yekaterinburg'
      },
      {
        'offset': '+6:30',
        'name': 'Asia/Rangoon'
      },
      {
        'offset': '+7',
        'name': 'Asia/Bangkok'
      },
      {
        'offset': '+7',
        'name': 'Asia/Novosibirsk'
      },
      {
        'offset': '+8',
        'name': 'Etc/GMT+8'
      },
      {
        'offset': '+8',
        'name': 'Asia/Hong_Kong'
      },
      {
        'offset': '+8',
        'name': 'Asia/Krasnoyarsk'
      },
      {
        'offset': '+8',
        'name': 'Australia/Perth'
      },
      {
        'offset': '+8:45',
        'name': 'Australia/Eucla'
      },
      {
        'offset': '+9',
        'name': 'Asia/Irkutsk'
      },
      {
        'offset': '+9',
        'name': 'Asia/Seoul'
      },
      {
        'offset': '+9',
        'name': 'Asia/Tokyo'
      },
      {
        'offset': '+9:30',
        'name': 'Australia/Adelaide'
      },
      {
        'offset': '+9:30',
        'name': 'Australia/Darwin'
      },
      {
        'offset': '+9:30',
        'name': 'Pacific/Marquesas'
      },
      {
        'offset': '+10',
        'name': 'Etc/GMT+10'
      },
      {
        'offset': '+10',
        'name': 'Australia/Brisbane'
      },
      {
        'offset': '+10',
        'name': 'Australia/Hobart'
      },
      {
        'offset': '+10',
        'name': 'Asia/Yakutsk'
      },
      {
        'offset': '+10:30',
        'name': 'Australia/Lord_Howe'
      },
      {
        'offset': '+11',
        'name': 'Asia/Vladivostok'
      },
      {
        'offset': '+11:30',
        'name': 'Pacific/Norfolk'
      },
      {
        'offset': '+12',
        'name': 'Etc/GMT+12'
      },
      {
        'offset': '+12',
        'name': 'Asia/Anadyr'
      },
      {
        'offset': '+12',
        'name': 'Asia/Magadan'
      },
      {
        'offset': '+12',
        'name': 'Pacific/Auckland'
      },
      {
        'offset': '+12:45',
        'name': 'Pacific/Chatham'
      },
      {
        'offset': '+13',
        'name': 'Pacific/Tongatapu'
      },
      {
        'offset': '+14',
        'name': 'Pacific/Kiritimati'
      }
    ]

  }

}
