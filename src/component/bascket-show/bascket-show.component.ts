import {Component, OnDestroy, OnInit} from '@angular/core';
import {ApiServerService} from "../../pages/home/api-server.service";
import {Observable, Subject, takeUntil} from "rxjs";
import {postDetail} from "../post/data-interface";
import {CommonModule, NgIf} from "@angular/common";
import {AllertServiceService} from "../../app/allert-service.service";


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
export class BascketShowComponent implements OnInit, OnDestroy {
  bascketItems$!: Observable<postDetail[]>;
  sum: number = 0

  constructor(private service: ApiServerService, private allertserv: AllertServiceService) {
  }


  private unsubscribe$ = new Subject()

  ngOnInit() {
    this.bascketItems$ = this.service.getBascketItems();
    this.sumCounterFirst()
    this.allertserv.subject.pipe(takeUntil(this.unsubscribe$)).subscribe({
        next: data => {
          this.bascketItems$ = this.service.getBascketItems();
          this.sumCounterFirst()
        }
        , complete: () => {
        }
      }
    )
  }

  sumCounterFirst(): void {
    this.sum = 0
    this.bascketItems$.subscribe(value => {
      console.log(value)
      value.forEach(post => this.sum += (post.counter * post.price))
    })
  }

  ngOnDestroy(): void {
    // @ts-ignore
    this.unsubscribe$.next()
    this.unsubscribe$.complete()
  }


}
