import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { InmuebleCardComponent } from '../componentes/inmueble-card/inmueble-card.component';

@Component({
  selector: 'app-nuestros-inmuebles',
  imports: [CommonModule, InmuebleCardComponent],
  templateUrl: './nuestros-inmuebles.component.html',
  styleUrl: './nuestros-inmuebles.component.css',
})
export class NuestrosInmueblesComponent {
  // Controla si está en vista de cuadrícula o lista
  isGridView: boolean = true;

  toggleView() {
    this.isGridView = !this.isGridView;
  }

  properties = [
    {
      image:
        'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      status: 'Venta',
      price: '$440,000',
      type: 'Local Comercial',
      location: 'AV. Malecon Miguel Checa, SJL',
      features: [
        { icon: 'fas fa-ruler-combined', value: '200 m²' },
        { icon: 'fas fa-building', value: '870 m²' },
        { icon: 'fas fa-bed', value: '10 dorm.' },
        { icon: 'fas fa-bath', value: '4 baños' },
      ],
    },
    {
      image:
        'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      status: 'Venta',
      price: '$440,000',
      type: 'Local Comercial',
      location: 'AV. Malecon Miguel Checa, SJL',
      features: [
        { icon: 'fas fa-ruler-combined', value: '200 m²' },
        { icon: 'fas fa-building', value: '870 m²' },
        { icon: 'fas fa-bed', value: '10 dorm.' },
        { icon: 'fas fa-bath', value: '4 baños' },
      ],
    },
  ];
}
