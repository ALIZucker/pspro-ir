import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule, NgIf} from "@angular/common";
import {postDetail} from "../post/data-interface";
import {ApiServerService} from "../../pages/home/api-server.service";
import {AllertServiceService} from "../../app/allert-service.service";

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

  constructor(private servece: ApiServerService, private allertserv: AllertServiceService) {
  }

  buyEvent() {
    this.servece.addPostItem(this.posItems).subscribe(value => {
      this.posItems.counter= value.massage;
      console.log(this.posItems,value.massage)
      this.allertserv.subject.next()
    })
  }
}
