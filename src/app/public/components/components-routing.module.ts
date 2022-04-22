import {RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {LogicComponent} from "./logic/logic.component";
import {KeyboardComponent} from "./keyboard/keyboard.component";
import {DisplayComponent} from "./display/display.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        children: [
          {
            path: 'logic',
            component: LogicComponent
          },
          {
            path: 'keyboard',
            component: KeyboardComponent
          },
          {
            path: 'display',
            component: DisplayComponent
          }
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class ComponentsRoutingModule { }
