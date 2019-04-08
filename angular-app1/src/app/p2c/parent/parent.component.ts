import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  myName:string;
  constructor() { }

  ngOnInit() {
  }
  sendValue(){
    console.log("sendValue is Trigged")
    this.myName = "I am Murali from Parent Component"
  }
}
