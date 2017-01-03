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
import { NavController, NavParams } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
var WebPage = (function () {
    function WebPage(navCtrl, navParams, sanitizer) {
        this.navCtrl = navCtrl;
        this.sanitizer = sanitizer;
        this.title = navParams.get('title');
        this.srcUrl = this.sanitizer.bypassSecurityTrustResourceUrl(navParams.get('url'));
        console.log('url=' + this.srcUrl);
        console.log('title=' + this.title);
    }
    return WebPage;
}());
WebPage = __decorate([
    Component({
        selector: 'page-web',
        templateUrl: 'web.html'
    }),
    __metadata("design:paramtypes", [NavController, NavParams, DomSanitizer])
], WebPage);
export { WebPage };
//# sourceMappingURL=web.js.map