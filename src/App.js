import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Converter from './pages/converter';

function App() {
  return (
   
    <div>
     <BrowserRouter>
     <Routes>
      <Route path='/converter' element={<Converter/>} />
     
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
