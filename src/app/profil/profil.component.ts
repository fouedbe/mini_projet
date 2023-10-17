
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  id:any
  dataStudent:any
  constructor(private aroute:ActivatedRoute,private ds:DataService) { 
    this.aroute.params.subscribe(data=>this.id=data)
  }

  ngOnInit(): void {
    this.ds.getOnestudent(this.id).subscribe(data=>this.dataStudent=data)

  }

}
