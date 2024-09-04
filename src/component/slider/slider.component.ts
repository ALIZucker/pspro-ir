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
      image:'/assets/Image/b1.webp',
    },
    {
      title: 'Item 2',
      description: 'Description for item 2',
      image:'/assets/Image/b2.webp'
    },
    {
      title: 'Item 3',
      description: 'Description for item 3',
      image:'/assets/Image/b3.webp'
    },
  ];
  currentSlideIndex: number = 1;

  constructor() {
  }

  ngOnInit() {
    setInterval(()=>{
      this.currentSlideIndex = (this.currentSlideIndex + 1) % this.items.length;
    },4000)
  }

  nextSlide() {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.items.length;
  }

  prevSlide() {
    this.currentSlideIndex = (this.currentSlideIndex - 1 + this.items.length) % this.items.length;
  }
}
