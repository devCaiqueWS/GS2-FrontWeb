import React, { useState } from "react";
import dietaImg from "../assets/dieta.png";
import bioImg from "../assets/bioimpedance.png";
import "../style/Projeto.css";

function generateRandomBioimpedanceData(opcaoSelecionada) {
  let pesoTotal;

  switch (opcaoSelecionada) {
    case "Ganho de massa muscular":
      pesoTotal = Math.floor(Math.random() * (70 - 35 + 1)) + 35;
      break;
    case "Ganho de peso":
      pesoTotal = Math.floor(Math.random() * (45 - 35 + 1)) + 35;
      break;
    case "Perda de gordura":
      pesoTotal = Math.floor(Math.random() * (180 - 95 + 1)) + 95;
      break;
    case "Ganho de massa muscular e perda de gordura":
      pesoTotal = Math.floor(Math.random() * (120 - 80 + 1)) + 80;
      break;
    default:
      pesoTotal = 0;
      break;
  }

  const maxMassaOssea = 70;
  const maxMassaMuscular = 30;
  const maxGordura = 40;

  const randomMassaOssea = Math.floor(Math.random() * (maxMassaOssea + 1));
  const randomMassaMuscular = Math.floor(
    Math.random() * (maxMassaMuscular + 1)
  );
  const randomGordura = 100 - randomMassaOssea - randomMassaMuscular;

  return {
    pesoTotal: pesoTotal,
    massaOssea: randomMassaOssea,
    pesoGordura: randomGordura,
    pesoMuscular: randomMassaMuscular,
  };
}

function generateDieta(opcaoSelecionada) {
  switch (opcaoSelecionada) {
    case "Ganho de massa muscular":
      return (
        <div>
          <label>Dieta para ganho de massa muscular:</label>
          <ul>
            <li>
              Café da manhã: Omelete de claras de ovos com vegetais, aveia,
              frutas e nozes.
            </li>
            <li>
              Lanche da manhã: Iogurte grego com frutas e uma porção de
              castanhas.
            </li>
            <li>
              Almoço: Peito de frango grelhado, arroz integral, legumes cozidos
              e salada.
            </li>
            <li>
              Lanche da tarde: Batata-doce cozida ou assada com peru ou queijo
              cottage.
            </li>
            <li>Jantar: Salmão assado, quinoa, brócolis e uma salada verde.</li>
          </ul>
        </div>
      );
    case "Ganho de peso":
      return (
        <div>
          <label>Dieta para ganho de peso:</label>
          <ul>
            <li>
              Café da manhã: Aveia com leite integral, banana e manteiga de
              amendoim.
            </li>
            <li>
              Lanche da manhã: Smoothie de frutas com iogurte, aveia e mel.
            </li>
            <li>
              Almoço: Sanduíche de frango ou peru com abacate, queijo e pão
              integral.
            </li>
            <li>Lanche da tarde: Mix de frutas secas e nozes.</li>
            <li>Jantar: Massa integral com molho de carne magra e vegetais.</li>
          </ul>
        </div>
      );
    case "Perda de gordura":
      return (
        <div>
          <label>Dieta para perda de gordura:</label>
          <ul>
            <li>
              Café da manhã: Ovos mexidos com espinafre e tomate, acompanhados
              de uma fatia de pão integral.
            </li>
            <li>Lanche da manhã: Frutas frescas ou vegetais crus com homus.</li>
            <li>
              Almoço: Salada grande com folhas verdes, proteína magra (frango,
              peixe), grãos integrais ou quinoa.
            </li>
            <li>
              Lanche da tarde: Iogurte natural com algumas nozes ou sementes.
            </li>
            <li>Jantar: Peixe grelhado ou assado com legumes no vapor.</li>
          </ul>
        </div>
      );
    case "Ganho de massa muscular e perda de gordura":
      return (
        <div>
          <label>Dieta para ganho de massa muscular e perda de gordura:</label>
          <ul>
            <li>Café da manhã: Smoothie de proteína com frutas e aveia.</li>
            <li>
              Lanche da manhã: Wrap de atum com vegetais frescos em folha de
              alface.
            </li>
            <li>Almoço: Batata-doce cozida com peito de frango desfiado.</li>
            <li>Lanche da tarde: Shake de proteína com amêndoas.</li>
            <li>Jantar: Bife magro com abobrinha grelhada e quinoa.</li>
          </ul>
        </div>
      );
    default:
      return <p>Selecione uma opção para obter uma dieta personalizada.</p>;
  }
}

function Projeto() {
  const [bioimpedanceInfo, setBioimpedanceInfo] = useState(null);
  const [dieta, setDieta] = useState(null);
  const [opcaoSelecionada, setOpcaoSelecionada] = useState("");
  const [mostrarResultados, setMostrarResultados] = useState(false); // Estado para controlar a visibilidade dos resultados

  const handleInputChange = (event) => {
    setOpcaoSelecionada(event.target.value);
  };

  const handleAnalyze = () => {
    const randomBioimpedance = generateRandomBioimpedanceData(opcaoSelecionada);
    const dietaGerada = generateDieta(opcaoSelecionada);

    setBioimpedanceInfo(randomBioimpedance);
    setDieta(dietaGerada);
    setMostrarResultados(true);
  };

  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-12 mb-4">
            <h1>Bioimpedância</h1>
            <hr />
            <p>
              Com base em sua escolha e bioimpedância realizada pelo aparelho,
              montaremos uma dieta personalizada especialmente para seus
              objetivos.
            </p>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Selecione seu objetivo..."
                list="faixa"
                value={opcaoSelecionada}
                onChange={handleInputChange}
              />
              <datalist id="faixa">
                <option value="Ganho de massa muscular">+musc</option>
                <option value="Ganho de peso">+mass</option>
                <option value="Perda de gordura">-mass</option>
                <option value="Ganho de massa muscular e perda de gordura">
                  ±MuscMass
                </option>
              </datalist>
              <button className="btn btn-primary" onClick={handleAnalyze}>
                Analisar
              </button>
            </div>
          </div>
          <div className="col-md-12">
            {mostrarResultados && ( // Verifica se os resultados devem ser exibidos
              <h4>Informações de Bioimpedância</h4>
            )}
            <div
              className={`bioimpedance-info ${
                mostrarResultados ? "" : "d-none"
              }`}
            >
              {bioimpedanceInfo && (
                <ul>
                  <li>Peso Total: {bioimpedanceInfo.pesoTotal} kg</li>
                  <li>Massa Óssea: {bioimpedanceInfo.massaOssea}%</li>
                  <li>Peso em Gordura: {bioimpedanceInfo.pesoGordura}%</li>
                  <li>Peso em Músculos: {bioimpedanceInfo.pesoMuscular}%</li>
                </ul>
              )}
              <img src={bioImg} alt="" />
            </div>
          </div>
          <div className="col-md-12 mt-4">
            <div className={`dieta-info ${mostrarResultados ? "" : "d-none"}`}>
              <h4>Dieta personalizada</h4>
              <div className="dieta-content">
                <img src={dietaImg} alt="" />
                {dieta && <p>{dieta}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projeto;
