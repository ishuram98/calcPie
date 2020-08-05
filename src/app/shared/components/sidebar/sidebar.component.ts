import { DashboardService, Values } from './../../../modules/dashboard/dashboard.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  private values: Values;

  public input1: number;
  public input2: number;
  public operatorChosen: string;
  public result: number;
  topicHasError = true;
  operators = ['+', '-', '*', '/'];

 // props = { input1: this.in1, input2: this.in2, operatorChosen: this.opChosen};

 validateTopic(value): void {
  if (value === 'Select') {
    this.topicHasError = true;
  } else {
    this.topicHasError = false;
  }
}

constructor(private dashboardService: DashboardService){}

  ngOnInit(): void {
  }

  getResult(): void {
    if (this.operatorChosen === '+') {
      this.result = Number(this.input1) + Number(this.input2);
  }
    if (this.operatorChosen === '-') {
    this.result = this.input1 - this.input2;
  }
    if (this.operatorChosen === '*') {
  this.result = this.input1 * this.input2;
  }
    if (this.operatorChosen === '/') {
  this.result = this.input1 / this.input2;
  }
    console.log(this.result);

    this.values = {
    input1: this.input1,
    input2: this.input2,
    total: this.result
  };

    this.dashboardService.sendResult(this.values);
  }

}
