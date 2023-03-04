import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient, private router:Router) { }


  register(email:any,username:any,password:any,question:any,answer:any){
    const body={
      email,
      username,
      password,
      question,
      answer
    }
    return this.http.post('http://localhost:3000/register',body)
  }

  login(email:any,password:any){
    const body={
      email,
      password
    }
    return this.http.post('http://localhost:3000/login',body)
  }
  save(emailOld:any,emailNew:any,username:any){
    const body={
      emailOld,
      emailNew,
      username
    }
    return this.http.patch('http://localhost:3000/editData',body)
  }

  updatePassword(email:any,password:any,answer:any){
    const body={
      email,
      password,
      answer
    }
    return this.http.patch('http://localhost:3000/passwordEdit',body)
  }




}
