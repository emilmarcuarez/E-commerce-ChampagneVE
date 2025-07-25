import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZarcillosComponent } from './zarcillos.component';

describe('ZarcillosComponent', () => {
  let component: ZarcillosComponent;
  let fixture: ComponentFixture<ZarcillosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ZarcillosComponent]
    });
    fixture = TestBed.createComponent(ZarcillosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
