import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAvisGamingComponent } from './list-avis-gaming.component';

describe('ListAvisGamingComponent', () => {
  let component: ListAvisGamingComponent;
  let fixture: ComponentFixture<ListAvisGamingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAvisGamingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAvisGamingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
