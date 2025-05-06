import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { CaracteristicaSalon } from '../../models/caracteristica-salon/caracteristica-salon';

@Injectable({
  providedIn: 'root',
})
export class CaracteristicaSalonService {

  private apiUrl = `${environment.backendHost}/api/caracteristicas-salon`;

  constructor(private http: HttpClient) { }

  public obtenerTodasLasCaracteristicas(): Observable<Array<CaracteristicaSalon>> {
    const username = 'user@example.com';
    const password = '@Lucho31';

    const authHeader = 'Basic ' + btoa(`${username}:${password}`);

    const headers = new HttpHeaders({
      'Authorization': authHeader
    });

    return this.http.get<Array<CaracteristicaSalon>>(`${this.apiUrl}`, { headers });
  }
}
