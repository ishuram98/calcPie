// import { Values } from './../../shared/values.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export class Values {
  public input1: number;
  public input2: number;
  public total: number;
}

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  // public input1 = 0;
  // public input2 = 0;
  // public total = 0;

  // data: number[];
 // option: {};
  // public res: {} = { input1: ' ', input2: ' ', result: ' '};
  public result = new Subject <Values>();
  result$ = this.result.asObservable();

 // public option = new Subject<Object[]>();
 // option$ = this.option.asObservable();

// public a: number ;
// public b: number ;
// public c: number ;
  constructor() { }

  sendResult(values: Values): void{

    // this.data = [this.input1, this.input2, this.total];
  //  this.a = input1;
  //  this.b = input2;
  //  this.c = result;

  //   objToPass = { a: this.a, b: this.b, c: this.c };
    this.result.next(values);
   //  console.log(this.input1);
  }
/*
  pieChart(): any{
    console.log(this.input1);
    console.log(this.input2);
    return [{
      name: 'Input1',
      y: 5,
    }, {
      name: 'Input2',
      y: 5
    }, {
      name: 'Result',
      y: 5
    }];
  }
  */

}
