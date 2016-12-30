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
import {PointsExchangePage} from '../pages/PointsExchange/PointsExchange';
import {LoginPage} from '../pages/login/login';
import {RegisterPage} from '../pages/register/register';
import {MyCardComponent}from '../components/my-card/my-card';
import { MessagesPage } from '../pages/messages/messages';
import { HttpGet } from '../providers/http-get';
import {JsonpModule} from '@angular/http';
import {JSONP_PROVIDERS} from 'angular2/http';
import {bootstrap} from 'angular2/platform/browser';
import {ConnectYZX} from '../providers/connect-yzx';
import {CallModalPage} from '../pages/call-modal/call-modal';
import {MePage} from '../pages/me/me';


@NgModule({ 
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
    MePage
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
    MePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},HttpGet,ConnectYZX]
})
export class AppModule {}
