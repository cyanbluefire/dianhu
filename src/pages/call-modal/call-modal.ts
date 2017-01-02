import { Component } from '@angular/core';
import { NavController, NavParams,ViewController ,PopoverController} from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { KeyboardPage } from '../keyboard/keyboard';

@Component({
  selector: 'page-call-modal',
  templateUrl: 'call-modal.html'
})
export class CallModalPage {

  item = {
    phoneNumber:12345678910,
    displayName:'哈哈',
    callDate:'12-30',
    callTime:'22:00'
  }
  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController,public popoverCtrl: PopoverController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CallModalPage');
  }
  close(){
    this.viewCtrl.dismiss();
    // this.navCtrl.push(TabsPage);
    // this.navCtrl.parent.select(0);
  }
  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(KeyboardPage);
    popover.present({
      ev: myEvent
    });
  }

}
