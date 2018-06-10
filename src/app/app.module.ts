import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { FixturesPage } from '../pages/fixtures/fixtures';
import { TeamsPage } from '../pages/teams/teams';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PeopleServiceProvider } from '../providers/people-service/people-service';
import { HttpClientModule } from '@angular/common/http';
import { FootyDataServiceProvider } from '../providers/footy-data-service/footy-data-service';

@NgModule({
  declarations: [
    MyApp,
    FixturesPage,
    TeamsPage
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
    TeamsPage
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
