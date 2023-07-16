import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent {
  a!:number;
  b!:number;
  result!:number;

  add(){
this.result=this.a+this.b;
  }
  sub(){
    this.result=this.a-this.b;
  }

}
