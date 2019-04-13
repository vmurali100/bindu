import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class CommonService {
  getAndSendInfo = new Subject();
  constructor() {}

  getAndSend(user) {
    this.getAndSendInfo.next(user);
  }
}
