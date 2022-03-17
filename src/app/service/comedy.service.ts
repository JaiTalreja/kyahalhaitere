import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComedyService {
private name:any;
  constructor() { }

  setName(name:any){
    this.name=name;
  }
  getName(){
    return this.name;
  }
}
