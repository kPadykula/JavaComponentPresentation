import {RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {NgModule} from "@angular/core";

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent
      },
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class PublicRoutingModule { }
