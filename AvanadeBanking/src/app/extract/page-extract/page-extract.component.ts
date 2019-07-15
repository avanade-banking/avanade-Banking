import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';
import JwtDecode from 'jwt-decode';
// import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-page-extract',
  templateUrl: './page-extract.component.html',
  styleUrls: ['./page-extract.component.css']
})
export class PageExtractComponent implements OnInit {

  validToken: boolean = false;
  userName: string;
  userAccount;
  userExtract: any;
  token;

  constructor(private authService: AuthService, private routes: Router) { }

  verifyToken() {
    const token = this.authService.getToken();
    this.token = this.authService.getToken();
    if (token) {
      console.log("PERMITIDO: ", token);
      this.validToken = true;
    }
    else {
      alert("Usuario nao encontrado!");
      this.routes.navigateByUrl('/login');
    }
  }
  getUserInfos() {
    const user = this.authService.getUserName();
    this.userName = user;
    return this.userName;
  }
  getUserExtract(account) {
    const token = this.authService.getToken();

    return this.authService.getExtract(account, token).subscribe(infos => {
      // console.log("INFOS EXTRACT do return: ", infos);
      // let data = JSON.stringify(infos)
      // this.userExtract = JSON.parse(data);
      // console.log("## INFOS: ", this.userExtract)
      console.log(infos);
      this.userExtract = infos;
    });
  }
  setUserDeposit(account, value) {
    const token = this.authService.getToken();

    return this.authService.setDeposit(account, value, token).subscribe(infos => {
      console.log("INFOS EXTRACT do return: ", infos);
    });
  }

  ngOnInit() {
    this.verifyToken();
    this.getUserInfos();

    if (this.token) {
      let decoded = JwtDecode(this.token);

      this.authService.getAccountId(decoded.id, this.token).subscribe((res: any) => {
        this.getUserExtract(res.account);
      }, erro => console.log(erro))
    }


    // faz depositos
    // this.setUserDeposit("46019-8", parseInt("500"));

    // faz a listagem inicial do extrato, passar conta do usuario
    // this.getUserExtract("90106-4");
  }

}
