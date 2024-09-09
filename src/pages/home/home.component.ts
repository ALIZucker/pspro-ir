import {Component, OnInit,AfterViewInit} from '@angular/core';
import {SliderComponent} from "../../component/slider/slider.component";
import {PostComponent} from "../../component/post/post.component";
import {postDetail} from "../../component/post/data-interface";
import {ApiServerService} from "./api-server.service";
import {Observable} from "rxjs";
import {CommonModule, NgIf} from "@angular/common";
import {BannerWebComponent} from "../../component/banner-web/banner-web.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SliderComponent,
    PostComponent,
    CommonModule,
    NgIf,
    BannerWebComponent,

  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit ,AfterViewInit{
  constructor(private apiserver: ApiServerService) {
  }

  ngAfterViewInit(): void {
      console.log('ngAfterViewInit');
      console.log(this.ArryPost.length);

    }

  Post$!: Observable<postDetail[]>;
  ArryPost: postDetail[] = []

  ngOnInit(): void {
    this.Post$ = this.apiserver.getDataApi('http://localhost:8000/Post')

  }

}
