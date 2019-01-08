import { Injectable } from '@angular/core';

import * as fetch from 'isomorphic-fetch';
import * as fetchJsonp from 'fetch-jsonp';
// import * as Cookies from 'js-cookie';
import * as queryString from 'query-string';

@Injectable({
  providedIn: 'root'
})
export class FetchService {

  // private cookie: any;

  // public getCookie (attrName?: string) {
  //   return Cookies.get(attrName);
  // }
  //
  // public setCookie(attrName: string, attr: any) {
  //   Cookies.set(attrName, attr);
  // }

  /*
  * method
  * headers
  * body GET 不可以 POST 可以
  * mode
  * credentials
  * etc.
  */

  conf = {
    method: 'GET', // 默认 GET ; POST
    credentials: 'omit', // 默认 omit 不带 cookie, 改为 include 带 cookie
    toJson: true, // 默认转化为 JSON 格式
  };

  constructor (

  ) {
    // this.cookie = this.getCookie();
    // console.log(this.cookie);
  }

  async toJson (res) {
    return await res.json();
  }

  async fetch (url: string = '', data: any = {}, options: any = {}) {
    try {
      const reqUrl = (data && Object.keys(data).length > 0) ? `${url}?${queryString.stringify(data)}` : url;
      const op = {
        ...this.conf,
        ...options
      };

      const res = await fetch(reqUrl, op);

      return op.toJson ? this.toJson(res) : res;
    } catch (e) {
      throw new Error(e);
    }
  }

  async fetchJsonp (url: string = '', data: any = {}, options: any = {}) {
    try {
      const reqUrl = (data && Object.keys(data).length > 0) ? `${url}?${queryString.stringify(data)}` : url;
      const op = {
        jsonpCallback: 'callback',
        ...this.conf,
        ...options,
      };

      const res = await fetchJsonp(reqUrl, op);

      return op.toJson ? this.toJson(res) : res;
    } catch (e) {
      throw new Error(e);
    }
  }

}
