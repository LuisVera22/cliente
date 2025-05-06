import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { SalonDTO } from '../../models/dto/salon-dto/salon-dto';
import { Salon } from '../../models/salon/salon';

@Injectable({
  providedIn: 'root'
})
export class SalonService {

  private apiUrl = `${environment.backendHost}/api/salones`;

  constructor(private http: HttpClient) { }

  public obtenerTodosLosSalones(): Observable<Array<SalonDTO>> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + btoa('user@example.com:@Lucho31')
    });

    return this.http.get<Array<SalonDTO>>(`${this.apiUrl}`, { headers });
  }

  public obtenerSalonPorId(id: number): Observable<SalonDTO> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + btoa('user@example.com:@Lucho31')
    });

    return this.http.get<SalonDTO>(`${this.apiUrl}/${id}`, { headers });
  }

  public registrar(salon: Salon): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + btoa('user@example.com:@Lucho31')
    });

    return this.http.post<any>(`${this.apiUrl}`, salon, { headers });
  }
}
