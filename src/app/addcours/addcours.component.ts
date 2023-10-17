import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-addcours',
  templateUrl: './addcours.component.html',
  styleUrls: ['./addcours.component.css']
})
export class AddcoursComponent implements OnInit {

  messageErr=""
  constructor(private ds:DataService,private route:Router) { }

  ngOnInit(): void {
  }
  add(f:any){
    let data=f.value
    // console.log(data)
    this.ds.addcours(data).subscribe(response=>{
       console.log(response)

      this.route.navigate(['/angular/id'])

    })
  }
  
}

