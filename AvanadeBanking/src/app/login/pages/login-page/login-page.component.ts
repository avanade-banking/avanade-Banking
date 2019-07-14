import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  route = '';
  password = '';
  cpf = '';
  validMessage = false;
  statusMessage = 'Seja bem-vindo!';

  constructor(private routes: Router, private authService: AuthService) { }

  entrar() {
    if (this.cpf === '' && this.password === '') {
      alert("Preencha todos os campos!");
      return;
    }

    this.authService.login(this.cpf, this.password).subscribe(value => {
      console.log("LOGOU!", value);
      
      this.validMessage = true;
      localStorage.setItem('TOKEN_LOGIN', value.token);
      localStorage.setItem('USER_ID', value.user._id);
      localStorage.setItem('USER_NAME', value.user.name);

      setTimeout(() => {
        this.routes.navigateByUrl('/extract');
      }, 500);
    });

  }

  ngOnInit() {
    this.route = this.routes.url;
  }

}
