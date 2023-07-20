
import './App.css';
import React from 'react';
import { useEffect } from 'react';
import Search from './search.svg';


//4901d0fe

const API_URL = 'http://www.omdbapi.com/?apikey=4901d0fe';


const App=()=> {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data);
   


  }

  useEffect(()=>{
    searchMovies('spiderman');
    

  },[]);

  
  

  
  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input type="text" placeholder="Search Movies" onChange={()=>{}} />
        <img src={Search} alt="search" onClick={()=>{}} />

      </div>

      <div className="container">
        
      </div>
      
      
    </div>
  );
}

export default App;
