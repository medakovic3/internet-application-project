import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeregistrovanRadioniceComponent } from './neregistrovan-radionice.component';

describe('NeregistrovanRadioniceComponent', () => {
  let component: NeregistrovanRadioniceComponent;
  let fixture: ComponentFixture<NeregistrovanRadioniceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeregistrovanRadioniceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NeregistrovanRadioniceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
