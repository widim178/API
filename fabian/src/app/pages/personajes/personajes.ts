import { Component, inject, signal } from '@angular/core';
import { ProductoCard } from '../../component/producto-card/producto-card'; 
import { Personaje } from '../../models/interface/interface';
import { PersonajesService } from '../../services/personajes-service';

@Component({
  imports: [ProductoCard],
  selector: 'app-personajes',
  styleUrl: './personajes.css',
  templateUrl: './personajes.html',
})
export class Personajes {
   private readonly servicio = inject(PersonajesService); 
 
  personajes = signal<Personaje[]>([]); 
 
  constructor() { 
    this.cargar(); 
  } 
 
  async cargar() { 
    const datos = await this.servicio.obtenerPersonajes(); 
    this.personajes.set(datos); 
  } 


}
