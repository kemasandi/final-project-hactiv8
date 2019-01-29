import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import faqReducer from './redux/Faq/reducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    faq: faqReducer, 
})

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    ),     
)

export default store;