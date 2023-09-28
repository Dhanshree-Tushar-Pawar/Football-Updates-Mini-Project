import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private loaderVisibility = new BehaviorSubject<boolean>(false);

  getLoaderVisibility() {
    return this.loaderVisibility.asObservable();
  }

  showLoader() {
    this.loaderVisibility.next(true);
  }

  hideLoader() {
    this.loaderVisibility.next(false);
  }
}