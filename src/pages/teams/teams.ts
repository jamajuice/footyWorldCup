import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FootyDataServiceProvider } from '../../providers/footy-data-service/footy-data-service';
import { PlayersPage } from '../players/players';
import { FixturesPage } from '../fixtures/fixtures';

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
  toggled: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public footyDataService: FootyDataServiceProvider) {
    this.getTeams();
    this.selectedItem = navParams.get('item');
  }

  toggleSearch(){
    this.toggled = this.toggled ? false : true;
  }

  getTeams() {
    this.footyDataService.getTeams()
    .then(data => {
      this.teams = data;
      console.log(this.teams);
    });
  }

  playersTapped(event, url) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(PlayersPage, {
      clickedApiURl: url 
    });
  }

  fixturesTapped(event, url) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(FixturesPage, {
      clickedApiURl: url 
    });
  }

}
