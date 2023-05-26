import { FaSistrix } from "react-icons/fa";
import "./style.css";
import { useState } from "react";
import api from './api.js';

function App() {

  const[input, setInput] = useState('')
  const [cep, setCep] = useState({})

  async function handleSearch(){
    if(input === ''){
      alert("Preencha com algum cep!")
      return;
    }

    try{ const response = await api.get(`${input}/json`);
    setCep(response.data)
    setInput("")

    }catch{ alert("Ops erro ao procurar!")
    setInput("")

    }

  }

  return (
    <div className="container">
      <h1 className="title">Encontre seu Cep</h1>

      <div className="containerinput">
        <input type="text" placeholder="Digite seu Cep..."
        value={input}
        onChange={(e) => setInput(e.target.value)}/>

        <button className="buttonSearch" onClick={handleSearch}>
          <FaSistrix size={20} color="#fff" />
        </button>
      </div>

      <main className="main">
        <h2>Cep buscado: {cep.cep}</h2>
        <span>Rua buscada: {cep.logradouro}</span>
        <span>Cidade buscada: {cep.localidade}</span>
        <span>Bairro buscado: {cep.bairro}</span>
        <span>Estado de dominio: {cep.uf}</span>
      </main>
    </div>
  );
}

export default App;
