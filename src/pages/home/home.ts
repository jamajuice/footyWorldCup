import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PeopleServiceProvider } from '../../providers/people-service/people-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
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
