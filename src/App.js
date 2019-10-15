import React from 'react';
import './App.css';
import Header from './Components/Header';
import { HashRouter, Link } from 'react-router-dom';
import routes from './routes';

export function Shop() {
  return (
    <>
      <h1>Shop now!</h1>
      <Link to='/shop/25'>Widget</Link>
    </>
  )
}

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Header />
        {routes}
      </div>
    </HashRouter>
  );
}

export default App;
