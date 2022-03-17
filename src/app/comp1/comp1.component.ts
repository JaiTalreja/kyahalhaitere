import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComedyService } from '../service/comedy.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss']
})
export class Comp1Component implements OnInit {

  audio:any;
  yes1:boolean=false;
  list:any=['Are you LOL ?','Tu Hai tujhe malum nhi hai !!',' !! Bol rha hu tu hai ..🙃..',' !! Kya kr rha/rhi 😒 hai tu ',' Bakka !! ','Are !!!'];
  selected="Are you LOL ?";
  ctr:any=0;
  name:any;
  constructor( private router:Router,private service:ComedyService)   {
    this.name=this.service.getName();
   }

  ngOnInit(): void {
 this.audio=new Audio();
 this.audio.src="./assets/audio.mp3";
 this.audio.load();
  this.audio.play();


  }

  yes(){
 this.yes1=true;
 this.audio.pause();
  }
  no(){
    this.selected=this.list[Math.floor(Math.random()*this.list.length)];
    var b:any = document.querySelector(".no-btn");
    var i = Math.floor(Math.random()*200)+1;
    var j = Math.floor(Math.random()*200)+1;
    b.style.left = i+"px";
    b.style.top = j+"px";

  }

}
