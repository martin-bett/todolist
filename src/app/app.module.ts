import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { CookieService} from "ngx-cookie-service";
import { ListElementComponent } from './list/list-element/list-element.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ListElementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],

  providers: [CookieService],
  bootstrap: [AppComponent]
})

export class AppModule { }
