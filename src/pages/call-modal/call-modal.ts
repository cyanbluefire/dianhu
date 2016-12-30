import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, ModalController, ViewController, Tabs } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';
import { ContactPage } from '../contact/contact';
import { CallPage } from '../call/call';


@Component({
  selector: 'page-call-modal',
  templateUrl: 'call-modal.html'
})
export class CallModalPage {

  @ViewChild('callTabs') tabRef: Tabs;
  callRoot: any = CallPage;
  contactRoot: any = ContactPage;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CallModalPage');
  }
  calling() {
    console.log("calling");
  }

}
