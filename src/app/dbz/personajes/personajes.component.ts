import { Component } from '@angular/core';

import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {

  // @Input() personajes: Personaje[] = [];

  get personajes() {
    return this.dbzService.personajes;
  }

  //          Injector de dependencias ==> pero como ya se ha hecho en main-page, no lo vuelve a crear.
  constructor(private dbzService: DbzService) {

  }
}
