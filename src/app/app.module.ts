import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// export const createTranslateLoader = (http: HttpClient) =>
//   new MultiTranslateHttpLoader(http, [
//     { prefix: './assets/i18n/b2b_', suffix: '.json?v=339' },
//     { prefix: './assets/i18n/analyzer_', suffix: '.json?v=339' },
//     { prefix: './assets/i18n/common_', suffix: '.json?v=339' },
//     { prefix: './assets/i18n/questionnaire_', suffix: '.json?v=339' },
//   ]);

const HttpLoaderFactory = (http: HttpClient) => {
  // @ts-ignore
  return new MultiTranslateHttpLoader(http, [
    { prefix: './assets/i18n/main_', suffix: '.json' },
    { prefix: './assets/i18n/feature_', suffix: '.json' },
  ]);
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      // defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    // SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
