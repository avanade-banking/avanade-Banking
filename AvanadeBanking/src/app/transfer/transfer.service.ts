import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';





@Injectable({
  providedIn: 'root'
})
export class TransferService {

  url = 'http://localhost:3001/v1/account/transfer/';
  // transfer/:yourAccount/:sendAccount

  constructor(private httpClient: HttpClient ) { }
  
  putTransfer(yourAccount, sendAccount, transfer, token){

    parseInt(transfer)
    let headers = new HttpHeaders();
    if (token) {
      headers = headers.set('x-access-token', token)
    }
    console.log(yourAccount, sendAccount)
    return this.httpClient.put(this.url + yourAccount + '/' + sendAccount, { transfer }, {headers})
  }
}
