import React from 'react';
import './App.css';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchResults from './component/SearchResult'
import { Router } from '@reach/router'
import ResDetails from './component/ResDetails'
import Navigation from './component/Navigation'
import CuisineInfo from './component/CuisineInfo'
import Login from './component/Login'
import SearchLocation from './component/SearchLocation';

function App() {
  const Homepg =() =>(
    <div>
      <Navigation/>
      <div className="container">
      <Home/>
      </div>
      
    </div>
  )

  const Search =()=>(
    <div>
      <Navigation/>
      <div className="container">
      <SearchResults />
      </div>
        
    </div>
  )

  return (
        <div className="App">
          <Router>
            <Login path="/" />
            <Homepg path="/home" />
            <Search path="/search/"/>
            <ResDetails path='/restaurant/:id'/>
            <CuisineInfo path='/cuisine/:id' />
            <SearchLocation path="/searchlocation/" />
          </Router>
           
        </div>
  );
}

export default App;
