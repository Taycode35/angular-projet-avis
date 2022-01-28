import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAvisPlayerComponent } from './list-avis-player.component';

describe('ListAvisPlayerComponent', () => {
  let component: ListAvisPlayerComponent;
  let fixture: ComponentFixture<ListAvisPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAvisPlayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAvisPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
