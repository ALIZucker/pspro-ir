import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {postDetail} from "../../component/post/data-interface";


@Injectable({
  providedIn: 'root'
})
export class ApiServerService {

  allData$!: Observable<postDetail[]>;

  constructor(private http: HttpClient) {
  }

  getDataApi(Url: string): Observable<postDetail[]> {
    this.allData$ = this.http.get<postDetail[]>(Url)
    return this.allData$;
  }
}
