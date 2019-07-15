import { Component, OnInit } from '@angular/core';
import { TransferService } from '../../transfer.service';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
import jwt from 'jwt-decode'
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-transfer-page',
  templateUrl: './transfer-page.component.html',
  styleUrls: ['./transfer-page.component.css']
})
export class TransferPageComponent implements OnInit {

  transfering = {
    yourAccount: '',
    sendAccount: '',
    transfer: ''
    
  }

  token = ''

  constructor(private tranferService: TransferService, private router: Router, private _authService: AuthService) { }

  sendTransfer() {

    let decoded = jwt(this.token)
    this._authService.getAccountId(decoded.id, this.token).subscribe((res: any) => {
      this.transfering.yourAccount = res.account;
      this.transfering.sendAccount;
      this.transfering.transfer
      this.tranferService.putTransfer(this.transfering.yourAccount, this.transfering.sendAccount, parseInt(this.transfering.transfer), this.token).subscribe(() => {
        alert('tranferencia realizada')
        this.router.navigate(['/', 'extract'])
      }, erro => console.log(erro))

    }, err => console.log(err))

    
  }

  ngOnInit() {
    this.token = this._authService.getToken()
  }

}