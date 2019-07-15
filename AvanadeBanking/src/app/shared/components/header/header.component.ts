import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import jwt from 'jwt-decode';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user$: Observable<any>;

  constructor(private _authService: AuthService, private _router: Router) { }

  ngOnInit() {
    const token = localStorage.getItem('TOKEN_LOGIN');

    if(!token) {
      console.log('sem token');
      return;
    }

    let decoded = jwt(token);
    console.log(decoded);
    
    

    this._authService.setUser({
      id: decoded.id,
      name: decoded.name
    })

    this.user$ = this._authService.currentUser;
  }

    
  sair() {
    this._authService.logout();
    this._authService.setUser(null);
    this._router.navigate(['/','login'])
  }

}

