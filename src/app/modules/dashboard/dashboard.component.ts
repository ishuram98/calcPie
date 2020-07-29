import { ResultService } from './../../result.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // @Input() in1: number;

  // @Input() input1: number;
  // @Input() input2: number;
  // @Input() operatorChosen;

  public result;

  // @Input() props: { input1: number; input2: number; operatorChosen;};
  constructor(private resService: ResultService) { }

  ngOnInit(): void {
    this.resService.result$.subscribe(
      (result) => {
       this.result = result;
    });
  }



  // evaluate(): void{
  //   if (this.opChosen === '+') {
  //     this.result = this.in1 + this.in2;
  //     console.log(this.result);
  // }
  //   if (this.opChosen === '-') {
  //   this.result = this.in1 - this.in2;
  // }
  //   if (this.opChosen === '*') {
  // this.result = this.in1 * this.in2;
  // }
  //   if (this.opChosen === '/') {
  // this.result = this.in1 / this.in2;
  // }
  // }


}
