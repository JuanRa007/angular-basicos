import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  constructor(private DbzService: DbzService) {

  }

  // Emite evetos al componente padre, expecificando el tipo entre <>.
  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter;

  agregar() {
    // event.preventDefault();

    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }

    // this.onNuevoPersonaje.emit(this.nuevo);

    this.DbzService.agregarPersonaje(this.nuevo);

    // Inicializar nuevo para ver los campos vacíos en el form
    this.nuevo = {
      nombre: '',
      poder: 0
    }

  }

}
