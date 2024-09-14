import {Component, OnInit} from '@angular/core';
import {IconMenuCounterComponent} from "../icon-menu-counter/icon-menu-counter.component";
import {MegaMenuModule} from 'primeng/megamenu';
import {MegaMenuItem} from "primeng/api";
import {BascketShowComponent} from "../bascket-show/bascket-show.component";
import {CommonModule, NgIf} from "@angular/common";


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    IconMenuCounterComponent,
    MegaMenuModule,
    BascketShowComponent,
    NgIf,
    CommonModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  gfg!: MegaMenuItem[];
  isShow: boolean = false

  ngOnInit(): void {
    this.gfg = [
      {
        label: 'شیر خشک',
        items: [
          [
            {
              label: 'شیر خشک ',
              items: [{label: 'پودر از شیر گرفتن'}, {label: 'خوراک مخصوص کودک'}]
            },
            {
              label: 'شیشه شیر',
              items: [{label: 'شیشه شیر محبوب'}, {label: 'برند های شیشه شیر'}]
            }
          ],
          [
            {
              label: 'رده سنی کودک',
              items: [{label: '3 ماه تا 6 ماه'}, {label: '12 تا 24 ماه'}]
            }
          ]
        ]
      },
      {
        label: 'تغذیه',
        items: [
          [
            {
              label: 'مراقیت قبل زایمان  ',
              items: [{label: 'تغذیه'}, {label: 'استراحت'}]
            },
            {
              label: 'بعد بارداری',
              items: [{label: 'مواد مغذی'}, {label: 'مولتی ویتامین'}]
            }
          ]
        ]
      },
      {
        label: 'شیر خشک',
        items: [
          [
            {
              label: 'شیر خشک ',
              items: [{label: 'پودر از شیر گرفتن'}, {label: 'خوراک مخصوص کودک'}]
            },
            {
              label: 'شیشه شیر',
              items: [{label: 'شیشه شیر محبوب'}, {label: 'برند های شیشه شیر'}]
            }
          ],
          [
            {
              label: 'رده سنی کودک',
              items: [{label: '3 ماه تا 6 ماه'}, {label: '12 تا 24 ماه'}]
            }
          ]
        ]
      },
      {
        label: 'تغذیه',
        items: [
          [
            {
              label: 'مراقیت قبل زایمان  ',
              items: [{label: 'تغذیه'}, {label: 'استراحت'}]
            },
            {
              label: 'بعد بارداری',
              items: [{label: 'مواد مغذی'}, {label: 'مولتی ویتامین'}]
            }
          ]
        ]
      },
    ];
  }



  OnmouseDown($event: MouseEvent) {
    this.isShow = !this.isShow;
  }
}
