import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-inmueble',
  imports: [CommonModule, FormsModule, FontAwesomeModule],
  templateUrl: './inmueble.component.html',
  styleUrl: './inmueble.component.css'
})
export class InmuebleComponent {
  mapLink = "https://www.google.com/maps";
  location = "Miraflores";
  images = [
    '/assets/img/propiedades.png',
    '/assets/img/propiedades.png',
    '/assets/img/propiedades.png',
    '/assets/img/propiedades.png',
    '/assets/img/propiedades.png'
  ];
  description = "Ménage - By The Beas, A colonial style hill cottage near Manali, this delightful vacation home promises the perfect mix of hills with a scenic river side in the privacy of your own space...";
  showMoreText = "Mostrar más";
  price = "S/3644.50";
  features = [
    { icon: 'fas fa-wifi', name: 'Wifi' },
    { icon: 'fas fa-tv', name: 'TV' },
    { icon: 'fas fa-car', name: 'Área de estacionamiento' },
    { icon: 'fas fa-fire-extinguisher', name: 'Detector de fuego' },
    { icon: 'fas fa-door-closed', name: 'Entrada privada' }
  ];
  totalArea = 500;
  builtArea = 355;
  extraInfo = "- Check-in time is 1pm & Check-out time is 10 am...";
  advertiser = {
    name: "Susana López-Ameri Cáceres",
    whatsapp: "+51935718768"
  };
  email = '';
  name = '';
  phone = '';
  message = '';
  phoneNumber = '+51 987 654 321';

  toggleText() {
    if (this.showMoreText === "Mostrar más") {
      this.showMoreText = "Mostrar menos";
    } else {
      this.showMoreText = "Mostrar más";
    }
  }

  isVisible = false;
  togglePhoneNumber() {
    this.isVisible = !this.isVisible;
  }
}
