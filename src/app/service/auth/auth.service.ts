import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { LoginRequest } from '../../models/Login-Request/login-request';
import { Usuario } from '../../models/usuario/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = `${environment.backendHost}/api/auth`;

  constructor(private http: HttpClient) { }

  login(loginData: LoginRequest): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + btoa('user@example.com:@Lucho31')
    });

    return this.http.post(`${this.apiUrl}/login`, loginData, { headers });
  }

  public register(userData: Usuario): Observable<Usuario> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + btoa('user@example.com:@Lucho31')
    });
    return this.http.post<any>(`${this.apiUrl}/register`, userData, { headers });
  }
}
