import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('productosScroll', { static: false }) productosScroll!: ElementRef<HTMLDivElement>;

  // 👉 1. Promociones reales
  promociones = [
    {
      img: 'assets/promos/1.webp',
      titulo: 'Oferta de temporada',
      descripcion: '20% de descuento en artículos seleccionados',
    },
    {
      img: 'assets/promos/2.webp',
      titulo: 'Descuento exclusivo',
      descripcion: '15% para nuevos clientes',
    }
    // Puedes seguir agregando más promociones aquí
  ];

  // 👉 2. Función para generar espacios vacíos si hay menos de 4
  createArray(n: number): number[] {
    return Array(n).fill(0);
  }

  // 👉 3. Scroll automático y control manual
  ngAfterViewInit() {
    const contenedor = document.getElementById('productosScroll');
    const btnLeft = document.getElementById('btnLeft');
    const btnRight = document.getElementById('btnRight');
    const step = 170;
    const delay = 3000;

    // Scroll automático
    setInterval(() => {
      if (!contenedor) return;
      const maxScroll = contenedor.scrollWidth - contenedor.clientWidth;
      if (contenedor.scrollLeft + step >= maxScroll) {
        contenedor.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        contenedor.scrollBy({ left: step, behavior: 'smooth' });
      }
    }, delay);

    // Flechas manuales
    if (btnLeft) {
      btnLeft.addEventListener('click', () => {
        contenedor?.scrollBy({ left: -step, behavior: 'smooth' });
      });
    }
    if (btnRight) {
      btnRight.addEventListener('click', () => {
        contenedor?.scrollBy({ left: step, behavior: 'smooth' });
      });
    }
  }
}
