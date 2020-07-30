import { Action } from '@ngrx/store';
import { AppState } from './AppState';
import { Tutorial } from './tutorial.model';
// import { Item } from './item';


export const PLUS = 'PLUS';

export class AddItemAction implements Action {
  readonly type = PLUS;

  constructor(public payload: number) { }
}

export type Actions = AddItemAction;
