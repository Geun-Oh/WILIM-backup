import { Action, configureStore, getDefaultMiddleware, ThunkDispatch } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import reducer, { ReducerType } from './rootReducer';

const middleware = [ ...getDefaultMiddleware(), logger ];

const store = configureStore({
    reducer,
    middleware,
});

export type AppThunkDispatch = ThunkDispatch<ReducerType, any, Action<string>>;
export type AppDispatch = typeof store.dispatch;
export default store;