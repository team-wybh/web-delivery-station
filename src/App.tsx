import Home from 'pages/Home';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Map from './pages/Map';
import HomeProvider from './template/home/HomeProvider';

function App() {
  return (
    <HomeProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/map' element={<Map />} />
      </Routes>
    </HomeProvider>
  );
}

export default App;
