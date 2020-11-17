import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleHeroSectionComponent } from './title-hero-section.component';

describe('TitleHeroSectionComponent', () => {
  let component: TitleHeroSectionComponent;
  let fixture: ComponentFixture<TitleHeroSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitleHeroSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleHeroSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
