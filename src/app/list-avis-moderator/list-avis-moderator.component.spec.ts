import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAvisModeratorComponent } from './list-avis-moderator.component';

describe('ListAvisModeratorComponent', () => {
  let component: ListAvisModeratorComponent;
  let fixture: ComponentFixture<ListAvisModeratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAvisModeratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAvisModeratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
