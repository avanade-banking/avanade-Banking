import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-painel',
  templateUrl: './page-painel.component.html',
  styleUrls: ['./page-painel.component.css']
})
export class PagePainelComponent implements OnInit {
  route = "";
  
  constructor(private routes: Router) { }



  ngOnInit() {
    this.route = this.routes.url;
  }

}
