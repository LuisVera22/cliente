import { Routes } from '@angular/router';
import { CrearCuentaComponent } from './componentes/crear-cuenta/crear-cuenta.component';
import { PreguntasFrecuentesComponent } from './componentes/preguntas-frecuentes/preguntas-frecuentes.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'preguntas-frecuentes', component: PreguntasFrecuentesComponent },
    { path: 'crear-cuenta', component: CrearCuentaComponent },
    // otras rutas
    {path: '**', redirectTo: '', pathMatch: 'full'}
];
