import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule, NgIf} from "@angular/common";
import {postDetail} from "../post/data-interface";
import {ApiServerService} from "../../pages/home/api-server.service";

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
  constructor(private servece:ApiServerService) {
  }
  buyEvent() {
    this.botElem.emit('buy')
  }
}
