import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FootyDataServiceProvider } from '../../providers/footy-data-service/footy-data-service';
/**
 * Generated class for the TablePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-table',
  templateUrl: 'table.html',
})
export class TablePage {

  groups: Object;
  descending: boolean = false;
  order: number = -1;
  column: string = 'points';

  constructor(public navCtrl: NavController, public navParams: NavParams, public footyDataService: FootyDataServiceProvider) {
    this.getLeagueTable();
  }

  getLeagueTable(){
    this.footyDataService.getLeagueTable()
    .then(data => {
      this.groups = data;
    });
  }


}
