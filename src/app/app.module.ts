import { RandomUserService } from './services/RandomUser.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http"

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    HttpClientModule,
  ],
  providers: [
    RandomUserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
