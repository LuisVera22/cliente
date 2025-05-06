import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { Region } from '../../models/region/region';

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  private apiUrl = `${environment.backendHost}/api/regiones`;

  constructor(private http: HttpClient) { }

  public obtenerTodasLasRegiones(): Observable<Array<Region>> {
    const username = 'user@example.com';
    const password = '@Lucho31';

    const authHeader = 'Basic ' + btoa(`${username}:${password}`);

    const headers = new HttpHeaders({
      'Authorization': authHeader
    });
    return this.http.get<Array<Region>>(`${this.apiUrl}`, { headers });
  }
}
