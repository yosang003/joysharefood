import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import routes from './routes';
import store from './redux/configureStore';

// const store = configureStore();

ReactDOM.render((
    <Provider store={store}>
        {routes}
    </Provider>
),document.getElementById('root'));