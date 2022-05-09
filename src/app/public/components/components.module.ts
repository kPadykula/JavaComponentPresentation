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
import {MatIconModule} from "@angular/material/icon";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {CommonModule} from "@angular/common";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatDividerModule} from "@angular/material/divider";

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
    MatIconModule,
    MatButtonToggleModule,
    CommonModule,
    MatExpansionModule,
    MatDividerModule,
  ],
})
export class ComponentsModule { }
