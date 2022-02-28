import React from 'react';
import Main from './MainPage/Main';
import { Route, Routes } from 'react-router-dom';
import Paris from './Pages/Paris';
import Bengaluru from './Pages/Bengaluru';
import NewYork from './Pages/NewYork';

const App = () => {
  return(
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/Paris" element={<Paris />} />
      <Route path="/Bengaluru" element={<Bengaluru />} />
      <Route path="/NewYork" element={<NewYork />} />
    </Routes>
  );
};

export default App;
