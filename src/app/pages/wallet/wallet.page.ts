import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.page.html',
  styleUrls: ['./wallet.page.scss'],
})
export class WalletPage implements OnInit {
  @ViewChild('myChart') myChart;
  @ViewChild('myChart2') myChart2;
  @ViewChild('myChart3') myChart3;
  chart: any;
  chart2: any;
  chart3: any;
  data:number[] = [180, 188, 200, 220, 221, 198, 234, 198, 178, 167, 168, 160, 140, 130, 90, 80, 60, 78, 50];
  segmentValue:string;
  constructor() {
    this.segmentValue = "p2p";
  }

  ngOnInit() {
    // this.loadCharts();
  }
  ionViewDidEnter() {
    this.loadCharts();
  }

  segmentChanged() {
    if(this.segmentValue == 'p2p') {
      this.loadCharts();
    }
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
          backgroundColor: "transparent",
          borderColor: 'green',
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
          backgroundColor: "transparent",
          borderColor: 'red',
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

    // // Third graph
    // let ctx3 = this.myChart3.nativeElement;
    // this.chart3 = new Chart(ctx3, {
    //   type: 'line',
    //   data: {
    //     labels: data,
    //     datasets: [{
    //       data: data,
    //       backgroundColor: "transparent",
    //       borderColor: 'green',
    //       borderWidth: 2,
    //       pointRadius: 0
    //     }]
    //   },
    //   options: {
    //     scales: {
    //       yAxes: [{
    //         display: false,
    //         ticks: {
    //           beginAtZero: true,
    //         },
    //       }],
    //       xAxes: [{
    //         display: false,
    //       }]
    //     },
    //     legend: {
    //       display: false,
    //     }
    //   }
    // });
  }

}
