
import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, ModalController, ViewController, Tabs } from 'ionic-angular';

import { ContactPage } from '../contact/contact';
import { CallPage } from '../call/call';
import { TabsPage } from '../tabs/tabs';



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

  close(){
    this.viewCtrl.dismiss();
  }


}
