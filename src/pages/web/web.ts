import { Component } from '@angular/core';

import { NavController,NavParams } from 'ionic-angular';
import {DomSanitizer} from '@angular/platform-browser';
@Component({
  selector: 'page-web',
  templateUrl: 'web.html'
})
export class WebPage {
  title:string;
  srcUrl:any;
  constructor(public navCtrl: NavController,navParams:NavParams,private sanitizer: DomSanitizer) {
    this.title=navParams.get('title');
    this.srcUrl = this.sanitizer.bypassSecurityTrustResourceUrl(navParams.get('url'));
    console.log('url='+this.srcUrl);
    console.log('title='+this.title);

  }

}
