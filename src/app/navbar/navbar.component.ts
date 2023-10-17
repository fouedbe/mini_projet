import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 dataArray:any

  constructor(private ds:DataService,private route:Router) {  
    this.ds.getcours().subscribe(data=>{
    console.log(data)
    this.dataArray=data
   
  })}

  ngOnInit(): void {
  }
 
}
