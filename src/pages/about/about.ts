import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { WebPage } from '../web/web';
import {PointsExchangePage} from '../PointsExchange/PointsExchange';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }

  goNewsPage(){
    this.navCtrl.push(WebPage,{
      title:'头条新闻',
      url:'http://m.news.baidu.com/news?fr=mohome&ssid=0&from=844b&uid=&pu=sz%401320_2001%2Cta%40iphone_1_9.1_3_601&bd_page_type=1#/?_k=kuj672'
      
    });
  }
  goLivePage(){
    this.navCtrl.push(WebPage,{
      title:'网红直播',
      url:'http://www.huajiao.com/mobile/index'
    });
  }
  goPointsExchangePage(){
    this.navCtrl.push(PointsExchangePage,{})
  }
}

