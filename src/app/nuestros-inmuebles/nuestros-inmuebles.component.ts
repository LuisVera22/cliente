import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { InmuebleCardComponent } from '../componentes/inmueble-card/inmueble-card.component';
import { SalonDTO } from '../models/dto/salon-dto/salon-dto';
import { SalonService } from '../service/salon/salon.service';

@Component({
  selector: 'app-nuestros-inmuebles',
  imports: [CommonModule, InmuebleCardComponent],
  templateUrl: './nuestros-inmuebles.component.html',
  styleUrl: './nuestros-inmuebles.component.css',
})
export class NuestrosInmueblesComponent {
  // Controla si está en vista de cuadrícula o lista
  isGridView: boolean = true;
  salones: SalonDTO[] = [];

  toggleView() {
    this.isGridView = !this.isGridView;
  }

  constructor(private salonService: SalonService) {}
  
    ngOnInit(): void {
      this.loadSalones();
    }
  
    loadSalones(): void {
      this.salonService.obtenerTodosLosSalones().subscribe({
        next: (data) => {
          this.salones = data;
          console.log(data);
        },
        error: (err) => console.error('Error loading salones:', err)
      });
    }
}
