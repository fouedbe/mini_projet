import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthuserService {

  constructor(private http:HttpClient) { }



  register(body:any){
    return this.http.post('http://localhost:3000/user/register',body)
  }

  login(body:any){
    return this.http.post('http://localhost:3000/user/login',body)
  }

commentaire(body:any){
  return this.http.post('http://localhost:3000/commentaire/addCommentaire',body) 

}
post(){
  return this.http.get('http://localhost:3000/commentaire/:postId')
}
postprob(body:any){
  return this.http.post('http://localhost:3000/question/add',body)
}
getpost(){
  return this.http.get('http://localhost:3000/question/getallquestion')
}
  saveToken(token:any){

    localStorage.setItem('token',token)

  }


 
}
