import {
  configureStore,
  combineReducers,
  unwrapResult as nativeUnwrapResult,
  Dispatch,
  AnyAction,
} from '@reduxjs/toolkit';
import {
  TypedUseSelectorHook,
  useDispatch as useNativeDispatch,
  useSelector as useNativeSelector,
} from 'react-redux';
import MoodTypesSlice from './slices/moodTypesSlice';

const reducers = combineReducers({
  moodTypes: MoodTypesSlice,
});

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

type RootState = ReturnType<typeof store.getState>;

const useDispatch = () => useNativeDispatch<Dispatch<AnyAction>>();
const useSelector: TypedUseSelectorHook<RootState> = useNativeSelector;

const unwrapResult = nativeUnwrapResult;

export { unwrapResult, useDispatch, useSelector };
// eslint-disable-next-line no-undef
export type { RootState };

export default store;
