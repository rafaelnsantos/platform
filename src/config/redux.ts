import { combineReducers, configureStore, OutputSelector } from '@reduxjs/toolkit';
import * as reducers from '~/stores';

const appReducer = combineReducers(reducers);

export const store = configureStore({
  reducer: appReducer,
});

type RootState = ReturnType<typeof appReducer>;

type AppDispatch = typeof store.dispatch;

declare module 'react-redux' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultRootState extends RootState {}

  export function useDispatch(): AppDispatch;
}

declare module '@reduxjs/toolkit' {
  export function createSelector<S, T>(
    selector: (state: RootState) => S,
    combiner: (selected: S) => T
  ): OutputSelector<RootState, T, (selected: S) => T>;
}
