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

  tutorials: Observable<string>;

  constructor(private store: Store<Tutorial>) {
    // this.tutorials = this.store.select('tutorial');
    this.tutorials = this.store.select(state => state.currentDay);
    console.log('tutorials (z html):', this.tutorials);
  }

  ngOnInit() {

  }
 // plus = () => this.store.dispatch({ type: PLUS });

  plus() {

   //this.store.dispatch(new TutorialActions.AddItemAction(index)); // ??? jaki typ
  this.store.dispatch({ type: PLUS });
  }
}
