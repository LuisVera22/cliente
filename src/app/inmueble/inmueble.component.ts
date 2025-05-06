import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SalonDTO } from '../models/dto/salon-dto/salon-dto';
import { SalonService } from '../service/salon/salon.service';

@Component({
  selector: 'app-inmueble',
  imports: [CommonModule, FormsModule],
  templateUrl: './inmueble.component.html',
  styleUrl: './inmueble.component.css'
})
export class InmuebleComponent{

  idPropiedad!: number;
  salon?: SalonDTO;

  // Inicialización de variables
  mapLink = "https://www.google.com/maps";
  images: string[] = [];
  showMoreText = "Mostrar más";
  extraInfo = "- Check-in time is 1pm & Check-out time is 10 am...";
  advertiser = { name: '', whatsapp: '' };
  email = '';
  name = '';
  phone = '';
  message = '';
  phoneNumber = '';
  location = '';
  description = '';
  price = '';
  capacidadMax = 0;

  // Para mostrar u ocultar el número de teléfono
  isVisible = false;

  constructor(private route: ActivatedRoute, private salonService: SalonService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.idPropiedad = +params['id']; // Convertimos a número
        console.log('ID de la propiedad recibido:', this.idPropiedad);
        this.loadSalon();
      }
    });
  }

  loadSalon(): void {
    this.salonService.obtenerSalonPorId(this.idPropiedad).subscribe({
      next: (data) => {
        this.salon = data;
        console.log(data);
        
        this.processImages();
        
        // Inicializar las variables con los valores de 'salon'
        if (this.salon) {
          this.location = this.salon.direccion;
          this.description = this.salon.descripcion;
          this.price = `S/. ${this.salon.precio}`;
          this.capacidadMax = this.salon.capacidad;
          this.advertiser = {
            name: this.salon.nombre,
            whatsapp: this.salon.telefono
          };
          this.phoneNumber = `+51 ${this.salon.telefono}`;
        }
      },
      error: (err) => console.error('Error loading salon:', err)
    });
  }

  // Procesar las imágenes
  processImages(): void {
    const defaultImage = 'assets/img/no-image.png';
    const maxImages = 5;

    let processedImages: string[] = [];

    for (let i = 0; i < maxImages; i++) {
      let imagePath = this.salon?.imagenes[i] || '';

      if (!imagePath || imagePath.trim() === '') {
        processedImages.push(defaultImage);
      } else {
        processedImages.push(imagePath);
      }
    }

    // Asignamos las imágenes procesadas
    this.images = processedImages;
    console.log('Imágenes procesadas:', this.images);
  }

  toggleText(): void {
    if (this.showMoreText === "Mostrar más") {
      this.showMoreText = "Mostrar menos";
    } else {
      this.showMoreText = "Mostrar más";
    }
  }

  togglePhoneNumber(): void {
    this.isVisible = !this.isVisible;
  }
}
