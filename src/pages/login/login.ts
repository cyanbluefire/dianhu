import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { md5 } from '../../common/md5';
import { HttpGet } from '../../providers/http-get'
import { URLSearchParams } from '@angular/http';
import { HttpContents, HttpUrl, showToast } from '../../common/global';
import { ConnectYZX } from '../../providers/connect-yzx';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {
  logoSrc: string;
  context:this;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpGet,public connect:ConnectYZX) {
    this.logoSrc = "assets/img/login_imge.png";
    this.context = this;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  goRegisterPage() {
    this.navCtrl.push(RegisterPage, {});
  }

  onSuccess(res,context) {
    if (res.retcode == 0) {
      // showToast("短信发送成功！");
      alert("登录成功！");
      localStorage.setItem("mobilex", res.result.mobile);
      // localStorage.setItem("uid", res.result.brand36id);

      context.navCtrl.pop();
      context.connect.getToken();
    } else {
      alert(res.retinfo);
      // showToast(res.retinfo);
    }
  }

  onLogin(phone, password) {
    
    let dataParams = {
      "bean": {
        "account": phone,
        "password": md5(password),
        "apptoken": HttpContents.device_id,
        // "cacheday": 登录信息缓存天数， APP默认值： 1000,
        "netmode": HttpContents.netmode,
        "appversion": HttpContents.app_version,
        "appos": HttpContents.appos + '/' + HttpContents.device_version
      }

    }

    this.http.httpMethodContext(HttpUrl.login, dataParams, this.onSuccess,this.context);
  }
}
