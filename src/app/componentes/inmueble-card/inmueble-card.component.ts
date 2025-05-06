import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SalonDTO } from '../../models/dto/salon-dto/salon-dto';

@Component({
  selector: 'app-inmueble-card',
  imports: [CommonModule, RouterLink],
  templateUrl: './inmueble-card.component.html',
  styleUrl: './inmueble-card.component.css'
})
export class InmuebleCardComponent {
  @Input() salon?: SalonDTO;

  get primeraImagen(): string {
    return this.salon?.imagenes && this.salon.imagenes.length > 0
      ? this.salon.imagenes[0]
      : 'assets/img/hogar.png';
  }
}
