import { RandomUserService } from './services/RandomUser.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { EmployeeFilterPipe } from './pipe/employee-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeFilterPipe,
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    FormsModule
  ],
  providers: [
    RandomUserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
