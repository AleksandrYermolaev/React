import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { RootState } from './store';
import { PreloadedState } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import searchQuerySlice from 'store/searchQuerySlice';
import formCardsSlice from 'store/formCardsSlice';
import apiSlice from 'services/apiService';
import Router from 'Router';
import './styles/_global.scss';

declare global {
  interface Window {
    __PRELOADED_STATE__?: PreloadedState<RootState>;
  }
}

export const store = configureStore({
  reducer: {
    searchQuery: searchQuerySlice,
    formCards: formCardsSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
  preloadedState: window.__PRELOADED_STATE__,
});

delete window.__PRELOADED_STATE__;

ReactDOM.hydrateRoot(
  document.getElementById('root'),
  <BrowserRouter>
    <Provider store={store}>
      <Router />
    </Provider>
  </BrowserRouter>
);
