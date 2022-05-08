import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import {PublicModule} from "./public/public.module";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {TranslateCompiler, TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import {TranslateMessageFormatCompiler} from 'ngx-translate-messageformat-compiler';
import {HIGHLIGHT_OPTIONS, HighlightModule} from "ngx-highlightjs";
import {HighlightPlusModule} from "ngx-highlightjs/plus";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    PublicModule,
    NgbModule,
    HttpClientModule,
    HighlightModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      compiler: {
        provide: TranslateCompiler,
        useClass: TranslateMessageFormatCompiler
      }
    })
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        languages: {
          java: () => import('highlight.js/lib/languages/java.js'),
        }
      }
    }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
