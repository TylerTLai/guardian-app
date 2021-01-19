import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import { createFilter } from 'redux-persist-transform-filter';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from './reducers/rootReducer';

// const persitingReducer = createFilter('bookmarkReducer.bookmarks');

const persistConfig = {
  key: 'root',
  storage,
  // transforms: [persitingReducer],
  whitelist: ['bookmarkReducer'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

const persistor = persistStore(store);

export { store, persistor };
