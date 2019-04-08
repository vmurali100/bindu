import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { P2cComponent } from './p2c/p2c.component';
import { ParentComponent } from './p2c/parent/parent.component';
import { ChildComponent } from './p2c/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    P2cComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
