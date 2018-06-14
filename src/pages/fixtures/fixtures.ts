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
      console.log(this.fixtures);
    });
  }

  getFixturesByTeam() {
    this.footyDataService.getClickedFixtures(this.clickedApiURL)
    .then(data => {
      this.fixtures = data;
      console.log(this.fixtures);
    });
  }

  getTeams() {
    this.footyDataService.getTeams()
    .then(data => {
      this.teams = data;
    });
  }

  getTeamPicture(teamName){
    for (let team of this.teams) {
      if(teamName === team["name"]){
        return team["crestUrl"];
      }
    }
  }


}
