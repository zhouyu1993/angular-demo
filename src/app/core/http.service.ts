import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// import * as Cookies from 'js-cookie';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  // private cookie: any;

  // public getCookie (attrName?: string) {
  //   return Cookies.get(attrName);
  // }
  //
  // public setCookie(attrName: string, attr: any) {
  //   Cookies.set(attrName, attr);
  // }

  constructor (
    private http: HttpClient,
  ) {
    // this.cookie = this.getCookie();
    // console.log(this.cookie);
  }

  get (url: string, options?: any): Promise<any> {
    return this.http.get(url, options).toPromise();
  }

  post (url: string, options?: any): Promise<any> {
    return this.http.post(url, options).toPromise();
  }
}
