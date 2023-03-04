import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  password: any;
  constructor(private ds:DataService, private router:Router){}
  email:any;
  login(){
    var email=this.email;
    var password=this.password;
    this.ds.login(email,password).subscribe(
      (result:any)=>{
        localStorage.setItem('email',JSON.stringify(result.email) );
        localStorage.setItem('id',JSON.stringify(result.id) );
        localStorage.setItem('username',JSON.stringify(result.username) );
        localStorage.setItem('question',JSON.stringify(result.question) );
        localStorage.setItem('token',JSON.stringify(result.token) );
        alert(result.message)
        this.router.navigateByUrl('home');
      },
      result=>{
        alert(result.error.message)
      }
    )    
  }


}
