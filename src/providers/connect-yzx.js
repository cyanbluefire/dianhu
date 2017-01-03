var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpGet } from './http-get';
import { HttpUrl } from '../common/global';
var ConnectYZX = (function () {
    function ConnectYZX(http) {
        this.http = http;
        console.log('Hello ConnectYZX Provider');
    }
    /*
     * 获取token
     */
    ConnectYZX.prototype.getToken = function () {
        console.log("开始获取token");
        this.http.httpMethod(HttpUrl.getToken, {}, function (data) {
            if (data.retcode == 0) {
                var loginToken = data.result;
                localStorage.setItem("loginToken", loginToken);
                console.log('token获取成功==' + loginToken);
            }
            else {
                alert(data.retinfo);
            }
        });
    };
    return ConnectYZX;
}());
ConnectYZX = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [HttpGet])
], ConnectYZX);
export { ConnectYZX };
//# sourceMappingURL=connect-yzx.js.map