import { Component, OnInit } from '@angular/core';
import { TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  selectedLanguage = true;

  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
  }

  changeLanguage() {
    this.selectedLanguage = !this.selectedLanguage;
    if (this.selectedLanguage)
      this.translate.setDefaultLang('pl');
    else
      this.translate.setDefaultLang('en');
  }

}
