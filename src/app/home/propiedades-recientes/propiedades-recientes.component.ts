import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { InmuebleCardComponent } from '../../componentes/inmueble-card/inmueble-card.component';
import { SalonDTO } from '../../models/dto/salon-dto/salon-dto';
import { SalonService } from '../../service/salon/salon.service';

@Component({
  selector: 'app-propiedades-recientes',
  imports: [ CommonModule, InmuebleCardComponent],
  templateUrl: './propiedades-recientes.component.html',
  styleUrl: './propiedades-recientes.component.css'
})
export class PropiedadesRecientesComponent {
  salones: SalonDTO[] = [];
  groupedSalones: SalonDTO[][] = [];

  constructor(private salonService: SalonService) {}

  ngOnInit(): void {
    this.loadSalones();
  }

  loadSalones(): void {
    this.salonService.obtenerTodosLosSalones().subscribe({
      next: (data) => {
        this.salones = data;

        // Aquí agregamos el badge "reciente" a todos los salones
        this.salones.forEach(salon => salon.badge = 'Nuevo');

        this.groupedSalones = this.chunkArray(data, 3); // Agrupar de 3 en 3
      },
      error: (err) => console.error('Error loading salones:', err)
    });
  }

  // Método para dividir el array en grupos
  private chunkArray(array: any[], size: number): any[][] {
    const results = [];
    while (array.length) {
      results.push(array.splice(0, size));
    }
    return results;
  }

  // En tu componente
  currentIndex = 0;

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.groupedSalones.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.groupedSalones.length) % this.groupedSalones.length;
  }
}
