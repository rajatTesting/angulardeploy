import { Component, OnInit } from '@angular/core';

//IMPORTS FOR THE GRAPHS
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';


@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.sass']
})
export class GraphsComponent implements OnInit {

  // DATA FOR CHART 1 - LEFT CHART
  //THIS DATA WILL COME FROM THE API, HARDCODED FOR NOW
  public lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Data Size' },
  ];

  //THIS WILL BE CONFIGURED AS PER THE DATA RECEIVED FROM THE API
  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  //NOT SURE, BUT SHOULD THE OPTION AND COLORS BE MOVED TO ENVIRONMENT VARIABLES??
  public lineChartOptions: (ChartOptions) = {
    responsive: true,
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'rgb(24,154,180, 1)',
      backgroundColor: 'rgb(24,154,180, 0.3)',
    },
  ];


  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];


  // DATA FOR CHART 2 - RIGHT CHART
  public lineChartData2: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'FTP' },
    { data: [15, 59, 80, 81, 56, 55, 40], label: 'JSON' },
    { data: [15, 59, 34, 8, 34, 51, 34], label: 'External Data Source' },
  ];

  //NOT SURE, BUT SHOULD THE OPTION AND COLORS BE MOVED TO ENVIRONMENT VARIABLES??
  public lineChartLabels2: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions2: (ChartOptions) = {
    scales: {
      yAxes: [{
          ticks: {
              beginAtZero: true
          }
      }]
  },
  elements: {
  line: {
      tension: 0
  }
}
  };
  public lineChartColors2: Color[] = [
    {
      borderColor: 'purple',
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },
    {
      borderColor: 'orange',
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },
    {
      borderColor: 'blue',
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },
  ];

  
  public lineChartLegend2 = true;
  public lineChartType2 = 'line';
  public lineChartPlugins2 = [];

  constructor() { }

  ngOnInit(): void {
    
  }

  //FUNCTION TO HANDLE CHANGES IN DATA WHEN NAVIGATION BUTTONS ON BOTTOM OF GRAPHS ARE CLICKED
  func(){
    alert("clicked on nav buttons on graph");
  }

}
