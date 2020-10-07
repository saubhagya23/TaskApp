import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';
// import Reactotron from '../config/ReactotronConfig'


// export default createStore(rootReducer, applyMiddleware(thunkMiddleware));
export default createStore(rootReducer, compose(applyMiddleware(thunkMiddleware)/* , Reactotron.createEnhancer() */));