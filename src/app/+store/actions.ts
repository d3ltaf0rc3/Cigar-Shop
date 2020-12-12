import { createAction, props } from '@ngrx/store';
import { IUser } from '../shared/interfaces/user';
const authNamespace = '[Auth]';

export const setUser = createAction(`${authNamespace} Set User`, props<{ user: IUser }>());
export const clearUser = createAction(`${authNamespace} Clear User`);
