import React from 'react';
import './App.css';
import Register from './components/Register.js';
import Login from './components/Login.js';
import NewAuction from './components/AuctionEdit.js';

function App() {
  return (
    <div className="App">
      <div>
      <Register />
      </div>
      <div>
      <Login />
      </div>
      <div>
      <NewAuction />
      </div>
    </div>
  );
}

export default App;
