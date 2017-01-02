import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { initAll } from '../common/global';
import { TabsPage } from '../pages/tabs/tabs';
import { ConnectYZX } from '../providers/connect-yzx';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  rootPage = TabsPage;

  constructor(platform: Platform,public connect:ConnectYZX) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
      // initAll(); 
      // connect.getToken();
      // console.log("ip==" + (<any>window).returnCitySN.cip );
      
    });
  }

}
