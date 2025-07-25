import { Component } from '@angular/core';

@Component({
  selector: 'app-collares',
  templateUrl: './collares.component.html',
  styleUrls: ['./collares.component.scss']
})
export class CollaresComponent {
  categorias = [
    { nombre: 'Corbatines', imagen: 'assets/collares/3.webp' },
    { nombre: 'Fantasmistas', imagen: 'assets/collares/4.webp' },
    { nombre: 'Collares para hombre', imagen: 'assets/collares/5.webp' },
    { nombre: 'Chocker', imagen: 'assets/collares/6.webp' }
  ];

  collares = Array(12).fill(0).map(() => ({
    nombre: 'Corbatin 3 letras Golfield',
    imagen: 'assets/collares/1.webp',
    precio: 10.00
  }));

  eventos = Array(4).fill(0).map(() => ({
    imagen: 'assets/collares/2.webp'
  }));
}
