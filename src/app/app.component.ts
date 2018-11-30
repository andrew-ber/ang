import { Component } from '@angular/core';
import { CloudService } from './cloud.service';

@Component({
  selector: 'app-root' ,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'backoffice';
  constructor(cloud: CloudService){
    cloud.consoleText("Hello");
  }
}
