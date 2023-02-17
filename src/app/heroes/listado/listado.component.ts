import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {


  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitán Ámerica'];
  heroeBorrado: string = '';

  borrarHeroe() {
    this.heroeBorrado = this.heroes.shift() || '';    // SHIFT puede devolver string o undefine... forzamos así a siemrpe STRING
    console.log('Borrando ...' + this.heroeBorrado);

  }
}
