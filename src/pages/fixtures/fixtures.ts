import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FootyDataServiceProvider } from '../../providers/footy-data-service/footy-data-service';

@Component({
  selector: 'page-fixtures',
  templateUrl: 'fixtures.html'
})
export class FixturesPage {
  fixtures: any;
  clickedApiURL: any;
  teams: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public footyDataService: FootyDataServiceProvider) {
    this.clickedApiURL = this.navParams.get('clickedApiURl');
    if(this.clickedApiURL){
      this.getFixturesByTeam()
    }else{
      this.getFixtures();
    }
    this.getTeams();
  }

  getFixtures() {
    this.footyDataService.getFixtures()
    .then(data => {
      this.fixtures = data;
    });
  }

  getFixturesByTeam() {
    this.footyDataService.getClickedFixtures(this.clickedApiURL)
    .then(data => {
      this.fixtures = data;
    });
  }

  getTeams() {
    this.footyDataService.getTeams()
    .then(data => {
      this.teams = data;
    });
  }

  getTeamPicture(teamName){
    let crestUrl: any;
    if(this.teams != null && typeof this.teams !== undefined && this.teams.length !== 0){
      for (let team of this.teams) {
        if(teamName === team["name"]){
          crestUrl = team["crestUrl"];
          if(crestUrl !== null || typeof crestUrl !== undefined){
            return crestUrl;
          }
        }
      }
    }else{
      return "#";
    }
  }


}
