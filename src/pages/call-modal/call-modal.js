var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, ViewController, Tabs } from 'ionic-angular';
import { ContactPage } from '../contact/contact';
import { CallPage } from '../call/call';
var CallModalPage = (function () {
    function CallModalPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.callRoot = CallPage;
        this.contactRoot = ContactPage;
    }
    CallModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CallModalPage');
    };
    CallModalPage.prototype.calling = function () {
        console.log("calling");
    };
    return CallModalPage;
}());
__decorate([
    ViewChild('callTabs'),
    __metadata("design:type", Tabs)
], CallModalPage.prototype, "tabRef", void 0);
CallModalPage = __decorate([
    Component({
        selector: 'page-call-modal',
        templateUrl: 'call-modal.html'
    }),
    __metadata("design:paramtypes", [NavController, NavParams, ViewController])
], CallModalPage);
export { CallModalPage };
//# sourceMappingURL=call-modal.js.map