import { Component, OnInit, Input } from '@angular/core';
import { DashboardService } from 'src/app/modules/dashboard/dashboard.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

 // pieChart = [];

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {

   // this.pieChart = this.dashboardService.pieChart();
  }
}
