import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabanosAtHomeComponent } from './habanos-at-home.component';

describe('HabanosAtHomeComponent', () => {
  let component: HabanosAtHomeComponent;
  let fixture: ComponentFixture<HabanosAtHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabanosAtHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HabanosAtHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
