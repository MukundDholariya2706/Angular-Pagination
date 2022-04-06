import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RandomUserService } from './services/RandomUser.service';
import { EmployeeFilterPipe } from './pipe/employee-filter.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { OrderModule } from 'ngx-order-pipe';

@NgModule({
  declarations: [AppComponent, EmployeeFilterPipe],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    FormsModule,
    OrderModule,
  ],
  providers: [RandomUserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
