import React from 'react';
import Navbar from './components/Navbar';
import HeaderCarousel from './components/HeaderCarousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function App(){
    return (
      <div className="App">
         <Navbar/>
         <HeaderCarousel />
      </div>
    );
}
  

export default App;
