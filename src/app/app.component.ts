import { Component, OnInit } from '@angular/core';
import { Store, State } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as TutorialActions from './actions';

import { AppState } from './AppState';
import { v4 as uuid } from 'uuid'; // uuid to biblioteka, mozemy w niej wygenerowac unikalny identyfikator id
// import { AddItemAction } from './actions';

import { PLUS, MINUS} from './reducer';
import { Tutorial } from './tutorial.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  // tutorials: Observable<string>;
  myObject: Tutorial; // Observable<Tutorial>

  constructor(private store: Store<Tutorial>) { }

  ngOnInit() {
    // this.store.select(state => this.myObject = state); // NOK

    this.store.subscribe(x => this.myObject = x); // NOK
  }

  plus() {
  this.store.dispatch({ type: PLUS });
  }

  minus() {
   this.store.dispatch({ type: MINUS });
   }

  buttonPlusState(): boolean {
    if ((JSON.parse(localStorage.getItem('status'))) < 6) {
      return true;
    } else return false;
  }

  buttonMinusState(): boolean {
    if ((JSON.parse(localStorage.getItem('status'))) >= 0) {
      return true;
    } else return false;
  }
 
  refresh() {
    localStorage.clear();
  }
}





