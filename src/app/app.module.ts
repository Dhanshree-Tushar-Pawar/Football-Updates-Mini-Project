import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import { StandingsComponent } from './standings/standings/standings.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RequestKeyInterceptor } from './interceptor/request-key.interceptor';
import { SharedDataService } from './shared/shared-data.service';
import { RouterModule } from '@angular/router';
import { GameResultsComponent } from './game-results/game-results/game-results.component';
import { LoaderComponent } from './loader/loader/loader.component';
import { LoaderService } from './services/loader.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StandingsComponent,
    GameResultsComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [
    SharedDataService,
    LoaderService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestKeyInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
