import { Component, OnInit } from '@angular/core';
import { Store, State } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as TutorialActions from './actions';

import { AppState } from './AppState';
import { v4 as uuid } from 'uuid'; // uuid to biblioteka, mozemy w niej wygenerowac unikalny identyfikator id
// import { AddItemAction } from './actions';

import { PLUS} from './reducer';
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
    this.store.select(state => state).subscribe(x => this.myObject = x); // NOK
    // this.store.select('day').subscribe(x => this.myObject = x); // NOK - day
  }

  plus() {

   //this.store.dispatch(new TutorialActions.AddItemAction(index)); // ??? jaki typ
  this.store.dispatch({ type: PLUS });
  }
}

