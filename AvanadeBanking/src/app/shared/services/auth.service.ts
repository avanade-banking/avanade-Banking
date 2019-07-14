import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
// import {jsonwebtoken} from "jsonwebtoken";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  API_VERSION = "v1";
  ACCOUNTS = "accounts";
  ACCOUNT = "account";
  LOGIN = "sigin";
  DEPOSIT = "deposit";
  USER = "user";
  BASE_URI = `http://localhost:3001/${this.API_VERSION}`;

  constructor(private httpClient: HttpClient) { }

  setDeposit(account, value, token) {
    let headers = new HttpHeaders();
    if (token) {
      headers = headers.set('x-access-token', token)
    }
    return this.httpClient
      .put(`${this.BASE_URI}/${this.ACCOUNT}/${this.DEPOSIT}`, 
      { account, value }, 
      { headers: headers }
      );
  }

  getAccounts() {
    return this.httpClient.get(`${this.BASE_URI}/${this.ACCOUNTS}`);
  }

  getExtract(accountNumber, token) {
    let headers = new HttpHeaders();
    if (token) {
      headers = headers.set('x-access-token', token)
    }
    return this.httpClient
      .get(`${this.BASE_URI}/${this.ACCOUNT}/${accountNumber}`, { headers: headers });
  }

  getToken() {
    //   this.routes.navigateByUrl('/extract');
    const token = localStorage.getItem('TOKEN_LOGIN');
    console.log("getToken(): ", token)
    return token;
  }
  
  getUserName() {
    const token = localStorage.getItem('USER_NAME');
    return token;
  }

  getUserId() {
    const token = localStorage.getItem('USER_ID');
    return token;
  }

  login(cpf, password): Observable<any> {
    return this.httpClient.post(`${this.BASE_URI}/${this.USER}/${this.LOGIN}`, {
      cpf,
      password
    });
  }

}
