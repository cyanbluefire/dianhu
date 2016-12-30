import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-call',
  templateUrl: 'call.html'
})
export class CallPage {
  item = {
    phoneNumber: 12345678910,
    displayName: '哈哈',
    callDate: '12-30',
    callTime: '22:00'
  };
  constructor(public navCtrl: NavController) {

  }

}
