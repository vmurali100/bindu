import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  myObj;
  constructor() { }

  ngOnInit() {
  }
  sendValue(){
    this.myObj = {
      fname:"Murali Krishna"
    }
  }
}
