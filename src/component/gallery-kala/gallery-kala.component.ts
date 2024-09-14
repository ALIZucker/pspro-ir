import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-gallery-kala',
  standalone: true,
  imports: [],
  templateUrl: './gallery-kala.component.html',
  styleUrl: './gallery-kala.component.css'
})
export class GalleryKalaComponent {

  @Input({required:true})adressImage!: string;
}
