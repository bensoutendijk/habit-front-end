import { combineReducers, createStore, applyMiddleware } from 'redux';
import reduxLogger from 'redux-logger';
import reduxThunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";

import { authReducer } from './auth/reducers';
import { projectsReducer } from './projects/reducers';
import { servicesReducer } from './services/reducers';
import { reposReducer } from './repos/reducers';


const rootReducer = combineReducers({
    auth: authReducer,
    projects: projectsReducer,
    services: servicesReducer,
    repos: reposReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
    const middlewares = [reduxThunk, reduxLogger];
    const middleWareEnhancer = applyMiddleware(...middlewares);

    const store = createStore(
        rootReducer,
        composeWithDevTools(middleWareEnhancer)
    );

    return store;
}