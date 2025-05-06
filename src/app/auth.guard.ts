import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    // Verificar si el usuario está autenticado
    const isAuthenticated = !!localStorage.getItem('user');

    if (isAuthenticated) {
      // Si está autenticado, permitir el acceso a la ruta
      return true;
    } else {
      // Si no está autenticado, redirigir a la página de login o donde desees
      this.router.navigate(['/']); // Cambia '/login' por la ruta de tu página de login
      return false;
    }
  }
}
