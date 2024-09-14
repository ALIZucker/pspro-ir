import {Component, OnInit} from '@angular/core';
import {ApiServerService} from "../home/api-server.service";
import {ActivatedRoute} from "@angular/router";
import {map, Observable} from "rxjs";
import {postDetail} from "../../component/post/data-interface";
import {GalleryKalaComponent} from "../../component/gallery-kala/gallery-kala.component";
import {PostDetailComponent} from "../../component/post-detail/post-detail.component";

@Component({
  selector: 'app-dashboard-post',
  standalone: true,
  imports: [
    GalleryKalaComponent,
    PostDetailComponent
  ],
  templateUrl: './dashboard-post.component.html',
  styleUrl: './dashboard-post.component.css'
})
export class DashboardPostComponent implements OnInit {

  constructor(private service: ApiServerService, private thisRoute: ActivatedRoute) {
  }

  //IdItem$ = this.thisRoute.params.pipe(map(params => params['id']))
  strid = this.thisRoute.snapshot.params['id'];
  queryItem$?: Observable<postDetail>;
  Items!: postDetail;

  ngOnInit(): void {
    this.queryItem$ = this.service.getOnlyOneItem(`http://localhost:8000/dashboard-post/${this.strid}`)
    this.queryItem$.subscribe(value => this.Items = value);
  }

  botEvent(event: string) {
    alert(event)
  }


}
