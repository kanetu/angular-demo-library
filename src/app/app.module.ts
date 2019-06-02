import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { KanetuComponent, FooterComponent, HeaderComponent, LoginComponent, LeftSidebarComponent} from 'kanetu';
@NgModule({
  declarations: [
    AppComponent,
    KanetuComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    LeftSidebarComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
