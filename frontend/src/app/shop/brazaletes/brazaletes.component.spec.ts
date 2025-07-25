import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrazaletesComponent } from './brazaletes.component';

describe('BrazaletesComponent', () => {
  let component: BrazaletesComponent;
  let fixture: ComponentFixture<BrazaletesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BrazaletesComponent]
    });
    fixture = TestBed.createComponent(BrazaletesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
