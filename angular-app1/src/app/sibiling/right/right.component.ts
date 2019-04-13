import { Component, OnInit } from "@angular/core";
import { CommonService } from "../common.service";

@Component({
  selector: "app-right",
  templateUrl: "./right.component.html",
  styleUrls: ["./right.component.css"]
})
export class RightComponent implements OnInit {
  rightUsers: any = [];
  constructor(private commonService: CommonService) {}

  ngOnInit() {
    this.commonService.getAndSendInfo.subscribe(res => {
      console.log(res);
      this.rightUsers.push(res);
    });
  }
}
