import { Component, OnInit } from '@angular/core';
import { AuthuserService } from '../services/authuser.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  messageError:any
  constructor(private aus:AuthuserService,private router:Router) { }
 
  ngOnInit(): void {
  }
 
  register(f:any){
    let data=f.value
    
    this.aus.register(data).subscribe(
      data =>{  this.router.navigate(['/login'])
      
      console.log(data)
    })

  }

  
}
