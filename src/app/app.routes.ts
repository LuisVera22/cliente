import { Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CrearCuentaComponent } from './crear-cuenta/crear-cuenta.component';
import { HomeComponent } from './home/home.component';
import { InmuebleComponent } from './inmueble/inmueble.component';
import { NuestrosInmueblesComponent } from './nuestros-inmuebles/nuestros-inmuebles.component';
import { PreguntasFrecuentesComponent } from './preguntas-frecuentes/preguntas-frecuentes.component';
import { PublicarPropiedadComponent } from './publicar-propiedad/publicar-propiedad.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'nuestros-inmuebles', component: NuestrosInmueblesComponent },
    { path: 'inmueble/:id', component: InmuebleComponent },
    { path: 'preguntas-frecuentes', component: PreguntasFrecuentesComponent },
    { path: 'crear-cuenta', component: CrearCuentaComponent },
    { path: 'dashboard', component: InmuebleComponent },
    {
        path: 'publicar-inmueble',
        component: PublicarPropiedadComponent,
        canActivate: [AuthGuard]  // Aquí agregas el guard a la ruta
    },
    // otras rutas
    {path: '**', redirectTo: '', pathMatch: 'full'}
];
