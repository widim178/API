
import { Injectable } from '@angular/core';
import { Personaje, RespuestaPersonajes } from '../models/interface/interface';


@Injectable({
    providedIn: 'root',
})
export class PersonajesService {
    private readonly url = 'https://rickandmortyapi.com/api/character';

    async obtenerPersonajes(): Promise<Personaje[]> {
        const respuesta = await fetch(this.url);
        const datos: RespuestaPersonajes = await respuesta.json();
        return datos.results;
    }


}
