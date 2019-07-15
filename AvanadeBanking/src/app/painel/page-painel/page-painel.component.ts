import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-page-painel',
  templateUrl: './page-painel.component.html',
  styleUrls: ['./page-painel.component.css']
})
export class PagePainelComponent implements OnInit {
  route = "";
  chart:any = [];

  constructor(private routes: Router) { }
  
  
  ngOnInit() {
    this.route = this.routes.url;

    this.chart = new Chart('canvas', {
      type:'line',
      data: {
        labels: ['Jan','Fev','Mar','Abr','Mai','Jun','Jul'],
        datasets: [
          {
            label: "Gastos",
            data: [1,3,5,10,56,65,35,53,53].reverse(),
            backgroundColor: "red",
            borderColor: "red",
            fill: true,
          },
          {
            label: "Investimentos",
            data: [1,3,5,10,56,65,35,543,543],
            backgroundColor: "blue",
            borderColor: "blue",
            fill: false,
          }
        ]
      }
    })
  }

}
