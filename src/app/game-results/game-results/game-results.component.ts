import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Fixtures } from 'src/app/interface/fixtures';
import { FootballUpdatesService } from 'src/app/services/football-updates.service';
import { LoaderService } from 'src/app/services/loader.service';
import { SharedDataService } from 'src/app/shared/shared-data.service';
import { GlobalConstants } from 'src/constants/global-constants';

@Component({
  selector: 'app-game-results',
  templateUrl: './game-results.component.html',
  styleUrls: ['./game-results.component.scss']
})
export class GameResultsComponent implements OnInit {
  teamId: string = '';
  leagueId: number = 0;
  fixturesData: Fixtures[] = [];
  back: string = GlobalConstants.backButton;
  isLoading: boolean = false;
  countryName: string = '';

  constructor(
    private route: ActivatedRoute,
    private footballUpdatesService: FootballUpdatesService,
    private sharedDataService: SharedDataService,
    private loaderService: LoaderService,
    private _location: Location
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.teamId = params['teamId'];
    });
    this.route.params.subscribe((params) => {
      this.countryName = params['countryName'];
    });
    this.sharedDataService.selectedcountryData.subscribe((leagueId: number) => {
      this.leagueId = leagueId;
    });
    this.getGameResults(this.leagueId);
  }

  getGameResults(leagueId: number): void {
    this.isLoading = true;
    this.footballUpdatesService
      .getfixturesData(leagueId, this.teamId)
      .subscribe((data: any) => {
        this.fixturesData = data['response'];
        this.loaderService.getLoaderVisibility().subscribe((value) => {
          this.isLoading = value;
        });
      });
  }

  goBack(): void {
    this._location.back();
  }
}
