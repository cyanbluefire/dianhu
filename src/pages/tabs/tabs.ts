import { Component,ViewChild } from '@angular/core';
import { NavController, NavParams,ModalController,ViewController,Tabs } from 'ionic-angular';

import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { FindPage } from '../find/find';
import { LoginPage } from '../login/login';
import { MessagesPage } from '../messages/messages';
import { CallModalPage } from '../call-modal/call-modal';
import { MePage } from '../me/me';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  @ViewChild('homeTabs') tabRef: Tabs;
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = AboutPage;
  tab3Root: any = MePage;
  tab4Root: any = FindPage;

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController,public viewCtrl: ViewController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
    // this.navCtrl.push(LoginPage,{});
  }
  call(){
    let modal = this.modalCtrl.create(CallModalPage);
    
    modal.present();
    // this.tabRef.previousTab(true);
  }
}
