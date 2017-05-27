import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  // Doughnut
  public doughnutChartLabels: string[] = ['HTML', 'CSS', 'Javascript', 'TypeScript'];
  public doughnutChartData: number[] = [70, 60, 45, 45];
  public doughnutChartType: string = 'doughnut';
  public doughnutChartOptions: any = {
    title: ''
  }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
  constructor() { }

  ngOnInit() {
  }

}
