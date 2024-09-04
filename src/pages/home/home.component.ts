import {Component, OnInit} from '@angular/core';
import {SliderComponent} from "../../component/slider/slider.component";
import {PostComponent} from "../../component/post/post.component";
import {postDetail, PostItem} from "../../component/post/data-interface";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SliderComponent,
    PostComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    this.data = PostItem
  }

  data!: postDetail

}
