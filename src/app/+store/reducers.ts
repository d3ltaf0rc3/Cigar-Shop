import { createReducer, on } from '@ngrx/store';
import { IUser } from '../shared/interfaces/user';
import { setUser, clearUser } from './actions';

export interface IAuthState {
    user: IUser | null;
}

export const initialState: IAuthState = {
    user: JSON.parse(localStorage.getItem('user')) || null
};

export const authReducer = createReducer<IAuthState>(
    initialState,
    on(setUser, (state, action) => {
        return { ...state, user: action.user };
    }),
    on(clearUser, (state) => {
        return {...state, user: null};
    })
);
