import {Component, OnInit} from '@angular/core';
import {map} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {
  constructor(private routthis: ActivatedRoute) {
  }

  queru$ = this.routthis.queryParams.pipe(map(queryparams => queryparams['q']
  ))
  id$ = this.routthis.params.pipe(map(params => params['id']))

  ngOnInit(): void {
    this.id$.subscribe({
      next: params => {
        console.log(params)
      },
      error: err => {
        console.log(err)
      },
      complete: () => {
      }
    })

    this.queru$.subscribe({
      next: params => {
        console.log(params)
      },
      error: err => {
        console.log(err)
      },
      complete: () => {
      }
    })


  }
}
