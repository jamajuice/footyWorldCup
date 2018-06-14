import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the FootyDataServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FootyDataServiceProvider {

  apiUrl = 'http://api.football-data.org/v1/competitions/467';
  clickedApiURL: any;
  authToken = 'c651e24fba8049af8c7121f1dc20b8a5';


  constructor(public http: HttpClient) {
    console.log('Hello RestServiceProvider Provider');
  }

  getFixtures(){
    return new Promise((resolve, reject) => {
      this.http.get(this.apiUrl+'/fixtures', {
        headers: new HttpHeaders().set('X-Auth-Token', this.authToken),
      })
      .subscribe(data => {
        resolve(data["fixtures"]);
      }, err => {
        console.log(err);
      });
    });
  }

  getLeagueTable(){
    return new Promise((resolve, reject) => {
      this.http.get(this.apiUrl+'/leagueTable', {
        headers: new HttpHeaders().set('X-Auth-Token', this.authToken),
      })
      .subscribe(data => {
        resolve(data["standings"]);
      }, err => {
        console.log(err);
      });
    });
  }

  getTeams() {
    return new Promise((resolve, reject) => {
      this.http.get(this.apiUrl+'/teams', {
        headers: new HttpHeaders().set('X-Auth-Token', this.authToken),
      })
      .subscribe(data => {
        resolve(data["teams"]);
      }, err => {
        console.log(err);
      });
    });
  }

  getTeamPicture(imgApiUrl){
    return new Promise((resolve, reject) => {
      this.http.get(imgApiUrl, {
        headers: new HttpHeaders().set('X-Auth-Token', this.authToken),
      })
      .subscribe(data => {
        resolve(data["crestUrl"]);
      }, err => {
        console.log(err);
      });
    });
  }

  getPlayers(clickedApiUrl) {
    this.clickedApiURL = clickedApiUrl; 
    return new Promise((resolve, reject) => {
      this.http.get(this.clickedApiURL, {
        headers: new HttpHeaders().set('X-Auth-Token', this.authToken),
      })
      .subscribe(data => {
        resolve(data["players"]);
      }, err => {
        console.log(err);
      });
    });
  }

  getClickedFixtures(clickedApiUrl) {
    this.clickedApiURL = clickedApiUrl; 
    return new Promise((resolve, reject) => {
      this.http.get(this.clickedApiURL, {
        headers: new HttpHeaders().set('X-Auth-Token', this.authToken),
      })
      .subscribe(data => {
        resolve(data["fixtures"]);
      }, err => {
        console.log(err);
      });
    });
  }
}


