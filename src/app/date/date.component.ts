import { Component, OnInit } from '@angular/core';
import { CloudService } from '../cloud.service';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
  message :string;
  name :string = "vasya";
  items = ["one", "two", "three", "four", "five"];
  loggedIn :boolean = true;
  collapsed : boolean = true;
  ztext :string = "new text";
  visibility :boolean = true;
  
  constructor(private cloud :CloudService) { 
    
    setInterval(()=>{
        //this.message = new Date().toTimeString();
        this.message = new Date().toLocaleTimeString();
    }, 1000)
   this.cloud.consoleText("date component loaded"); 
  }

  ngOnInit() {
  }

  onEventClick(event){
    console.log(event);
  }

  toggleCollapse(){
    this.collapsed = !this.collapsed;  
    //alert(this.collapsed);
  }
  toggle(){
    this.visibility = !this.visibility;
  }
}
