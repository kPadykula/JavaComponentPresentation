import {PublicRoutingModule} from "./public-routing.module";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {HomeComponent} from "./home/home.component";
import {NgModule} from "@angular/core";

@NgModule({
  declarations: [
    HomeComponent,
  ],
  exports: [

  ],
  imports: [
    CommonModule,
    RouterModule,
    PublicRoutingModule,
  ]
})
export class PublicModule { }
