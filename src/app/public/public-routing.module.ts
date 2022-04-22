import {RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {NgModule} from "@angular/core";
@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'components',
        loadChildren: () => import('./components/components.module').then(m => m.ComponentsModule)
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class PublicRoutingModule { }
