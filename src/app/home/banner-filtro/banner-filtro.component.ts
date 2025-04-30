import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-banner-filtro',
  imports: [CommonModule],
  templateUrl: './banner-filtro.component.html',
  styleUrl: './banner-filtro.component.css'
})
export class BannerFiltroComponent {
  selectedButton: string = 'social';

  selectButton(button: string): void {
    this.selectedButton = button;
  }
}
