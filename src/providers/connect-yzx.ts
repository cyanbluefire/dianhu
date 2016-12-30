import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpGet } from './http-get';
import { HttpContents, HttpUrl } from '../common/global';

@Injectable()
export class ConnectYZX {

  constructor(public http: HttpGet) {
    console.log('Hello ConnectYZX Provider');
  }
  /*
   * 获取token
   */
  getToken() {
    console.log("开始获取token");
    this.http.httpMethod(HttpUrl.getToken, {}, (data) => {
      if (data.retcode == 0) {
        let loginToken = data.result;
        localStorage.setItem("loginToken", loginToken);
        console.log('token获取成功==' + loginToken);
        //连接云之讯，不用判断，重新连接
        // connect(loginToken);
      }else{
        alert(data.retinfo);
      // showToast(res.retinfo);
      }

    });

  }
}
