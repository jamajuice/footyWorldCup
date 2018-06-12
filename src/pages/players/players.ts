import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FootyDataServiceProvider } from '../../providers/footy-data-service/footy-data-service';

/**
 * Generated class for the PlayersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-players',
  templateUrl: 'players.html',
})
export class PlayersPage {
  players: any;
  clickedApiURL: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public footyDataService: FootyDataServiceProvider) {
    this.clickedApiURL = this.navParams.get('clickedApiURl');
    this.getPlayers();
  }

  getPlayers() {
    this.footyDataService.getPlayers(this.clickedApiURL)
    .then(data => {
      this.players = data;
      console.log(this.players);
    });
  }

}
