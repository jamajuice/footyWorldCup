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
  }

  getFixtures() {
    this.footyDataService.getFixtures()
    .then(data => {
      this.fixtures = data;
      this.fixtures = this.fixtures.filter(fixture => fixture.status === "TIMED");
    });
  }

  getFixturesByTeam() {
    this.footyDataService.getClickedFixtures(this.clickedApiURL)
    .then(data => {
      this.fixtures = data;
    });
  }


}
