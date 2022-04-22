import {PublicRoutingModule} from "./public-routing.module";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {HomeComponent} from "./home/home.component";
import {NgModule} from "@angular/core";
import { NavigationComponent } from './navigation/navigation.component';
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import {TranslateModule} from "@ngx-translate/core";

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
    MatIconModule,
    TranslateModule,
  ]
})
export class PublicModule { }
