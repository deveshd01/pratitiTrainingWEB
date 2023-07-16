import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <hello></hello>
    <app-lucky-number></app-lucky-number>
    <app-product-list></app-product-list>
  `,
  styles: []
})
export class AppComponent {
  title = 'my-angular-app1';
}
