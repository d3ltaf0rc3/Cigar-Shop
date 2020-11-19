import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title-hero-section',
  templateUrl: './title-hero-section.component.html',
  styleUrls: ['./title-hero-section.component.scss']
})
export class TitleHeroSectionComponent {
  @Input() title: string;
  constructor() { }
}
