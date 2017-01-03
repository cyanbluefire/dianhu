var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Jsonp } from '@angular/http';
import { Injectable } from '@angular/core';
import { HttpGet } from '../providers/http-get';
var Global = (function () {
    function Global(jsonp, http) {
        this.jsonp = jsonp;
        this.http = http;
        console.log('Global');
    }
    return Global;
}());
Global = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Jsonp, HttpGet])
], Global);
export { Global };
export var HttpContents = {
    auth_type_key: "auth_type=key",
    auth_type_uid: "auth_type=uid",
    sign_key: "9876543210!@#$%^",
    invitedby: "1",
    auth_type: "key",
    invitedway: "ad",
    appos: '',
    v: "6.1.0",
    yzx: "3",
    ptype: '',
    device_id: '',
    device_version: '',
    brand_name: 'diancall/1.0',
    app_version: '',
    screen_resolution: screen.width * window.devicePixelRatio + "*" + screen.height * window.devicePixelRatio,
    app_agent: '',
    Brand36id: '2jvmuyiq',
    netmode: ''
};
// var urlHost = "http://access.vishuo.cn/1.0/hzcz";
//var urlHost_new_platform = 'https://kcsb.szchuzhong.com';
// var urlHost_kc = "http://agw.keepc.com:2001/1.0/kc";
// var urlHost_new_platform = 'https://kcsb.szchuzhong.com';
var config_app = "/config/app";
var url_redyouzi = "http://c.diancall.com";
var urlHost = url_redyouzi;
//callback: urlHost +  call_back_new
export var HttpUrl = {
    getSmsregcode: urlHost + "/pipes/custuser/smsregcode",
    register: urlHost + "/pipes/custuser/signup",
    login: urlHost + "/pipes/custuser/login",
    logout: urlHost + "/pipes/custuser/logout",
    callback: urlHost + "/pipes/voipcall/pretoback/",
    callbackCancel: urlHost + "/pipes/voipcall/canceltoback/",
    getToken: urlHost + "/pipes/voipcall/uctoken",
    getGoods: urlHost + "/pipes/charge/pkgs",
    getRechargeParams: urlHost + "/pipes/charge/prepay",
    checkRechargePay: urlHost + '/pipes/chargepay/check/',
    getConfigApp: urlHost + "/config/app",
    getRecharge: urlHost + "/order/pay",
    getUserWallet: urlHost + "/user/wallet",
    changeNickname: urlHost + '/pipes/custuser/updateusername',
    changePassword: urlHost + '/pipes/custuser/updatepwd',
    getResetPswCode: urlHost + '/pipes/custuser/smspwdcode',
    resetPassword: urlHost + '/pipes/custuser/updatepwd',
    appInstallCount: urlHost + '/pipes/appinstall/create',
    checkin: urlHost + '/pipes/custuser/checkin',
};
export var showToast = function (msg) {
    window.plugins.toast.showShortCenter(msg);
};
/**
 * 设备信息
 */
var initDeviceInfo = function () {
    var device = window.device;
    var cordova = window.cordova;
    console.log('device.platform==' + device.platform);
    HttpContents.appos = device.platform;
    HttpContents.device_id = device.uuid;
    HttpContents.ptype = device.manufacturer + ' ' + device.model;
    HttpContents.device_version = device.version;
    cordova.getAppVersion.getVersionNumber(function (version) {
        // alert(version);
        HttpContents.app_version = version;
        // console.log('app_version==' + HttpContents.app_version);
        HttpContents.app_agent = HttpContents.brand_name + '/' + HttpContents.app_version + '; ' +
            HttpContents.appos + '/' + HttpContents.device_version + '; ' +
            device.manufacturer + '/' + device.model + '; ' + HttpContents.screen_resolution;
        console.log('app_agent==' + HttpContents.app_agent);
    });
    // console.log('device_version=' + HttpContents.device_version);
    // console.log('device.manufacturer==' + device.manufacturer);
    // console.log('device.model==' + device.model);
    //	console.log('width==' + screen.width * window.devicePixelRatio + '  height==' + screen.height * window.devicePixelRatio);
};
/*
 * 获取网络状态
 */
var getNetWorkState = function () {
    var navigator = window.navigator;
    var networkState = navigator.connection.type;
    var Connection = window.Connection;
    //wifi、3g、4g、gprs
    var states = {};
    states[Connection.UNKNOWN] = 'gprs';
    states[Connection.ETHERNET] = 'gprs';
    states[Connection.WIFI] = 'wifi';
    states[Connection.CELL_2G] = 'gprs';
    states[Connection.CELL_3G] = '3g';
    states[Connection.CELL_4G] = '4g';
    states[Connection.CELL] = 'Cell generic connection';
    // states[Connection.NONE]     = 'No network connection';
    if (networkState === Connection.NONE) {
        showToast("网络断开！");
        return;
    }
    HttpContents.netmode = states[networkState];
};
/**
 * 初始化
 */
export var initAll = function () {
    initDeviceInfo();
    getNetWorkState();
    //默认拨打方式
    // if(localStorage.getItem('callType') == null) {
    // 	localStorage.setItem('callType', 'callDirect');
    // }
};
//# sourceMappingURL=global.js.map