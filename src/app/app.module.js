var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { FindPage } from '../pages/find/find';
import { TabsPage } from '../pages/tabs/tabs';
import { CallPage } from '../pages/call/call';
import { WebPage } from '../pages/web/web';
import { PointsExchangePage } from '../pages/PointsExchange/PointsExchange';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { MyCardComponent } from '../components/my-card/my-card';
import { MessagesPage } from '../pages/messages/messages';
import { HttpGet } from '../providers/http-get';
import { JsonpModule } from '@angular/http';
import { ConnectYZX } from '../providers/connect-yzx';
import { CallModalPage } from '../pages/call-modal/call-modal';
import { MePage } from '../pages/me/me';
import { KeyboardPage } from '../pages/keyboard/keyboard';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
        declarations: [
            MyApp,
            AboutPage,
            ContactPage,
            HomePage,
            FindPage,
            CallPage,
            TabsPage,
            WebPage,
            PointsExchangePage,
            LoginPage,
            RegisterPage,
            MyCardComponent,
            MessagesPage,
            CallModalPage,
            MePage,
            KeyboardPage
        ],
        imports: [
            IonicModule.forRoot(MyApp),
            JsonpModule,
        ],
        bootstrap: [IonicApp],
        entryComponents: [
            MyApp,
            AboutPage,
            ContactPage,
            HomePage,
            FindPage,
            CallPage,
            TabsPage,
            WebPage,
            PointsExchangePage,
            LoginPage,
            RegisterPage,
            MessagesPage,
            CallModalPage,
            MePage,
            KeyboardPage
        ],
        providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }, HttpGet, ConnectYZX]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map