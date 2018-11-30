import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CloudService {

  consoleText(arg){
    console.log(arg);
  }
  constructor() { }
}
