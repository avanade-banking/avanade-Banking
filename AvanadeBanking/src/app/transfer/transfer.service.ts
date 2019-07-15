import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';





@Injectable({
  providedIn: 'root'
})
export class TransferService {

  url = 'http://localhost:3001/v1/account/transfer';

  constructor(private httpClient: HttpClient ) { }

  putTrasfer(dataTransfer, option){
    return this.httpClient.put(this.url, dataTransfer, option)
  }
}
