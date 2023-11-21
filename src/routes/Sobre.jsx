import React from "react";
import logo from "../assets/LifeSyncLogo.png";
import desktop from "../assets/mockup.jpg";
import watch from "../assets/mockup_watch.jpg";

function Sobre() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-12">
          <img src={logo} alt="" width={500} />
          <p>
            LifeSync é um grupo dedicado a desenvolver soluções tecnológicas que
            visam proteger e melhorar a qualidade de vida das pessoas, ao mesmo
            tempo em que preservam o assegurar o acesso a saúde para todos. Seu
            objetivo é utilizar a tecnologia para construir um futuro mais
            seguro, sustentável e saúdavel.
          </p>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-6">
          <h2>O Projeto</h2>
          <ul>
            <li>
              <strong>Monitoramento de Saúde em Tempo Real:</strong> Utilizamos
              a tecnologia de smartwatches para monitorar em tempo real as
              estatísticas vitais, como frequência cardíaca, padrões de sono e
              atividades físicas do usuário.
            </li>
            <li>
              <strong>Acompanhamento Personalizado:</strong> Oferecemos um
              acompanhamento personalizado baseado nos dados coletados, gerando
              insights e sugestões para melhoria da saúde, como dicas de
              exercícios, metas de atividade e lembretes de bem-estar.
            </li>
            <li>
              <strong>Dieta Personalizada:</strong> Além do monitoramento
              físico, fornecemos planos de dieta personalizados com base nos
              objetivos individuais de saúde, como ganho de massa muscular,
              perda de peso ou uma alimentação mais balanceada.
            </li>
            <li>
              <strong>Comunidade e Suporte:</strong> Oferecemos uma comunidade
              ativa onde os usuários podem compartilhar experiências, obter
              apoio de especialistas e se motivar mutuamente para alcançar metas
              de saúde.
            </li>
          </ul>
        </div>
        <div className="col-md-6">
          <h2>Integrantes</h2>
          <p>
            Nossa equipe é composta de estudantes de engenharia de software.
            Cada membro desempenha um papel crucial na concepção,
            desenvolvimento e manutenção da plataforma, garantindo qualidade,
            precisão e confiabilidade em todos os aspectos.
          </p>
          
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-12">
          <h2>Uso de Smartwatches</h2>
          <p>
            Os smartwatches são uma peça fundamental em nossa plataforma. Eles
            permitem que os usuários monitorem continuamente suas métricas de
            bioimpedância, registrem suas atividades diárias, recebam lembretes
            personalizados e estejam conectados à nossa plataforma para receber
            feedback e direcionamentos em tempo real.
          </p>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-6">
          <h2>Mockup Desktop</h2>
          <img src={desktop} alt="Mockup Desktop" className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h2>Mockup SmartWatches</h2>
          <img
            src={watch}
            alt="Mockup prototipo em smartwatches"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
}

export default Sobre;
