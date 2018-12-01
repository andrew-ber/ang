import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-my-widget-component',
  templateUrl: './my-widget-component.component.html',
  styleUrls: ['./my-widget-component.component.css']
})
export class MyWidgetComponentComponent implements OnInit {

  userName :string;
  response :any;

  constructor(private http: HttpClient) { }

  search(){
    this.http.get('https://api.github.com/users/'+ this.userName)
    .subscribe((resp) => {
        this.response = resp;
        console.log(this.response)
    })
  }
  ngOnInit() {
  }

}
