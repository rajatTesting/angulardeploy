import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MidRowComponent } from './mid-row.component';

describe('MidRowComponent', () => {
  let component: MidRowComponent;
  let fixture: ComponentFixture<MidRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MidRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MidRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
