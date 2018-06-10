import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PeopleServiceProvider } from '../../providers/people-service/people-service';

@Component({
  selector: 'page-fixtures',
  templateUrl: 'fixtures.html'
})
export class FixturesPage {
  users: any;

  constructor(public navCtrl: NavController, public peopleProvider: PeopleServiceProvider) {
    this.getUsers();
  }

  getUsers() {
    this.peopleProvider.getUsers()
    .then(data => {
      this.users = data;
      console.log(this.users);
    });
  }

}
