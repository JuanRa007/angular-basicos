import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  // Emite evetos al componente padre, expecificando el tipo entre <>.
  @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter;

  agregar() {
    // event.preventDefault();

    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }

    this.onNuevoPersonaje.emit(this.nuevo);

    // Inicializar nuevo para ver los campos vacíos en el form
    this.nuevo = {
      nombre: '',
      poder: 0
    }

  }

}
