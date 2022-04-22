import {RouterModule} from "@angular/router";

import {NgModule} from "@angular/core";
import {DisplayComponent} from "./display/display.component";
import {KeyboardComponent} from "./keyboard/keyboard.component";
import {LogicComponent} from "./logic/logic.component";
import {ComponentsRoutingModule} from "./components-routing.module";

@NgModule({
  declarations: [
    DisplayComponent,
    KeyboardComponent,
    LogicComponent
  ],
  exports: [
    RouterModule
  ],
  imports: [
    ComponentsRoutingModule
  ]
})
export class ComponentsModule { }
