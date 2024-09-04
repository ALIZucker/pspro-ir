import {Component, OnInit} from '@angular/core';
import {ModuleUrlRebasingImporter} from "@angular-devkit/build-angular/src/tools/sass/rebasing-importer";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent implements OnInit {
  name = 'Angular';
  items: any[] = [
    {
      title: 'Item 1',
      description: 'Description for item 1',
      image:
        'https://images.pexels.com/photos/214574/pexels-photo-214574.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      title: 'Item 2',
      description: 'Description for item 2',
      image:
        'https://images.pexels.com/photos/39853/woman-girl-freedom-happy-39853.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      title: 'Item 3',
      description: 'Description for item 3',
      image:
        'https://images.pexels.com/photos/1556691/pexels-photo-1556691.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
  ];
  currentSlideIndex: number = 1;

  constructor() {
  }

  ngOnInit() {
  }

  nextSlide() {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.items.length;
  }

  prevSlide() {
    this.currentSlideIndex = (this.currentSlideIndex - 1 + this.items.length) % this.items.length;
  }
}
