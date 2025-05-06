import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { TipoEvento } from '../../models/tipo-evento/tipo-evento';

@Injectable({
  providedIn: 'root'
})
export class TipoEventoService {

  private apiUrl = `${environment.backendHost}/api/tipos-evento`;

  constructor(private http: HttpClient) { }

  public obtenerTodosLosTipos(): Observable<Array<TipoEvento>> {
    const username = 'user@example.com';
    const password = '@Lucho31';

    const authHeader = 'Basic ' + btoa(`${username}:${password}`);

    const headers = new HttpHeaders({
      'Authorization': authHeader
    });
    return this.http.get<Array<TipoEvento>>(`${this.apiUrl}`, { headers });
  }
}
