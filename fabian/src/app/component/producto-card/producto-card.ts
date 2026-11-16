import { Component, Input } from '@angular/core';
import { Personaje } from '../../models/interface/interface';

@Component({
  imports: [],
  selector: 'app-producto-card',
  styleUrl: './producto-card.css',
  templateUrl: './producto-card.html',
})
export class ProductoCard {
  @Input() personaje!: Personaje;
}
