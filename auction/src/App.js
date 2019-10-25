import React from 'react';
import './App.css';
import Register from './components/Register.js';
import Login from './components/Login.js';
import AuctionList from './components/Auction.js';

function App() {
  return (
    <div className="App">
      {/* <div> */}
      {/* <Register /> */}
      {/* </div>
      <div> */}
      <Login />
      {/* </div>
      <div> */}
      <AuctionList />
      {/* </div> */}
    </div>
  );
}

export default App;
