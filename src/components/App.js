import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './Header';
import Catalogo from "./Catalogo";
import Filme from "./Filme";
import Sessao from "./Sessao";

function App() {
  const [idFilme, setIdFilme] = React.useState(null);
  return (
    <BrowserRouter>      
      <Header />
      <Routes>
        <Route path="/" element={<Catalogo setIdFilme={setIdFilme}/>}></Route>
        <Route path="/filme/:idFilme" element={<Filme />}></Route>
        <Route path="/sessao/:idSessao" element={<Sessao />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;