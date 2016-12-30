import { Injectable } from '@angular/core';
import { Http, Response, Headers, Request, RequestOptions, RequestMethod, URLSearchParams, RequestOptionsArgs } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import { HttpContents, HttpUrl } from '../common/global';

@Injectable()
export class HttpGet {

  headers: Headers;
  options: RequestOptions;


  constructor(public http: Http) {
    // HttpContents.app_agent = HttpContents.brand_name + '/' + HttpContents.app_version + '; ' +
    //   HttpContents.appos + '/' + HttpContents.device_version + '; ' +
    //   "sumsung" + '/' + 'galaxy' + '; ' + HttpContents.screen_resolution;
      let device = (<any>window).device;
      // HttpContents.app_agent = HttpContents.brand_name + '/' + HttpContents.app_version + '; ' +
			// HttpContents.appos + '/' + HttpContents.device_version + '; ' +
			// device.manufacturer + '/' + device.model + '; ' + HttpContents.screen_resolution;
    console.log('app_agent==' + HttpContents.app_agent);

    this.headers = new Headers();
    this.headers.append('App-Agent', HttpContents.app_agent);
    this.options = new RequestOptions();
    this.options.headers = this.headers;
    this.options.method = RequestMethod.Get;
  }

  httpMethodContext(url, params, onSuccess, context) {
    console.log("httpMethod params==" + JSON.stringify(params));

    // console.log("searchParams=="+searchParams.toString);

    // params.setAll
    this.options.url = url;
    if (Object.keys(params).length > 0) {
      let searchParams = new URLSearchParams();
      for (let param in params) {
        console.log("param==" + param + "  params==" + params[param]);
        if (typeof (params[param]) === "object" &&
          Object.prototype.toString.call(params[param]).toLowerCase() == "[object object]" && !params[param].length) {
          console.log("params[param] is JSON object");
          params[param] = JSON.stringify(params[param]);
        }
        searchParams.set(param, params[param]);


      }
      this.options.search = searchParams;

    }
    this.http.request(new Request(this.options))
      .toPromise()
      .then(res => { console.log("Http-Response==" + JSON.stringify(res.json())); onSuccess(res.json(), context); })
      .catch(this.handleError);
  }


  httpMethod(url, params, onSuccess) {
    console.log("httpMethod params==" + JSON.stringify(params));


    // console.log("searchParams=="+searchParams.toString);

    // params.setAll
    this.options.url = url;
    if (Object.keys(params).length > 0) {
      let searchParams = new URLSearchParams();
      for (let param in params) {

        console.log("param==" + param + "  params==" + params[param]);
        if (typeof (params[param]) === "object" &&
          Object.prototype.toString.call(params[param]).toLowerCase() == "[object object]" && !params[param].length) {

          console.log("params[param] is JSON object");
          params[param] = JSON.stringify(params[param]);
        }
        searchParams.set(param, params[param]);


      }
      this.options.search = searchParams;

    }
    this.http.request(new Request(this.options))
      .toPromise()
      .then(res => { console.log("Http-Response==" + JSON.stringify(res.json())); onSuccess(res.json()); })
      .catch(this.handleError);
  }

  private handleError(error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
