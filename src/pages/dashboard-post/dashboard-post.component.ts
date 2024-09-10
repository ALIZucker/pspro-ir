import {Component, OnInit} from '@angular/core';
import {ApiServerService} from "../home/api-server.service";
import {ActivatedRoute} from "@angular/router";
import {map, Observable} from "rxjs";
import {postDetail} from "../../component/post/data-interface";

@Component({
  selector: 'app-dashboard-post',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-post.component.html',
  styleUrl: './dashboard-post.component.css'
})
export class DashboardPostComponent implements OnInit {

  constructor(private service: ApiServerService, private thisRoute: ActivatedRoute) {
  }

  //IdItem$ = this.thisRoute.params.pipe(map(params => params['id']))
  strid = this.thisRoute.snapshot.params['id'];
  queryItem$?: Observable<postDetail>;

  ngOnInit(): void {
  this.queryItem$=this.service.getOnlyOneItem(`http://localhost:8000/dashboard-post/${this.strid}`)
    this.queryItem$.subscribe(value => console.log(value));
  }
}
