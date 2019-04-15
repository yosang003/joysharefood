// import { createStore, combineReducers, compose, applyMiddleware } from 'redux';

// import ThunkMiddleware from 'redux-thunk';
// import rootReducer from './reducers';
// import home from '../pages/home/homeRedux';


//redux-thunk发挥的作用是什么
// const finalCreateStore = compose(
//     applyMiddleware(ThunkMiddleware)
// )(createStore)

// export default function configureStore(initialState) {
//     const store = finalCreateStore({home}, initialState);

//     return store;
// }

import {
    createStore,
    applyMiddleware,
    combineReducers,
    compose
  } from 'redux'
  import thunk from 'redux-thunk'
  import { home } from '../pages/home/homeRedux';
  import { list } from '../pages/list/listRedux';
  import { detail } from '../pages/detail/detailRedux';
  import { composeWithDevTools } from 'redux-devtools-extension';
  
  
  const store = createStore(
    combineReducers({
      home,
      list,
      detail
    }),
    compose(
      applyMiddleware(thunk),
      composeWithDevTools()
    )
    
  )
  
  export default store