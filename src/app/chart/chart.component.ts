import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
      xAxes: [{
        ticks: {
          beginAtZero: true,
          max: 100
        }
      }]
    }
  };
  public barChartLabels: string[] = ['HTML', 'CSS', 'JS', 'Angular', 'Node', 'Material'];
  public barChartType: string = 'horizontalBar';
  public barChartLegend: boolean = false;
  public barChartColors: any[] = [
     { // Green base, purple border
      backgroundColor: 'rgba(76,175,80,0.5)',
      borderColor: 'rgba(175,76,171,.5)',
      borderWidth: 3,
      hoverBackgroundColor: 'rgba(76,175,80,.8)',
      hoverBorderColor: 'rgba(175,76,171,.8)'
    }
  ];

  public barChartData: any[] = [
    {data: [70, 65, 55, 45, 35, 65], label: 'First dataset'}
  ];

  // events
  public chartHovered(e: any): void {
    console.log(e);
  }
  constructor() { }

  ngOnInit() {
  }

}
