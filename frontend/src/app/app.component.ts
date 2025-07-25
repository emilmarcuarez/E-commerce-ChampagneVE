import { Component } from '@angular/core';
import { CuponModalService } from './cupon-modal.service';
declare var bootstrap: any;
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', '../styles.scss']
})
export class AppComponent {
  cuponModal: any;
  title = 'frontend-app';

  constructor(private router: Router, private cuponModalService: CuponModalService) {}


  ngAfterViewInit() {
    const modalEl = document.getElementById('cuponModalGlobal');
    if (modalEl) {
      this.cuponModal = new bootstrap.Modal(modalEl);
    }
    this.cuponModalService.openModal$.subscribe(() => {
      this.openCuponModal();
    });
  }

  openCuponModal() {
    if (this.cuponModal) {
      this.cuponModal.show();
    }
  }

  closeCuponModal() {
    if (this.cuponModal) {
      this.cuponModal.hide();
    }
  }

  onCategoryChange(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    if (value) {
      this.router.navigate([value]);
    }
  }
}
