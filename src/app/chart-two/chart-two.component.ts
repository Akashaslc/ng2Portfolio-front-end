import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart-two',
  templateUrl: './chart-two.component.html',
  styleUrls: ['./chart-two.component.css']
})
export class ChartTwoComponent implements OnInit {
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
  public barChartLabels: string[] = ['MongoDB', 'Firebase', 'Polymer', 'Sails', 'ThreeJS', 'GsapJS'];
  public barChartType: string = 'horizontalBar';
  public barChartLegend: boolean = false;
  public barChartColors: any[] = [
     { // Purple base, green border
      backgroundColor: 'rgba(175,76,171,.5)',
      borderColor: 'rgba(76,175,80,0.5)',
      borderWidth: 3,
      hoverBackgroundColor: 'rgba(175,76,171,.8)',
      hoverBorderColor: 'rgba(76,175,80,.8)'
    }
  ];

  public barChartData: any[] = [
    {data: [35, 45, 65, 45, 25, 25], label: 'Second dataset'}
  ];

  // events
  public chartHovered(e: any): void {
    console.log(e);
  }
  constructor() { }

  ngOnInit() {
  }

}
