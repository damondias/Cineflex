import { useState } from "react";
import ContainerAssentos from "./ContainerAssentos";
import Legenda from "./Legenda";
import Dados from "./Dados";
import './style.css';

function Assentos({ info }) {
    const [selecionados, setSelecionados] = useState([]);
    return (
        <>
            <ContainerAssentos info={info} selecionados={selecionados}
            setSelecionados={setSelecionados} />
            <Legenda />
            <Dados></Dados>
        </>
    )
}

export default Assentos;