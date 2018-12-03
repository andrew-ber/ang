import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-my-widget-component',
  templateUrl: './my-widget-component.component.html',
  styleUrls: ['./my-widget-component.component.css']
})
export class MyWidgetComponentComponent implements OnInit {

  userName :string;
  response :any;
  posts :any;
  cookies :any;
  error : any;
  
  constructor(private http: HttpClient, private cookieService :CookieService ) { }

  search(){
/*
    this.http.get('https://api.github.com/users/'+ this.userName)
    .subscribe((resp) => {
        this.response = resp;
        //console.log(this.response)
    })
  */
 this.http.get('http://localhost:8081/ngenie-microblog/rest/posts',{ withCredentials:true })
    .subscribe(
      (resp) => {this.posts = resp},
      (error) => this.error = error
    )
  }
  
  ngOnInit() {
    //equip.portalcore.auth.cookie
    //this.cookies = this.cookieService.getAll();
//    this.cookieService.
    //console.log(this.cookies)
  }

}
