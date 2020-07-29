import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  public result = new Subject<string>();
  result$ = this.result.asObservable();

  constructor() { }

  sendResult(result): void{
    // const arr: string[] = {in1, in2, opChosen};
    this.result.next(result);
  }
}
