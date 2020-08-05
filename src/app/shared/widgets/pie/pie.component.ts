import { Input, Component, OnInit} from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import { DashboardService } from 'src/app/modules/dashboard/dashboard.service';


@Component({
  selector: 'app-widget-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit{

  // public result: number;
  input1: number;
  input2: number;
  total: number;

  Highcharts = Highcharts;
  chartOptions = {};

  // @Input() data = [];

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void{
    this.dashboardService.result$.subscribe(
      (data) => {
       this.input1 = data.input1;
       this.input2 = data.input2;
       this.total = data.total;
       this.chartOptions = {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
        },
        title: {
          text: 'Calculator Pie Chart'
        },
        tooltip: {
          pointFormat: '{series.name}: <b>{point.y}</b>'
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b>: {point.y}'
            },
            showInLegend: true
          }
        },
        exporting: {
          enabled: true
        },
        credits: {
          enabled: false
        },
        series: [{
          name: 'Value',
          colorByPoint: true,
          data: [{
            name: 'Input1',
            y: this.input1,
            sliced: true,
            selected: true
          }, {
            name: 'Input2',
            y: this.input2
          }, {
            name: 'Result',
            y: this.total
          }]
        }],
      };
       // tslint:disable-next-line: no-string-literal
       console.log(this.chartOptions['series'][0].data[0]['y'], this.input2, this.total);
       // tslint:disable-next-line: no-string-literal
       console.log(this.chartOptions['series'][0].data[1]['y']);
       // tslint:disable-next-line: no-string-literal
       console.log(this.chartOptions['series'][0].data[2]['y']);
    }
    );

    HC_exporting(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }
}
