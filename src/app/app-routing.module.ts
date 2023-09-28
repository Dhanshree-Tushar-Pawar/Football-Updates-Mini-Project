import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { StandingsComponent } from './standings/standings/standings.component';
import { GameResultsComponent } from './game-results/game-results/game-results.component';

const routes: Routes = [
  { path: '', component: StandingsComponent },
  { path: 'standings/:countryName', component: StandingsComponent },
  { path: 'game-results/:teamId', component: GameResultsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
