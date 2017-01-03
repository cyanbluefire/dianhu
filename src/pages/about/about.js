var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WebPage } from '../web/web';
import { PointsExchangePage } from '../PointsExchange/PointsExchange';
var AboutPage = (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage.prototype.goNewsPage = function () {
        this.navCtrl.push(WebPage, {
            title: '头条新闻',
            url: 'http://m.news.baidu.com/news?fr=mohome&ssid=0&from=844b&uid=&pu=sz%401320_2001%2Cta%40iphone_1_9.1_3_601&bd_page_type=1#/?_k=kuj672'
        });
    };
    AboutPage.prototype.goLivePage = function () {
        this.navCtrl.push(WebPage, {
            title: '网红直播',
            url: 'http://www.huajiao.com/mobile/index'
        });
    };
    AboutPage.prototype.goPointsExchangePage = function () {
        this.navCtrl.push(PointsExchangePage, {});
    };
    return AboutPage;
}());
AboutPage = __decorate([
    Component({
        selector: 'page-about',
        templateUrl: 'about.html'
    }),
    __metadata("design:paramtypes", [NavController])
], AboutPage);
export { AboutPage };
//# sourceMappingURL=about.js.map