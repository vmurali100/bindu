import { Component } from "@angular/core";
import { CommonService } from "./common.service";
import { Angular5Csv } from "node_modules/angular5-csv/dist/Angular5-csv";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  data: any;
  newData: any = [];
  constructor(private commonService: CommonService) {}
  isLoading: boolean;
  ngOnInit() {
    this.isLoading = false;
  }

  getData() {
    this.isLoading = true;
    setTimeout(() => {
      this.commonService.getInfo().subscribe(response => {
        this.data = response;
        this.data.map(obj => {
          let newObj = {};
          for (let prop in obj) {
            console.log(prop);
            if (
              prop == "id" ||
              prop == "name" ||
              prop == "username" ||
              prop == "email"
            ) {
              newObj[prop] = obj[prop];
            }
          }
          this.newData.push(newObj);
        });
        this.isLoading = false;
      });
    }, 2000);
  }

  downloadData() {
    // var myData = this.data;
    let downData;
    if (this.selectedData.length > 0) {
      downData = this.selectedData;
    } else {
      downData = this.newData;
    }
    new Angular5Csv(downData, "My Report");
  }
  selectedData = [];

  selectUser(user) {
    if (this.selectedData.indexOf(user) == -1) {
      this.selectedData.push(user);
    } else {
      let ind = this.selectedData.indexOf(user);
      this.selectedData.splice(ind, 1);
    }
  }
}
