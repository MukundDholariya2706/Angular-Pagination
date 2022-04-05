import { RandomUserService } from './services/RandomUser.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pagination';

  data!: Array<any>;
  totalRecords!: Number;
  page: Number = 1;

  constructor(private randomUser: RandomUserService){
    this.data = new Array<any>();
  }

  getUsers(){
    this.randomUser.getData().subscribe(data => {
      console.log(data);
    })
  }

}
