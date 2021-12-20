import {useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './Header/Header';
import Catalogo from "./Catalogo/Catalogo";
import Filme from "./Dados/Filme";
import Sessao from "./Sessao";
import Sucesso from './Sucesso/Sucesso';

function App() {
  const [idFilme, setIdFilme] = useState(null);
  const [dadosSucesso, setDadosSucesso] = useState({});
  return (
    <BrowserRouter>      
      <Header></Header>
      <Routes>
        <Route path="/" element={<Catalogo setIdFilme={setIdFilme}/>}></Route>
        <Route path="/filme/:idFilme" element={<Filme />}></Route>
        <Route path="/sessao/:idSessao" element={<Sessao setDadosSucesso={setDadosSucesso}/>} ></Route>
        <Route path="/sucesso" element={<Sucesso dadosSucesso={dadosSucesso} setDadosSucesso={setDadosSucesso}/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

