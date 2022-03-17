import { Component } from '@angular/core';
import { ComedyService } from './service/comedy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Are_you_comedy_me';
  name:any="";
  flag:boolean=false;

  constructor(private service:ComedyService){

  }

  setname(){
    if(this.name.length!=0){
    this.service.setName(this.name);
    // alert(this.service.getName());

    this.flag=true;
  }
  else{
    alert('Nam to likh le ');
    var audio=new Audio();
    audio.src="./assets/cry.mp3";
    audio.load();
    audio.play();
    alert('AAb likh ke submit krna ');
  }
  }
}
