import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { P2cComponent } from "./p2c/p2c.component";
import { ParentComponent } from "./p2c/parent/parent.component";
import { ChildComponent } from "./p2c/child/child.component";
import { SibilingComponent } from "./sibiling/sibiling.component";
import { LeftComponent } from "./sibiling/left/left.component";
import { RightComponent } from "./sibiling/right/right.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    AppComponent,
    P2cComponent,
    ParentComponent,
    ChildComponent,
    SibilingComponent,
    LeftComponent,
    RightComponent
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
