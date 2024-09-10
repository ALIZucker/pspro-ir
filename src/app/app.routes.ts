import {Routes} from '@angular/router';
import {HomeComponent} from "../pages/home/home.component";
import {SearchComponent} from "../pages/search/search.component";
import {NotfoundComponent} from "../pages/notfound/notfound.component";
import {DashboardPostComponent} from "../pages/dashboard-post/dashboard-post.component";

export const routes: Routes = [
  {path: '', component: HomeComponent, title: "home"},
  {path: 's/:id', title: "search", component: SearchComponent}, {
  path:'dashboard-post/:id',component:DashboardPostComponent,title:'dashboard'
  }, {
    path: '**',
    component: NotfoundComponent
  }
];
