import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MainService {
  headers = new HttpHeaders("Content-Type: application/json; charset=UTF-8");

  constructor(private http: HttpClient) {}

  private getUrl(url: string = ""): string {
    return "http://localhost:3001/api" + url;
  }
  public get(url) {
    return this.http
      .get(this.getUrl(url), { headers: this.headers })
      .toPromise();
  }
  public post(data, url) {
    // console.log("URL: ", this.getUrl(url));  
    // console.log("просто URL: ", url);    
    return this.http
      .post(this.getUrl(url), data, {
        headers: this.headers,
      })
      .toPromise();
  }
  // "base api";
  public put(data, url) {
    // console.log("base api");
    console.log(data);
    this.http
      .put(this.getUrl(url), data, { headers: this.headers })
      .toPromise();
  }
  public delete(url) {
    console.log(this.getUrl(url));
    return this.http.delete(this.getUrl(url), { headers: this.headers}).toPromise();
  }
}