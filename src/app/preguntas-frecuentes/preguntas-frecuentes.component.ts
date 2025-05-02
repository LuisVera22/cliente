import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FaqCategoria } from './preguntas-frecuentes.model';

@Component({
  selector: 'app-preguntas-frecuentes',
  imports: [CommonModule],
  templateUrl: './preguntas-frecuentes.component.html',
  styleUrl: './preguntas-frecuentes.component.css'
})
export class PreguntasFrecuentesComponent {
  categorias: FaqCategoria[] = [
    {
      id: 'metodos-pago',
      titulo: 'Categoría 1',
      icono: 'fas fa-hand-holding-usd',
      preguntas: [
        { pregunta: '¿Pregunta 1.1?', respuesta: 'Respuesta 1.1' },
        { pregunta: '¿Pregunta 1.2?', respuesta: 'Respuesta 1.2' },
      ],
    },
    {
      id: 'entregas',
      titulo: 'Categoría 2',
      icono: 'fas fa-box-open',
      preguntas: [
        { pregunta: '¿Pregunta 2.1?', respuesta: 'Respuesta 2.1' },
        { pregunta: '¿Pregunta 2.2?', respuesta: 'Respuesta 2.2' },
      ],
    },
    {
      id: 'seguridad',
      titulo: 'Categoría 3',
      icono: 'fas fa-shield-alt',
      preguntas: [
        { pregunta: '¿Pregunta 3.1?', respuesta: 'Respuesta 3.1' },
        { pregunta: '¿Pregunta 3.2?', respuesta: 'Respuesta 3.2' },
      ],
    },
    {
      id: 'sugerencias',
      titulo: 'Categoría 4',
      icono: 'fas fa-clipboard-list',
      preguntas: [
        { pregunta: '¿Pregunta 4.1?', respuesta: 'Respuesta 4.1' },
        { pregunta: '¿Pregunta 4.2?', respuesta: 'Respuesta 4.2' },
      ],
    }
  ];

  categoriaSeleccionada: string = 'metodos-pago';
  preguntaActiva: string | null = null;

  seleccionarCategoria(id: string) {
    this.categoriaSeleccionada = id;
    this.preguntaActiva = null;
  }

  togglePregunta(pregunta: string) {
    this.preguntaActiva = this.preguntaActiva === pregunta ? null : pregunta;
  }
}
