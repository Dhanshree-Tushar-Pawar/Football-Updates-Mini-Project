import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryNames } from 'src/app/interface/country-names';
import { SharedDataService } from 'src/app/shared/shared-data.service';
import { GlobalConstants } from 'src/constants/global-constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title: string = GlobalConstants.appTitle;

  countries: Array<CountryNames> = [
    { id: 1, name: GlobalConstants.countryEngland },
    { id: 2, name: GlobalConstants.countrySpain },
    { id: 3, name: GlobalConstants.countryGermany },
    { id: 4, name: GlobalConstants.countryFrance },
    { id: 5, name: GlobalConstants.countryItaly },
  ];

  @Output() countryEvent = new EventEmitter<string>();
  @Input() activeCountryName: string = '';
  selectedLink: string = '';
  countryName: string = '';

  constructor(
    private sharedDataService: SharedDataService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.countryName = params['countryName'];
    });
  }

  shareCountryName(country: string): void {
    this.countryEvent.emit(country)
    this.sharedDataService.setSelectedLink('/standings/' + country);
  }
}
