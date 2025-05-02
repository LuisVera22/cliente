import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { InmuebleCardComponent } from '../../componentes/inmueble-card/inmueble-card.component';

@Component({
  selector: 'app-propiedades-recientes',
  imports: [ CommonModule, InmuebleCardComponent],
  templateUrl: './propiedades-recientes.component.html',
  styleUrl: './propiedades-recientes.component.css'
})
export class PropiedadesRecientesComponent {
  groupedProperties: any[][] = [];

  properties = [
    {
      image:
        'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      status: 'Reciente 1',
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
      status: 'Reciente 2',
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
      status: 'Reciente 3',
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
      status: 'Reciente 4',
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
      status: 'Reciente 5',
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
      status: 'Reciente 6',
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
      status: 'Reciente 7',
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
      status: 'Reciente 8',
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
      status: 'Reciente 9',
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

  ngOnInit() {
    // Suponiendo que properties ya está poblado con tus 9 propiedades
    this.groupProperties();
  }

  private groupProperties() {
    // Dividimos el array en grupos de 3 elementos
    for (let i = 0; i < this.properties.length; i += 3) {
      this.groupedProperties.push(this.properties.slice(i, i + 3));
    }
  }

  // En tu componente
  currentIndex = 0;

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.groupedProperties.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.groupedProperties.length) % this.groupedProperties.length;
  }
}
