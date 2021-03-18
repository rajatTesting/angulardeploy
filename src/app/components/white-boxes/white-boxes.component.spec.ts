import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhiteBoxesComponent } from './white-boxes.component';

describe('WhiteBoxesComponent', () => {
  let component: WhiteBoxesComponent;
  let fixture: ComponentFixture<WhiteBoxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhiteBoxesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhiteBoxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
