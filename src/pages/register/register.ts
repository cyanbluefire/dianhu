import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { md5 } from '../../common/md5';
import { HttpGet } from '../../providers/http-get'
import { URLSearchParams } from '@angular/http';
import { HttpContents, HttpUrl, showToast } from '../../common/global';


@Component({
	selector: 'page-register',
	templateUrl: 'register.html'
})
export class RegisterPage {

	constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpGet) { }

	ionViewDidLoad() {
		console.log('ionViewDidLoad RegisterPage');
	}

	getVerifyCode(register_phone) {
		let dataParams = {
			mobile: register_phone
		}

		this.http.httpMethod(HttpUrl.getSmsregcode, dataParams, function (res) {

			// showToast(res.retinfo);
			if (res.retcode == 0) {
				// showToast("短信发送成功！");
				alert("短信发送成功！");
			} else {
				alert(res.retinfo);
			}

		});
	}

	register(register_phone, verify_code, username, register_psw, invitation_code) {
		let dataParams = {
			bean: {
				mobile:register_phone,
				password: md5(register_psw),
				apptoken: HttpContents.device_id,
				vercode: verify_code,
				appos:HttpContents.appos
				// "storeid": 所属门店ID,saleuserid	int	所属导购员工ID，为0表示无导购邀请
				// pcid	long	邀请的用户ID
				//以上两个id根据邀请码长度来选择传哪个
				// 为0表示不属于任何门店,
				// "corpuserid": 所属导购员工ID， 为0表示无导购邀请,
				// "pcid ": 邀请的用户ID,
				// "remark": 备注,
				// "cacheday": 登录信息缓存天数， APP默认值： 1000
			}
		}
		this.http.httpMethod(HttpUrl.register, dataParams, function (res) {
			
			if (res.retcode == 0) {
				// showToast("注册成功！");
				alert("注册成功！");
				this.navCtrl.pop();
			} else {
				// showToast(res.retinfo);
				alert(res.retinfo);
			}

		});

	}

}
