import React from 'react';
import './App.css';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './component/Card'
// import {Router, Link} from '@reach/router';

function App() {
  return (
        <div className="App">
        <div className="container">
        <Home />
          <div className="row">
          <div className="col-4">
            <Card resturant_title="Salmon and Bear" cuisine="Cafe" location_name="crows nest" card_img="https://b.zmtcdn.com/data/res_imagery/17985854_CHAIN_56b63c75638c91db8452b1e67fccd638.jpg" />
          </div>
          <div className="col-4">
            <Card className="col-4" resturant_title="Salmon and Bear" cuisine="Cafe" location_name="crows nest" card_img="https://b.zmtcdn.com/data/res_imagery/17985854_CHAIN_56b63c75638c91db8452b1e67fccd638.jpg" />
          </div>
          <div className="col-4">
            <Card resturant_title="Salmon and Bear" cuisine="Cafe" location_name="crows nest" card_img="https://b.zmtcdn.com/data/res_imagery/17985854_CHAIN_56b63c75638c91db8452b1e67fccd638.jpg" />
          </div>
          </div>
          
        </div>
            
            
          </div>
  );
}

export default App;
