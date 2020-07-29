import { ResultService } from './../../../result.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

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

  constructor(private resService: ResultService) {}

  ngOnInit(): void {
  }

  getResult(): void {
    if (this.operatorChosen === '+') {
      this.result = Number(this.input1) + Number(this.input2);
      console.log(this.result);
  }
    if (this.operatorChosen === '-') {
    this.result = this.input1 - this.input2;
    console.log(this.result);
  }
    if (this.operatorChosen === '*') {
  this.result = this.input1 * this.input2;
  }
    if (this.operatorChosen === '/') {
  this.result = this.input1 / this.input2;
  }
    this.resService.sendResult(this.result);
  }

}
