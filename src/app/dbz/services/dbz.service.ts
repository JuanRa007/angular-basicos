import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";


@Injectable()

export class DbzService {

  // Propiedad Privada
  private _personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000
    }, {
      nombre: 'Vegeta',
      poder: 7500
    }
  ];

  // Gettder / Setters
  get personajes(): Personaje[] {
    // Los parámetros se pasan por referencia. Para cortar este caso, se usa "Sintaxis Spread" [...]
    return [...this._personajes];
  }

  // Constructores
  constructor() { }

  // Métodos
  agregarPersonaje(personaje: Personaje) {
    // Usamos nuestra propiedad privada.
    this._personajes.push(personaje);
  }

}