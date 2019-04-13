import { Component, OnInit } from "@angular/core";
import { CommonService } from "../common.service";

@Component({
  selector: "app-left",
  templateUrl: "./left.component.html",
  styleUrls: ["./left.component.css"]
})
export class LeftComponent implements OnInit {
  users: {
    fname: string;
    lname: string;
    tel: string;
    address: string;
    city: string;
    state: string;
    zip: number;
  }[];
  constructor(private commonService: CommonService) {}

  ngOnInit() {
    this.users = users;
  }

  editUser(user, i) {
    console.log(user, i);
  }

  moveUser(user, i) {
    this.users.splice(i, 1);
    this.commonService.getAndSend(user);
  }
}

const users = [
  {
    fname: "Joanne",
    lname: "Reese",
    tel: "(687)134-9784",
    address: "1339 Facilisis Ave",
    city: "Carrollton",
    state: "MO",
    zip: 52455
  },
  {
    fname: "Aminata",
    lname: "Tisi",
    tel: "(866)376-1008",
    address: "6837 Nullam Ave",
    city: "Fort Collins",
    state: "DE",
    zip: 93696
  },
  {
    fname: "Marian",
    lname: "Mungillo",
    tel: "(762)015-5043",
    address: "607 In St",
    city: "Queen Creek",
    state: "OK",
    zip: 49961
  },
  {
    fname: "Moses",
    lname: "Cowen",
    tel: "(988)946-3099",
    address: "2334 Lacus Ct",
    city: "Philadelphia",
    state: "IA",
    zip: 53643
  },
  {
    fname: "Prakash",
    lname: "Nimon",
    tel: "(485)276-9544",
    address: "5705 Augue Rd",
    city: "Brodhead",
    state: "UT",
    zip: 14693
  }
];
