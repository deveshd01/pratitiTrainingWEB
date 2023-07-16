import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  template: `
  <br>
  <div><button (click)="SHOWProducts()">SHOW PRODUCTS</button></div>
  <div><button (click)="sortProducts()">Sort Products</button></div>
  <div *ngIf="products" >
      
  <div class="card" *ngFor="let p of products">
    <div>
        <img src={{p.link}} >

        <div class="container">
          <h4><b>{{p.Mobile | uppercase}}</b></h4>
          <p>{{p.price | currency:'INR'}}</p>
        </div>
    </div>
  </div>
  </div>
  `,
  styles: [
    `
    .card {
    /* Add shadows to create the "card" effect */
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    display: flex;
    flex-direction: row;
    float: left;

    justify-content: space-around

  }
  
  /* On mouse-over, add a deeper shadow */
  .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
  
  /* Add some padding inside the card container */
  .container {
    padding: 2px 16px;
    
  }
    `
  ]
})
export class ProductListComponent {
  products!: any[] ;
  flag!: boolean;
  SHOWProducts() { 
    this.products= [
      { link: "https://m.media-amazon.com/images/I/413u56t+CiL._SY300_SX300_.jpg", Mobile: 'Samsung3', price: '1233' },
      { link: "https://m.media-amazon.com/images/I/413u56t+CiL._SY300_SX300_.jpg", Mobile: 'Samsung1', price: '13' },
      { link: "https://m.media-amazon.com/images/I/413u56t+CiL._SY300_SX300_.jpg", Mobile: 'Samsung2', price: '123' }
    ]
   }

   sortProducts(){
    this.products.sort(
      (p1, p2) => { return p1.price - p2.price }
    );
   }
}
