import { Component } from '@angular/core';

@Component({
  selector: 'hello',
  template: `
    <h1>Hello {{name}}</h1>
  `,
  styles: [
    `
    h1 { font-weight: normal;
      colour :red;
     }
    `
  ]
})
export class HelloComponent {
    name:String ="Devesh";
}
