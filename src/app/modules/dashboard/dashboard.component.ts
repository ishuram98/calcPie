import { DashboardService } from 'src/app/modules/dashboard/dashboard.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  pieChart = [];
  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.pieChart = this.dashboardService.pieChart();

  }

}
