import React from 'react';
import ReactDom from 'react-dom';
import BookstoreService from './services/bookstore-service';
import { Provider } from 'react-redux';
import store from './store';
import ErrorBoundry from './components/error-boundry';
import { BookstoreServiceProvider } from './components/bookstore-service-context';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/app';

const bookstoreService = new BookstoreService();

ReactDom.render(
  <Provider store={store}>
    <ErrorBoundry>
      <BookstoreServiceProvider value={bookstoreService}>
        <Router>
          <App />
        </Router>
      </BookstoreServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
);
