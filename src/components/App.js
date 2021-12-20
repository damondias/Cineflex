import {useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './Header/Header';
import Catalogo from "./Catalogo/Catalogo";
import Filme from "./Dados/Filme";
import Sessao from "./Sessao/Sessao";

function App() {
  const [idFilme, setIdFilme] = useState(null);
  return (
    <BrowserRouter>      
      <Header></Header>
      <Routes>
        <Route path="/" element={<Catalogo setIdFilme={setIdFilme}/>}></Route>
        <Route path="/filme/:idFilme" element={<Filme />}></Route>
        <Route path="/sessao/:idSessao" element={<Sessao />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

