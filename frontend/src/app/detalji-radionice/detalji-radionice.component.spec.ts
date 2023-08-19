import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaljiRadioniceComponent } from './detalji-radionice.component';

describe('DetaljiRadioniceComponent', () => {
  let component: DetaljiRadioniceComponent;
  let fixture: ComponentFixture<DetaljiRadioniceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetaljiRadioniceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetaljiRadioniceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
