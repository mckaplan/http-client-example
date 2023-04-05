import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContinentRes } from '../model/continent.model';

@Injectable({
  providedIn: 'root',
})
export class ContinentService {
  private apikey = 'apikey 4R3YgUNsKzrAXKpDPvzYWX:3GlEv1H0nBzm1uOBtwosTv';

  private url = 'https://api.collectapi.com/corona/continentData';

  constructor(private http: HttpClient) {}

  public getContinentData(): Observable<ContinentRes> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', this.apikey);

    return this.http.get<ContinentRes>(this.url, { headers: headers });
  }
}
