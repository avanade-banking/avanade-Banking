import { Component, OnInit } from '@angular/core';
import { TransferService } from '../../transfer.service';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';




@Component({
  selector: 'app-transfer-page',
  templateUrl: './transfer-page.component.html',
  styleUrls: ['./transfer-page.component.css']
})
export class TransferPageComponent implements OnInit {

  yourAccount = null;
  sendAccount = null;
  transfer = null;

  constructor(private tranferService: TransferService, private router: Router, ) { }

  sendTransfer() {
    
    const dataTranfer = {
      yourAccount: "11414-0",
      sendAccount: this.sendAccount,
      transfer: this.transfer,
    }

    const headers = {
      'Content-Type': 'application/json',
      'x-access-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkMmI3YzdiOGMyYzYzMzk0NDIxZDc4MiIsIm5hbWUiOiJGZXJuYW5kbyBPdXRyYSBQZXNzb2EiLCJpYXQiOjE1NjMxNjI5MTQsImV4cCI6MTU2MzI0OTMxNH0.ouYPpNKjoHuq9g8PfYIb9MhjXiziyfN_D0XG4uAiI8o"
    }

    const option = {
      headers: new HttpHeaders(headers)
    }
    
    this.tranferService.putTransfer(dataTranfer, option)
      .subscribe((data:any) => {
        if(data.success){
          alert(data.success);
          this.router.navigateByUrl('/');
        }
        else if(data.fail){
          alert(data.fail)
        }
        
      
    });

  }

  ngOnInit() {

  }

}