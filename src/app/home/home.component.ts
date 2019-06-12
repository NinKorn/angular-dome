import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  static ="显示";
  isShow = true;
  list = [
    {id:1,name:'第一个',age:23,sex:1,},
    {id:2,name:'第二个',age:25,sex:1,},
    {id:3,name:'第三个',age:29,sex:0,},
    {id:4,name:'第四个',age:24,sex:1,},
    {id:5,name:'第一个',age:33,sex:0,},
    {id:6,name:'第一个',age:21,sex:1,},
  ]
  show(){
    this.isShow = !this.isShow;
  }
  constructor() { }

  ngOnInit() {
  }

}
