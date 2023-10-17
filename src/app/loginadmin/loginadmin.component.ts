import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { AuthadminService } from '../services/authadmin.service';
@Component({
  selector: 'app-loginadmin',
  templateUrl: './loginadmin.component.html',
  styleUrls: ['./loginadmin.component.css']
})
export class LoginadminComponent implements OnInit {

 
  dataReceived:any
  url:any
  messageAuthError:any
  constructor(private asd:AuthadminService,private route:Router,private arouter:ActivatedRoute) {
 
        this.route.navigate(['/admin'])
    
    
   }

  ngOnInit(): void {
    this.url=this.arouter.snapshot.queryParams['returnUrl'] || '/admin/'
    console.log(this.url)
  }

  loginadmin(f:any){
    let data=f.value

   
  }

}
