import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private ds:DataService, private router:Router){}
  email:any;
  username:any;
  password:any;
  question:any;
  answer:any;
  register(){
    var email=this.email;
    var username=this.username;
    var password=this.password;
    var question=this.question;
    var answer=this.answer;
    this.ds.register(email,username,password,question,answer).subscribe(
      (result:any)=>{
        alert(result.message)
        this.router.navigateByUrl('');
      },
      result=>{
        alert(result.error.message)
      }
    )    
  }

}
