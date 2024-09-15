import {Component, OnInit} from '@angular/core';
import {ApiServerService} from "../../pages/home/api-server.service";
import {Observable} from "rxjs";
import {postDetail} from "../post/data-interface";
import {CommonModule, NgIf} from "@angular/common";


@Component({
  selector: 'app-bascket-show',
  standalone: true,
  imports: [
    NgIf,
    CommonModule
  ],
  templateUrl: './bascket-show.component.html',
  styleUrl: './bascket-show.component.css'
})
export class BascketShowComponent implements OnInit {
  bascketItems!:Observable<postDetail[]>;
  constructor(private service: ApiServerService) {
  }

  ngOnInit() {
  this.bascketItems=this.service.getBascketItems();
  }


}
