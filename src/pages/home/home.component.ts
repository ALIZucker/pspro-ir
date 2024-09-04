import { Component } from '@angular/core';
import {SliderComponent} from "../../component/slider/slider.component";
import {PostComponent} from "../../component/post/post.component";

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
export class HomeComponent {

}
