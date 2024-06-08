
import React from 'react';
import Navbar from './Navbar'
import Artical from './artical';
import Card from './card';
import Table from './Table';
import { Container } from 'react-bootstrap'
import Footer from './Footer'
import './App1.css';

function App() {
  return (
    <>
      <Navbar />
      <Artical />
      <Container>
        <div className='ppp'>
          <Card />
          <Table />
        </div>
      </Container>
      <div className='mt-5'>
      <Footer />
      </div>
    </>
  );
}

export default App;
