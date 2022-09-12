import './_App.scss';
import React, { ReactElement } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './views/home/Home';
import { AddCrag } from './views/add-crag/AddCrag';

function App(): ReactElement {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="add" element={<AddCrag />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
