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
        let fixtures:any = data["fixtures"];
        fixtures = fixtures.filter(fixture => fixture.status === "TIMED");
        this.getTeams().then(teamData => {
          for(let fixture of fixtures){
              fixture.homeTeamCrest = this.getTeamPicture(fixture.homeTeamName, teamData);
              fixture.awayTeamCrest = this.getTeamPicture(fixture.awayTeamName, teamData);
          }
        });
        resolve(fixtures);
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
  

  getTeamPicture(teamName, teams){
    let crestUrl: any;
    if(teams != null && typeof teams !== undefined &&teams.length !== 0){
      for (let team of teams) {
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
        let fixtures:any = data["fixtures"];
        fixtures = fixtures.filter(fixture => fixture.status === "TIMED");
        this.getTeams().then(teamData => {
          for(let fixture of fixtures){
              fixture.homeTeamCrest = this.getTeamPicture(fixture.homeTeamName, teamData);
              fixture.awayTeamCrest = this.getTeamPicture(fixture.awayTeamName, teamData);
          }
        });
        resolve(fixtures);
      }, err => {
        console.log(err);
      });
    });
  }
}


