import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from './Views/Landing/Landing';
import Home from './Views/Home/Home'
import Error404 from './Component/Error404/Error404'
import Ingresos from './Views/Ingresos/Ingresos';
import Control from './Views/Control/Control';
import Presentismo from './Views/Presentismo/Presentismo';

function App() {
  return (
    <Router>
      <Routes>       
        <Route path="/" element={<Landing />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="*" element={<Error404 />}></Route>
        <Route path="/Ingresos" element={<Ingresos />}></Route>    
        <Route path="/Presentismo" element={<Presentismo />}></Route>    
        <Route path="/Control" element={<Control />}></Route>    
      </Routes>
    </Router>
  );
}

export default App;
