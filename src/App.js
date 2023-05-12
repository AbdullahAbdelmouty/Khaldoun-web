import './App.css';
import React from 'react';
import {Route,NavLink,Routes,BrowserRouter} from "react-router-dom";
import Home from './Companets/Home';
import DesignPage from './DesignPage';
import Impelement from './Impelement';
import Header from './Companets/Header';
import CopyWrite from './Companets/CopyWrite';
function App() {
  return (
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/DesignPage' element={<DesignPage />} />
        <Route path='/Impelement' element={<Impelement />} />
      </Routes>
      <CopyWrite />
      </BrowserRouter>

  );
}

export default App;
