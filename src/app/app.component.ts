import { RandomUserService } from './services/RandomUser.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'pagination';

  data!: Array<any>;
  totalRecords!: string;
  page: Number = 1;
  config: any;
  searchText: any;
  key: string = 'name';
  reverse: boolean = false;

  constructor(private randomUser: RandomUserService) {
    this.data = new Array<any>();
    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.totalRecords,
    };

    this.getUsers();
  }

  getUsers() {
    this.randomUser.getData().subscribe((data) => {
      console.log(data);
      this.data = data.results;
      this.totalRecords = data.results.length;
    });
  }

  pageChanged(event: any) {
    this.config.currentPage = event;
  }

  sort(key: any) {
    this.key = key;
    this.reverse = !this.reverse;
  }
}
