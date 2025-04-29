import { Component } from '@angular/core';
import { BannerFiltroComponent } from './banner-filtro/banner-filtro.component';

@Component({
  selector: 'app-home',
  imports: [BannerFiltroComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
