import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-pnr',
  templateUrl: './pnr.component.html',
  styleUrls: ['./pnr.component.css']
})
export class PnrComponent {
  Userpnr!:String;
  url!:string;
  pnrInfo!:any;
  
  constructor(private http:HttpClient){

  }

  search(){
    this.url=`http://localhost:8080/status?pnrNo=${this.Userpnr}`;
    this.http.get(this.url).subscribe((response:any)=>{
    this.pnrInfo=response;
    })
  }

}
