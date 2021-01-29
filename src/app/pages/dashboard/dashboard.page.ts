import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  @ViewChild('myChart') myChart;
  @ViewChild('myChart2') myChart2;
  @ViewChild('myChart3') myChart3;
  @ViewChild('banners') banners: IonSlides;
  chart: any;
  chart2: any;
  chart3: any;
  constructor() {
    this.bannerLoop();
  }

  ngOnInit() {
    // this.loadCharts();
  }
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    loop: true,
    spaceBetween: 16,
    autoHeight: true
  };

  bannerLoop() {
    setInterval(() => {
      this.banners.slideNext();
    }, 5000);
  }

  ionViewDidEnter() {
    this.loadCharts();
  }

  loadCharts() {
    let data = [180, 188, 200, 220, 221, 198, 234, 198, 178, 167, 168, 160, 140, 130, 90, 80, 60, 78, 50];
    // First graph
    let ctx = this.myChart.nativeElement;
    this.chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: data,
        datasets: [{
          data: data,
          backgroundColor: "rgba(250, 224, 194, .15)",
          borderColor: 'rgb(251, 198, 137)',
          borderWidth: 2,
          pointRadius: 0
        }]
      },
      options: {
        scales: {
          yAxes: [{
            display: false,
            ticks: {
              beginAtZero: true,
            },
          }],
          xAxes: [{
            display: false,
          }]
        },
        legend: {
          display: false,
        }
      }
    });

    // Second graph
    let ctx2 = this.myChart2.nativeElement;
    this.chart2 = new Chart(ctx2, {
      type: 'line',
      data: {
        labels: data,
        datasets: [{
          data: data,
          backgroundColor: "rgba(250, 224, 194, .15)",
          borderColor: 'rgb(251, 198, 137)',
          borderWidth: 2,
          pointRadius: 0
        }]
      },
      options: {
        scales: {
          yAxes: [{
            display: false,
            ticks: {
              beginAtZero: true,
            },
          }],
          xAxes: [{
            display: false,
          }]
        },
        legend: {
          display: false,
        }
      }
    });

    // Third graph
    let ctx3 = this.myChart3.nativeElement;
    this.chart3 = new Chart(ctx3, {
      type: 'line',
      data: {
        labels: data,
        datasets: [{
          data: data,
          backgroundColor: "rgba(250, 224, 194, .15)",
          borderColor: 'rgb(251, 198, 137)',
          borderWidth: 2,
          pointRadius: 0
        }]
      },
      options: {
        scales: {
          yAxes: [{
            display: false,
            ticks: {
              beginAtZero: true,
            },
          }],
          xAxes: [{
            display: false,
          }]
        },
        legend: {
          display: false,
        }
      }
    });
  }

}
