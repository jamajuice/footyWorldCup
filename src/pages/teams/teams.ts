import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FootyDataServiceProvider } from '../../providers/footy-data-service/footy-data-service';

/**
 * Generated class for the TeamsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-teams',
  templateUrl: 'teams.html',
})
export class TeamsPage {
  teams: any;
  selectedItem: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public footyDataService: FootyDataServiceProvider) {
    this.getTeams();

    this.selectedItem = navParams.get('item');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamsPage');
  }

  getTeams() {
    this.footyDataService.getTeams()
    .then(data => {
      this.teams = data;
      console.log(this.teams);
    });
  }

  teamTapped(event, team) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(TeamsPage, {
      item: team 
    });
  }

}
