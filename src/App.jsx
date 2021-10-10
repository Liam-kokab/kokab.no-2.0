import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Pages from './Pages/Pages';
import './App.scss';


const App = () => (
  <Router>
    <div className="app">
      <Header />
      <Menu />
      <Pages />
    </div>
  </Router>
);

export default App;
