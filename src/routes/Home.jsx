import React from "react";
import "../style/Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import smart from "../assets/smartWatchPhone.png";
import grupo from "../assets/TechGroup.png";
import esporte from "../assets/Esportes.png";
import dieta from "../assets/Diet.png";

function Home() {
  return (
    <>
      <div>
        <div className="jumbotron">
          <div className="container">
            <h1>LifeSync: Saúde personalizada</h1>
            <p>Dietas precisas e objetivas para atender às suas metas de saúde.</p>
            <div className="btn-group">
              <button className="btn btn-primary" to="/sobre">Saiba Mais...</button>
              <button className="btn btn-secondary">Login</button>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 feature-section d-flex align-items-center justify-content-center">
              <div className="text-center">
                <h2>Meta</h2>

                <div className="row justify-content-center">
                  <span>"</span>
                  <p>
                    A meta da nossa empresa é criar uma sinergia entre
                    diferentes setores vitais para o bem-estar e qualidade de
                    vida das pessoas. Buscamos unir Esportes, Alimentação,
                    Tecnologia e Saúde, reconhecendo a importância de cada um
                    desses pilares para uma vida equilibrada. Acreditamos que a
                    prática esportiva não apenas fortalece o corpo, mas também a
                    mente, e é complementada por uma alimentação saudável e
                    balanceada. A incorporação da tecnologia nos processos de
                    cuidados com a saúde é fundamental para o monitoramento e
                    aprimoramento desses aspectos, possibilitando uma abordagem
                    mais completa e eficaz para a promoção do bem-estar geral.
                  </p>
                  <span>"</span>
                  <div className="col-md-4">
                    <h3>Esportes</h3>
                    <img src={esporte} alt="Imagem 1" height={350} />
                  </div>
                  <div className="col-md-4">
                    <h3>Alimentação</h3>
                    <img src={dieta} alt="Imagem 2" height={350} />
                  </div>
                  <div className="col-md-4">
                    <h3>Tecnologia</h3>
                    <img src={grupo} alt="Imagem 3" height={350} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-6 feature-section">
              <h2>Proposta</h2>
              <div className="section-description">
                <p>
                  A proposta central desta ideia é promover a saúde abrangente
                  por meio de um smartwatch inteligente capaz de realizar
                  análises de bioimpedância. Esse dispositivo inovador coletaria
                  dados fisiológicos relevantes do usuário e os transmitiria
                  para uma plataforma online dedicada. A partir dessas
                  informações, o sistema usaria algoritmos especializados para
                  oferecer recomendações dietéticas personalizadas, alinhadas
                  com os objetivos individuais de cada pessoa. Essa abordagem
                  inovadora garantiria uma dieta ideal, adaptada às necessidades
                  específicas do usuário, o que poderia incluir metas de perda
                  de peso, ganho muscular, equilíbrio nutricional ou outros
                  objetivos relacionados à saúde. Essa integração entre
                  tecnologia vestível e análise de dados permitiria uma
                  abordagem proativa e personalizada para a manutenção da saúde,
                  priorizando o bem-estar individual de cada usuário.
                </p>
                <div className="btn-group">
                  <a href="rota1" className="btn btn-primary">
                    Sobre
                  </a>
                  <a href="rota2" className="btn btn-secondary">
                    Contato
                  </a>
                  <a href="login" className="btn btn-info">
                    Login
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 feature-section">
              <img src={smart} alt="Imagem Explicativa" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
