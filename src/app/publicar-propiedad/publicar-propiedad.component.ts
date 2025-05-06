import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FileUploadModule } from 'primeng/fileupload';
import { CaracteristicaSalon } from '../models/caracteristica-salon/caracteristica-salon';
import { ImagenSalon } from '../models/imagen-salon/imagen-salon';
import { Region } from '../models/region/region';
import { Salon } from '../models/salon/salon';
import { TipoEvento } from '../models/tipo-evento/tipo-evento';
import { CaracteristicaSalonService } from '../service/caracteristica-salon/caracteristica-salon.service';
import { RegionService } from '../service/region/region.service';
import { SalonService } from '../service/salon/salon.service';
import { TipoEventoService } from '../service/tipo-evento/tipo-evento.service';

@Component({
  selector: 'app-publicar-propiedad',
  imports: [FormsModule, CommonModule, FileUploadModule],
  templateUrl: './publicar-propiedad.component.html',
  styleUrl: './publicar-propiedad.component.css'
})
export class PublicarPropiedadComponent {
  regiones: Region[] = [];
  caracteristicasSalon: CaracteristicaSalon[] = [];
  tiposEvento: TipoEvento[] = [];
  
  userString = localStorage.getItem('user');
  usuario = this.userString ? JSON.parse(this.userString) : null;

  imageError: boolean = false;
  selectedFiles: File[] = [];
  imagenesSalon: ImagenSalon[] = [];
  formData: Salon = {
    usuario: this.usuario || { id: 1, nombre: 'Luis Vera', email: 'luis@gmail.com', password: '@Lucho31', telefono: '98765432', tipo: 'CLIENTE' }, // Reemplazar con datos reales
    nombre: '',
    descripcion: '',
    capacidad: 0,
    direccion: '',
    region: { id: 15, nombre: 'Lima', departamento: 'Lima' },
    precioBase: 0,
    caracteristicas: [],
    tiposEvento: [],
    imagenes: []
  };

  constructor(
    private regionService: RegionService,
    private caracteristicasService: CaracteristicaSalonService,
    private tipoEventoService: TipoEventoService,
    private salonService: SalonService
  ) { }

  ngOnInit(): void {
    this.regionService.obtenerTodasLasRegiones().subscribe(data => {
      this.regiones = data;
    });

    this.caracteristicasService.obtenerTodasLasCaracteristicas().subscribe(data => {
      this.caracteristicasSalon = data;
    });

    this.tipoEventoService.obtenerTodosLosTipos().subscribe(data => {
      this.tiposEvento = data;
    });
  }

   // Para tipos de eventos
   onTipoEventoChange(tipoEvento: TipoEvento) {
    const index = this.formData.tiposEvento.findIndex(te => te.id === tipoEvento.id);
    if (index === -1) {
      this.formData.tiposEvento.push(tipoEvento);
    } else {
      this.formData.tiposEvento.splice(index, 1);
    }
  }

  // Para características del salón
  onCaracteristicaChange(caracteristica: CaracteristicaSalon) {
    const index = this.formData.caracteristicas.findIndex(c => c.id === caracteristica.id);
    if (index === -1) {
      this.formData.caracteristicas.push(caracteristica);
    } else {
      this.formData.caracteristicas.splice(index, 1);
    }
  }

  // Función para convertir archivo a Base64
  private convertFileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        resolve(reader.result as string); // Aquí obtenemos la cadena Base64
      };
      reader.onerror = reject;
    });
  }

  onFileSelect(event: any) {
    const selectedFiles = Array.from(event.files) as File[];
    if (selectedFiles.length < 5) {
      this.imageError = true;
    } else {
      this.imageError = false;
      this.selectedFiles = selectedFiles;
    }
    console.log('Archivos seleccionados:', selectedFiles);
  }
  

  async onSubmit() {
    console.log(this.formData);
    if (this.formData.nombre && this.formData.descripcion && this.formData.capacidad && this.formData.precioBase && this.formData.direccion && this.formData.region.id) {
      // Verificar que hay suficientes imágenes
      if (this.selectedFiles.length >= 5) {
        this.formData.imagenes = [];
  
        for (let file of this.selectedFiles) {
          const base64Image = await this.convertFileToBase64(file);
          const imagenSalon: ImagenSalon = {
            urlImagen: base64Image,  // Guardamos la cadena Base64
            esPrincipal: false  // Establece si es principal o no, según sea necesario
          };
          this.formData.imagenes.push(imagenSalon);
        }
  
        // Aquí ya podemos enviar el salón con las imágenes codificadas a Base64
        this.salonService.registrar(this.formData).subscribe(
          response => {
            console.log('Salon registrado exitosamente', response);
          },
          error => {
            console.error('Error al registrar el salón', error);
          }
        );
      } else {
        console.log('Debe seleccionar al menos 5 imágenes');
      }
    } else {
      console.log('Faltan campos obligatorios');
    }
  }
  
}
