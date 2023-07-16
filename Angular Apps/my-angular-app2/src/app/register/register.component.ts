import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  
  user:User=new User();

  register(){
alert(""+this.user.Uname + "  " + this.user.mobile + "  " + this.user.email)
  }
}

export class User{
  Uname!:string;
  mobile!:string;
  email!:string;
  password!:string;
}
