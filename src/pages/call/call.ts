import { Component } from '@angular/core';
import { NavController,PopoverController } from 'ionic-angular';
import { KeyboardPage } from '../keyboard/keyboard';

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
  constructor(public navCtrl: NavController,public popoverCtrl: PopoverController ){

  }
    presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(KeyboardPage);
    popover.present({
      ev: myEvent
    });
  }

}
