import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastRowComponent } from './last-row.component';

describe('LastRowComponent', () => {
  let component: LastRowComponent;
  let fixture: ComponentFixture<LastRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LastRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
