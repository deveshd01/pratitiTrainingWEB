import { Component } from '@angular/core';

@Component({
  selector: 'app-lucky-number',
  template: `
    <button (click)="funn()">Click Here</button> to know your lucky-number
    <p *ngIf="LuckyNumber > 0" >
      lucky-number is {{LuckyNumber}}
    </p>
  `,
  styles: [
  ]
})
export class LuckyNumberComponent {
  LuckyNumber!:number;
 funn(){
  this.LuckyNumber = Math.ceil(Math.random()*10);
 }
  
}
