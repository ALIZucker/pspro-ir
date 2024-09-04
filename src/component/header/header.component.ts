import {Component, OnInit} from '@angular/core';
import {IconMenuCounterComponent} from "../icon-menu-counter/icon-menu-counter.component";
import {MegaMenuModule} from 'primeng/megamenu';
import {MegaMenuItem} from "primeng/api";


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    IconMenuCounterComponent,
    MegaMenuModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  gfg!: MegaMenuItem[];


  items: any =[{title:"value",text:"value"}, {title:"value"}, {title:"value"}];

  ngOnInit(): void {
    this.gfg = [
      {
        label: 'شیر خشک',
        items: [
          [
            {
              label: 'شیر خشک ',
              items: [{ label: 'پودر از شیر گرفتن' }, { label: 'خوراک مخصوص کودک' }]
            },
            {
              label: 'شیشه شیر',
              items: [{ label: 'شیشه شیر محبوب' }, { label: 'برند های شیشه شیر' }]
            }
          ],
          [
            {
              label: 'رده سنی کودک',
              items: [{ label: '3 ماه تا 6 ماه' }, { label: '12 تا 24 ماه' }]
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
              items: [{ label: 'تغذیه' }, { label: 'استراحت' }]
            },
            {
              label: 'بعد بارداری',
              items: [{ label: 'مواد مغذی' }, { label: 'مولتی ویتامین' }]
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
              items: [{ label: 'پودر از شیر گرفتن' }, { label: 'خوراک مخصوص کودک' }]
            },
            {
              label: 'شیشه شیر',
              items: [{ label: 'شیشه شیر محبوب' }, { label: 'برند های شیشه شیر' }]
            }
          ],
          [
            {
              label: 'رده سنی کودک',
              items: [{ label: '3 ماه تا 6 ماه' }, { label: '12 تا 24 ماه' }]
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
              items: [{ label: 'تغذیه' }, { label: 'استراحت' }]
            },
            {
              label: 'بعد بارداری',
              items: [{ label: 'مواد مغذی' }, { label: 'مولتی ویتامین' }]
            }
          ]
        ]
      },
    ];
  }
}
