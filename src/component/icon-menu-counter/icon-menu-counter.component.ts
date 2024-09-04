import {Component, Input, Output} from '@angular/core';

@Component({
  selector: 'app-icon-menu-counter',
  standalone: true,
  imports: [],
  templateUrl: './icon-menu-counter.component.html',
  styleUrl: './icon-menu-counter.component.css'
})
export class IconMenuCounterComponent {

  @Input({required: true}) addImage!: string
  @Input({required: true}) NumberCpunter!: number

}
