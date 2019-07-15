import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
// import {jsonwebtoken} from "jsonwebtoken";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  API_VERSION = "v1";
  ACCOUNTS = "accounts";
  ACCOUNT = "account";
  ACCOUNT_SEARCH = "searchAccount";
  LOGIN = "sigin";
  DEPOSIT = "deposit";
  USER = "user";
  BASE_URI = `http://localhost:3001/${this.API_VERSION}`;

  private _user = new BehaviorSubject(null);
  currentUser = this._user.asObservable();

  constructor(private httpClient: HttpClient) { }

  setUser(usuario) {
    this._user.next(usuario);
  }

  logout() {
    localStorage.removeItem('TOKEN_LOGIN');
    this._user.next(null);
  };

  verifyToken() {
    return !!localStorage.getItem('TOKEN_LOGIN')
  }

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
  getAccountId(id, token) {
    console.log('estou no metodo');
    let headers = new HttpHeaders();
    if (token) {
      headers = headers.set('x-access-token', token)
    }
    return this.httpClient.get(`${this.BASE_URI}/${this.ACCOUNT}/${this.ACCOUNT_SEARCH}/${id}`, 
    { headers: headers });
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
