import {Injectable} from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AllertServiceService {

  constructor() {
  }

  subject: Subject<void> = new Subject<void>()

}
