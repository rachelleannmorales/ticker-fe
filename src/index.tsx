import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import App from './components/App';


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <React.StrictMode>
        <App/>
      </React.StrictMode>
    </Router>
  </Provider>,
  document.getElementById('root')
);