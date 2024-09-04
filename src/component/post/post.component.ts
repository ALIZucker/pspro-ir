import {Input, AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {postDetail} from "./data-interface";


@Component({
  selector: 'app-post',
  standalone: true,
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})

export class PostComponent implements OnInit, AfterViewInit {
  @ViewChild('imageElem') imageElem!: ElementRef;
  @Input({required: true}) PostItems!: postDetail;
  constructor() {

  }

  ngAfterViewInit(): void {
    this.imageElem.nativeElement.addEventListener('mouseover', () => {
      this.imageElem.nativeElement.style.filter = 'brightness(80%)';
    })
    this.imageElem.nativeElement.addEventListener('mouseleave', () => {
      this.imageElem.nativeElement.style.filter = 'grayscale(0%)';
    })
  }

  ngOnInit() {
  }


}
