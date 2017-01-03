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
import { NavController, NavParams, ModalController, ViewController, Tabs } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { FindPage } from '../find/find';
import { CallModalPage } from '../call-modal/call-modal';
import { MePage } from '../me/me';
var TabsPage = (function () {
    function TabsPage(navCtrl, navParams, modalCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
        // this tells the tabs component which Pages
        // should be each tab's root Page
        this.tab1Root = HomePage;
        this.tab2Root = AboutPage;
        this.tab3Root = MePage;
        this.tab4Root = FindPage;
    }
    TabsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TabsPage');
        // this.navCtrl.push(LoginPage,{});
    };
    TabsPage.prototype.call = function () {
        var modal = this.modalCtrl.create(CallModalPage);
        modal.present();
        // this.tabRef.previousTab(true);
    };
    return TabsPage;
}());
__decorate([
    ViewChild('homeTabs'),
    __metadata("design:type", Tabs)
], TabsPage.prototype, "tabRef", void 0);
TabsPage = __decorate([
    Component({
        templateUrl: 'tabs.html'
    }),
    __metadata("design:paramtypes", [NavController, NavParams, ModalController, ViewController])
], TabsPage);
export { TabsPage };
//# sourceMappingURL=tabs.js.map