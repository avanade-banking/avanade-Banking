import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';
// import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-page-extract',
  templateUrl: './page-extract.component.html',
  styleUrls: ['./page-extract.component.css']
})
export class PageExtractComponent implements OnInit {

  validToken: boolean =  false;
  userName: string;
  userAccount;
  userExtract;
  token;

  constructor(private authService: AuthService, private routes: Router) { }

  verifyToken(){
    const token = this.authService.getToken();
    if(token) {
      console.log("PERMITIDO: ", token);
      this.validToken = true;
    }
    else {
      alert("Usuario nao encontrado!");
      this.routes.navigateByUrl('/login');
    }
  }
  getUserInfos(){
    const user = this.authService.getUserName();
    this.userName = user;
    return this.userName;
  }
  getUserExtract(account){
    const token = this.authService.getToken();
    
    return this.authService.getExtract(account, token).subscribe(infos => {
      // console.log("INFOS EXTRACT do return: ", infos);
      let data = JSON.stringify(infos)
      this.userExtract = JSON.parse(data);
      console.log("## INFOS: ", this.userExtract)
    });
  }
  setUserDeposit(account, value){
    const token = this.authService.getToken();
    
    return this.authService.setDeposit(account, value, token).subscribe(infos => {
      console.log("INFOS EXTRACT do return: ", infos);
    });
  }

  ngOnInit() {
    this.verifyToken();
    this.getUserInfos();

    // faz depositos
    // this.setUserDeposit("46019-8", parseInt("500"));

    // faz a listagem inicial do extrato, passar conta do usuario
    this.getUserExtract("46019-8");
  }

}
