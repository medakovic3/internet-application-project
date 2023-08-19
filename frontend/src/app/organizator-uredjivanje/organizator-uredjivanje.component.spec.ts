import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizatorUredjivanjeComponent } from './organizator-uredjivanje.component';

describe('OrganizatorUredjivanjeComponent', () => {
  let component: OrganizatorUredjivanjeComponent;
  let fixture: ComponentFixture<OrganizatorUredjivanjeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganizatorUredjivanjeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganizatorUredjivanjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
