import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { KanetuComponent, FooterComponent, HeaderComponent, LoginComponent, LeftSidebarComponent} from 'kanetu';
import { MainComponent } from './pages/main/main.component';


@NgModule({
  declarations: [
    AppComponent,
    KanetuComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    LeftSidebarComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
