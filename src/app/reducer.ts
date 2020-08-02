import { AppState } from './AppState';
//import { Actions } from './actions';
// import * as TutorialActions from './actions';
import { Tutorial } from './tutorial.model';
import { Action } from '@ngrx/store';

export const PLUS = 'PLUS';
export const MINUS = 'MINUS';


const initialState: Tutorial = {
    days: ['monday', 'tuesday', 'wednesday', 'thursday', 'saturday', 'sunday'],
    currentDay: 'monday',
    id: 0,
};


export function ShoppingReducer(state: Tutorial = initialState, action: Action) {
    switch (action.type) {
      case  PLUS:
        let indeks = state.id + 1;
        localStorage.setItem('status', JSON.stringify(indeks));
        let myDay = state.days[indeks];
        console.log('state after PLUS', state);
        state = { ...state, id: indeks, currentDay: myDay }; // OK !!!
        return state;

      case MINUS:
        let indeks2 = state.id - 1;
        localStorage.setItem('status', JSON.stringify(indeks2));
        let myDay2 = state.days[indeks2];
        console.log('state after MINUS', state);
        state = { ...state, id: indeks2, currentDay: myDay2 }; // OK !!!
        return state;

      default:
        console.log('default state:', state);
        return state; // zwracamy obiekt, by w pliku app ts dostac sie do property CurrentDay typu string i ja wyswietlic
    }
  }

