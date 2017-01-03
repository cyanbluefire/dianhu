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
import { md5 } from '../../common/md5';
import { HttpGet } from '../../providers/http-get';
import { HttpContents, HttpUrl } from '../../common/global';
var RegisterPage = (function () {
    function RegisterPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.getVerifyCode = function (register_phone) {
        var dataParams = {
            mobile: register_phone
        };
        this.http.httpMethod(HttpUrl.getSmsregcode, dataParams, function (res) {
            // showToast(res.retinfo);
            if (res.retcode == 0) {
                // showToast("短信发送成功！");
                alert("短信发送成功！");
            }
            else {
                alert(res.retinfo);
            }
        });
    };
    RegisterPage.prototype.register = function (register_phone, verify_code, username, register_psw, invitation_code) {
        var dataParams = {
            bean: {
                mobile: register_phone,
                password: md5(register_psw),
                apptoken: HttpContents.device_id,
                vercode: verify_code,
                appos: HttpContents.appos
            }
        };
        this.http.httpMethod(HttpUrl.register, dataParams, function (res) {
            if (res.retcode == 0) {
                // showToast("注册成功！");
                alert("注册成功！");
                this.navCtrl.pop();
            }
            else {
                // showToast(res.retinfo);
                alert(res.retinfo);
            }
        });
    };
    return RegisterPage;
}());
RegisterPage = __decorate([
    Component({
        selector: 'page-register',
        templateUrl: 'register.html'
    }),
    __metadata("design:paramtypes", [NavController, NavParams, HttpGet])
], RegisterPage);
export { RegisterPage };
//# sourceMappingURL=register.js.map