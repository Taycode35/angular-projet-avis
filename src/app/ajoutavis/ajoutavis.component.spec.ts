import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutavisComponent } from './ajoutavis.component';

describe('AjoutavisComponent', () => {
  let component: AjoutavisComponent;
  let fixture: ComponentFixture<AjoutavisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutavisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutavisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
