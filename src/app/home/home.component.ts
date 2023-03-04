import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private ds:DataService, private router:Router){}
  answer:any;
  password:any;
  email=JSON.parse(localStorage.getItem('email')||'') 
  username=JSON.parse(localStorage.getItem('username')||'') 
  question=JSON.parse(localStorage.getItem('question')||'') 

  logout(){
    alert('logout successful');
    localStorage.removeItem('id');
    localStorage.removeItem('email');
    localStorage.removeItem('username');
    localStorage.removeItem('question');
    this.router.navigateByUrl('')

  }

  save(){
    var emailNew=this.email;
    var username=this.username; 
    var emailOld=JSON.parse(localStorage.getItem('email')||'')    
    this.ds.save(emailOld,emailNew,username).subscribe(
      (result:any)=>{
        localStorage.setItem('email',JSON.stringify(result.email) );
        localStorage.setItem('username',JSON.stringify(result.username) );
        alert(result.message)
      },
      result=>{
        alert(result.error.message)
      }
    )    
  }

  updatePassword(){
    var answer=this.answer;
    var password=this.password;
    var email=this.email;    
    this.ds.updatePassword(email,password,answer).subscribe(
      (result:any)=>{
        alert(result.message)
      },
      result=>{
        alert(result.error.message)
      }
    )    

  }



}
