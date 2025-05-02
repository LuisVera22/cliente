import { Routes } from '@angular/router';
import { CrearCuentaComponent } from './crear-cuenta/crear-cuenta.component';
import { HomeComponent } from './home/home.component';
import { InmuebleComponent } from './inmueble/inmueble.component';
import { NuestrosInmueblesComponent } from './nuestros-inmuebles/nuestros-inmuebles.component';
import { PreguntasFrecuentesComponent } from './preguntas-frecuentes/preguntas-frecuentes.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'nuestros-inmuebles', component: NuestrosInmueblesComponent },
    { path: 'inmueble', component: InmuebleComponent },
    { path: 'preguntas-frecuentes', component: PreguntasFrecuentesComponent },
    { path: 'crear-cuenta', component: CrearCuentaComponent },
    // otras rutas
    {path: '**', redirectTo: '', pathMatch: 'full'}
];
