import { Component } from '@angular/core';
import { CuponModalService } from '../../cupon-modal.service';

@Component({
  selector: 'app-otros',
  templateUrl: './otros.component.html',
  styleUrls: ['./otros.component.scss']
})
export class OtrosComponent {
  constructor(private cuponModalService: CuponModalService) {}

  abrirCuponModal() {
    this.cuponModalService.openModal();
  }
}
