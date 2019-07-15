import { Component, OnInit } from '@angular/core';
import { TransferService } from 'src/app/transfer/transfer.service';
import { RouterModule, Router } from '@angular/router';


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
      'x-access-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkMmI3YmQzOGMyYzYzMzk0NDIxZDc4MCIsIm5hbWUiOiJGZXJuYW5kbyBQZXNzb2EiLCJpYXQiOjE1NjMxMzgxNzQsImV4cCI6MTU2MzIyNDU3NH0.tE7gBSog5U8KFyFipZ6O9SoxxsG5BRnM03Fm_d-YCrE"
    }

    const option = {
      headers: new Headers(headers)
    }

    this.tranferService.putTrasfer(dataTranfer, option)
      .subscribe((data:any) => {
        if(data.success){
          alert(data.success);
          this.router.navigateByUrl('/home');
        }
        else if(data.fail){
          alert(data.fail)
        }
        
      
    });

  }

  ngOnInit() {

  }

}
