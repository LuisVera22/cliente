import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BlogCardComponent } from '../../componentes/blog-card/blog-card.component';

@Component({
  selector: 'app-nuestro-blog',
  imports: [ CommonModule, BlogCardComponent],
  templateUrl: './nuestro-blog.component.html',
  styleUrl: './nuestro-blog.component.css'
})
export class NuestroBlogComponent {
  blogs = [
    {
      image : '/assets/img/blog/guia.png',
      title : 'Cómo Elegir la Mejor Propiedad para Invertir',
      description : 'Comprar una propiedad es una de las decisiones más importantes en la vida.',
    },
    {
      image : '/assets/img/blog/novedades.jpg',
      title : 'Cómo Elegir la Mejor Propiedad para Invertir',
      description : 'Comprar una propiedad es una de las decisiones más importantes en la vida.',
    },
    {
      image : '/assets/img/blog/recomendaciones.png',
      title : 'Cómo Elegir la Mejor Propiedad para Invertir',
      description : 'Comprar una propiedad es una de las decisiones más importantes en la vida.',
    }
  ]
}
