import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import configureStore from './config/store';
import { Provider } from 'react-redux'

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/details" component={DetailPage} />
        </Router>
      </Provider>
    )
  }
}

export default App;
