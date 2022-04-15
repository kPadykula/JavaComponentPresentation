import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./public/public.module').then(m => m.PublicModule), // Lazy load account module
    data: { preload: true }
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
