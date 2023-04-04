import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Continent } from '../model/continent.model';
import { ContinentService } from '../service/continent.service';

@Component({
  selector: 'app-continent',
  templateUrl: './continent.component.html',
})
export class ContinentComponent {
  continents$: Observable<Continent[]>;
  constructor(private continentService: ContinentService) {
    this.continents$ = continentService
      .getContinentData()
      .pipe(map((res) => res.result));
  }
}
