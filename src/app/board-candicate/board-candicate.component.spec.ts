import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardCandicateComponent } from './board-candicate.component';

describe('BoardCandicateComponent', () => {
  let component: BoardCandicateComponent;
  let fixture: ComponentFixture<BoardCandicateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BoardCandicateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoardCandicateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
