import React from 'react';
import './App.css';
import CatList from './features/CatList';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Header />
      <CatList />
    </div>
  );
}

export default App;
