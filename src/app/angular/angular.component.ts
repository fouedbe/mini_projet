import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent implements OnInit {
dataArray:any
til:any
  constructor(private ds:DataService,private route:ActivatedRoute) {
    this.ds.getcours().subscribe(data=>{
      console.log(data)
      this.dataArray=data
    })
    this.route.params.subscribe(data =>{
      console.log(data)
      this.til=this.dataArray.title
    }
      
      )
   }
    
  ngOnInit(): void {
  }

}
