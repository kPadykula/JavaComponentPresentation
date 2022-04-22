import {PublicRoutingModule} from "./public-routing.module";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {HomeComponent} from "./home/home.component";
import {NgModule} from "@angular/core";
import { NavigationComponent } from './navigation/navigation.component';
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";

@NgModule({
  declarations: [
    HomeComponent,
    NavigationComponent,
  ],
  exports: [
    NavigationComponent

  ],
  imports: [
    CommonModule,
    RouterModule,
    PublicRoutingModule,
    MatButtonModule,
    MatMenuModule,
  ]
})
export class PublicModule { }
