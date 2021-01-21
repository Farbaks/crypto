import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-minichart',
  templateUrl: './minichart.component.html',
  styleUrls: ['./minichart.component.scss'],
})
export class MinichartComponent implements OnInit {
  @Input() backgroundColor;
  @Input() borderColor;
  @Input() height;
  @Input() data;
  @ViewChild('myChart') myChart;
  chart: any;
  constructor() {}

  ngOnChanges(changes) {
    if (changes['data']) {
      console.log(this.backgroundColor, this.borderColor, this.height, this.myChart);
      // this.loadChart();
    }
  }

  ngOnInit() {}

  ngAfterViewInit() {
    this.loadChart();
    console.log(this.backgroundColor, this.borderColor, this.height, this.myChart);
  }

  loadChart() {

    let ctx = this.myChart.nativeElement;
    this.chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.data,
        datasets: [{
          data: this.data,
          backgroundColor: 'red',
          borderColor: 'blue',
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
