import { Component } from '@angular/core';
import { BannerFiltroComponent } from './banner-filtro/banner-filtro.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { NuestroBlogComponent } from './nuestro-blog/nuestro-blog.component';
import { PropiedadesRecientesComponent } from './propiedades-recientes/propiedades-recientes.component';

@Component({
  selector: 'app-home',
  imports: [
    BannerFiltroComponent,
    NosotrosComponent,
    PropiedadesRecientesComponent,
    NuestroBlogComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
