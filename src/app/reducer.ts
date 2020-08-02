import { AppState } from './AppState';
//import { Actions } from './actions';
// import * as TutorialActions from './actions';
import { Tutorial } from './tutorial.model';
import { Action } from '@ngrx/store';

export const PLUS = 'PLUS';

const initialState: Tutorial = {
    days: ['monday', 'tuesday', 'wednesday', 'thursday', 'saturday', 'sunday'],
    currentDay: 'monday',
    id: 0,
};


export function ShoppingReducer(state: Tutorial = initialState, action: Action) {
    switch (action.type) {
      case  PLUS:
    
        let indeks = state.id + 1;
        if (state.id > 6) {
          indeks == 0 ;
        }
        let myDay = state.days[indeks];
        console.log('state after PLUS', state);
        state = { ...state, id: indeks, currentDay: myDay }; // OK !!!
        return state;

      default:
        console.log('default state:', state);
        return state; // zwracamy obiekt, by w pliku app ts dostac sie do property CurrentDay typu string i ja wyswietlic
    }
  }

