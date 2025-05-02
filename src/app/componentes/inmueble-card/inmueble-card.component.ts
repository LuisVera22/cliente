import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-inmueble-card',
  imports: [],
  templateUrl: './inmueble-card.component.html',
  styleUrl: './inmueble-card.component.css'
})
export class InmuebleCardComponent {
  @Input() property: any;
}
