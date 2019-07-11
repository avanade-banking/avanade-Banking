import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  route = '';
  password = '';
  validMessage = false;
  statusMessage = 'Seja bem-vindo!';

  constructor(private routes: Router) { }

  entrar() {
    if (this.password === '') {
      alert("Campo senha não pode ser vazio");
      return;
    }

    this.validMessage = true;
    setTimeout(() => {
      this.routes.navigateByUrl('/extract');
    }, 1500);
  }

  ngOnInit() {
    this.route = this.routes.url;
  }

}
