import { Component, OnInit } from '@angular/core';
import { AuthuserService  } from '../services/authuser.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
   datapost:any
   datacommt:any
   dataStudent:any
  constructor(private aus:AuthuserService) { 
    this.aus.getpost().subscribe(data => {
      console.log( data)
      this.datapost=data
    });
    this.aus.post().subscribe(data => {
      console.log( data)
      this.datacommt=data
    });
  
  }

  ngOnInit(): void {
   
    
  }

poster(f:any){
  let data=f.value
  this.aus.commentaire(data).subscribe(data => {
    
    console.log(data);
    this.datacommt=data;
  });
 
}
commt(){
  this.aus.post().subscribe(data => {
    console.log( data)
    this.datacommt=data
  });
}
getp(){
  this.aus.getpost().subscribe(data1 => {
    console.log( data1)
    this.datapost=data1
  });
}
postprob(f:any){
  
  let data1=f.value
 
  this.aus.postprob(data1).subscribe(data1 => {
    
    console.log(data1);
     this.datapost=data1;
  });
}
calcul(id:any){
  

}
}
