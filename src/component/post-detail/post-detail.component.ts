import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule, NgIf} from "@angular/common";
import {postDetail} from "../post/data-interface";

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [
    NgIf,
    CommonModule
  ],
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.css'
})
export class PostDetailComponent {
  @Input({required: true}) posItems!: postDetail;
  @Output() botElem: EventEmitter<string> = new EventEmitter<string>();

  buyEvent() {
    this.botElem.emit('buy')
  }
}
