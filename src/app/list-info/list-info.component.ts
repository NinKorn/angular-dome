import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-info',
  templateUrl: './list-info.component.html',
  styleUrls: ['./list-info.component.css']
})
export class ListInfoComponent implements OnInit {
  name =  '详情'
  constructor() { }

  ngOnInit() {
  }

}
