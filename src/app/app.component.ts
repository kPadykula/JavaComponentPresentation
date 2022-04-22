import { Component } from '@angular/core';

import { TranslateService} from "@ngx-translate/core";
import defaultLanguage from "./../assets/i18n/pl.json";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private translate:TranslateService) {
    translate.setTranslation('pl', defaultLanguage);
    translate.setDefaultLang('pl');
  }
}
