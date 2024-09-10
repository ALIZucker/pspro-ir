import {Component, OnInit, AfterViewInit, Inject, inject} from '@angular/core';
import {SliderComponent} from "../../component/slider/slider.component";
import {PostComponent} from "../../component/post/post.component";
import {postDetail} from "../../component/post/data-interface";
import {ApiServerService} from "./api-server.service";
import {map, Observable} from "rxjs";
import {CommonModule, NgIf} from "@angular/common";
import {BannerWebComponent} from "../../component/banner-web/banner-web.component";
import {ActivatedRoute, RouterLink} from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SliderComponent,
    PostComponent,
    CommonModule,
    NgIf,
    BannerWebComponent,
    RouterLink,

  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  Post$!: Observable<postDetail[]>;

  constructor(private apiserver: ApiServerService, private routthis: ActivatedRoute,) {
  }



  ngOnInit(): void {
    this.Post$ = this.apiserver.getDataApi('http://localhost:8000/Post')
  }

}
