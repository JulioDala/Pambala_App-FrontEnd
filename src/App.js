import React from 'react';
import Rotas from './components/Rotas';
import './App.css'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


import Container from './components/layout/Container';


function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <Container>
        <Rotas />
      </Container>
      {/* <Footer /> */}
    </div>
  );
}
export default App;
