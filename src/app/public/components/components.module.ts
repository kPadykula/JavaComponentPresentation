import {RouterModule} from "@angular/router";

import {NgModule} from "@angular/core";
import {DisplayComponent} from "./display/display.component";
import {KeyboardComponent} from "./keyboard/keyboard.component";
import {LogicComponent} from "./logic/logic.component";
import {ComponentsRoutingModule} from "./components-routing.module";
import {TranslateModule} from "@ngx-translate/core";
import {MatTabsModule} from "@angular/material/tabs";
import {HighlightModule} from "ngx-highlightjs";
import {HighlightPlusModule} from "ngx-highlightjs/plus";

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
    ComponentsRoutingModule,
    TranslateModule,
    MatTabsModule,
    HighlightModule,
    HighlightPlusModule,
  ],
})
export class ComponentsModule { }
