
import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, ModalController, ViewController, Tabs,PopoverController } from 'ionic-angular';

import { ContactPage } from '../contact/contact';
import { CallPage } from '../call/call';
import { TabsPage } from '../tabs/tabs';
import { KeyboardPage } from '../keyboard/keyboard';


@Component({
  selector: 'page-call-modal',
  templateUrl: 'call-modal.html'
})
export class CallModalPage {


  @ViewChild('callTabs') tabRef: Tabs;
  callRoot: any = CallPage;
  contactRoot: any = ContactPage;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,public popoverCtrl: PopoverController) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CallModalPage');
  }
  calling() {
    console.log("calling");
  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(KeyboardPage);
    popover.present({
      ev: myEvent
    });
  }


}
