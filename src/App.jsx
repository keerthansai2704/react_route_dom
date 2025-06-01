import React from 'react';
import Navbar from './components/navbar/Navbar'; 
import Contact  from './components/contact/contact';
import About from './components/About/About';
import Services from './components/services/services'

import { Route,Routes } from 'react-router-dom';

 function App(){
  return (<div>
    <Navbar />
    <Routes>
      <Route path='/about' element={<About/>}> </Route>
      <Route path='/contact' element={<Contact/>}> </Route>
      <Route path='/services' element={<Services/>}> </Route>
    </Routes>
  </div>)
 }
 export default App;