import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {postDetail} from "../../component/post/data-interface";


@Injectable({
  providedIn: 'root'
})
export class ApiServerService {

  allData$!: Observable<postDetail[]>;
  postItemQuery$!: Observable<postDetail>;

  constructor(private http: HttpClient) {
  }
  getBascketItems(): Observable<postDetail[]> {
    return this.http.get<postDetail[]>('http://localhost:8000/b')
  }
  addPostItem(post: postDetail): Observable<any> {
    return this.http.post<postDetail>('http://localhost:8000/b', post)
  }

  getDataApi(Url: string): Observable<postDetail[]> {
    this.allData$ = this.http.get<postDetail[]>(Url)
    return this.allData$;
  }

  getOnlyOneItem(Url: string): Observable<postDetail> {
    this.postItemQuery$ = this.http.get<postDetail>(Url)
    return this.postItemQuery$;
  }
}
