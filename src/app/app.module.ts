import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { FixturesPage } from '../pages/fixtures/fixtures';
import { TablePage } from '../pages/table/table';
import { TeamsPage } from '../pages/teams/teams';
import { PlayersPage } from '../pages/players/players';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PeopleServiceProvider } from '../providers/people-service/people-service';
import { HttpClientModule } from '@angular/common/http';
import { FootyDataServiceProvider } from '../providers/footy-data-service/footy-data-service';
import { MapToIterable } from '../pipes/mapToIterable/mapToIterable.pipe';
import { SearchPipe } from '../pipes/search/search';
import { SortPipe } from '../pipes/sort/sort';

@NgModule({
  declarations: [
    MyApp,
    FixturesPage,
    TeamsPage,
    TablePage,
    PlayersPage,
    MapToIterable,
    SearchPipe,
    SortPipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FixturesPage,
    TablePage,
    TeamsPage,
    PlayersPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PeopleServiceProvider,
    FootyDataServiceProvider
  ]
})
export class AppModule {}
