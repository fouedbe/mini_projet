import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  token:any=localStorage.getItem('token')
 
  constructor(private http:HttpClient) { }



  getAllstudents(){
    return this.http.get(`${'http://localhost:3000/user'}`+'/getallusers')
  }

  addstudent(profile:any){

    return this.http.post('http://localhost:3000/user'+'/add',profile)

  }

  deletestudent(id:any){
    return this.http.delete('http://localhost:3000/user/deleteUser/:id')

  }


  updateStudent(id:string,newprofile:any){

    return this.http.patch('http://localhost:3000/user/updateUser/:id',newprofile)

  }


  getOnestudent(id:any){
    
    return this.http.get('http://localhost:3000/user/getuserbyid/'+id)
  }
  addcours(body:any){

    return this.http.post('http://localhost:3000/cours/addc',body)

  }
  getcours(){
    return this.http.get('http://localhost:3000/cours/getallcours')
  }
}
