import Banner from "../ui/banner";
import Button from "../ui/button";
import Container from "../ui/container";
import Faq from "../ui/faq";

export default function Teleatendimento() {
  return (
    <Container>
      <section className="w-full">
        <Banner url="" title="" subtitle="" button={<Button label="Marcar consulta online" icon="arrow-top-right" />} />
      </section>
      <section className="w-full">
        <p>Com o teleatendimento médico, você pode acessar uma consulta especializada no conforto da sua casa. Ideal para diagnóstico de lesões, acompanhamento pós-operatório e planejamento de tratamentos modernos, o atendimento online traz praticidade e segurança para sua rotina.</p>
      </section>
      <section className="w-full">
        <h1>Como funciona o teleatendimento médico?</h1>
        <p>O processo de teleconsulta foi desenhado para ser simples e eficiente:</p>
        <div className="flex justify-center gap-4">
          <div className="flex flex-col items-center text-center w-60">
            IMAGE
            <h1>Agendamento online</h1>
            <p>escolha um horário que se encaixe na sua agenda.</p>
          </div>
          <div className="flex flex-col items-center text-center w-60">
            IMAGE
            <h1>Consulta por video</h1>
            <p> conecte-se em um ambiente virtual seguro e privativo.</p>
          </div>
          <div className="flex flex-col items-center text-center w-60">
            IMAGE
            <h1>Análise detalhada</h1>
            <p> avaliação dos sintomas, histórico e exames, fornecendo um diagnóstico preciso.</p>
          </div>
          <div className="flex flex-col items-center text-center w-60">
            IMAGE
            <h1>Planejamento personalizado</h1>
            <p>orientações para tratamento, prevenção ou encaminhamento para cirurgia de joelho, se necessário.</p>
          </div>
        </div>
      </section>
      <section className="w-full">
        <h1>São muitos benefícios para você!</h1>
        <p>O teleatendimento oferece inúmeras vantagens para quem busca cuidado especializado em saúde do joelho:</p>
        <div className="grid grid-cols-2">
          <div className="flex items-center gap-4">
            <span>IMAGE</span>
            <div className="flex flex-col">
              <h2>Acesso rápido ao especialista:</h2>
              <p>ideal para casos de emergência ou consultas de rotina.</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span>IMAGE</span>
            <div className="flex flex-col">
              <h2>Diagnóstico preciso de lesões do joelho:</h2>
              <p>avaliação de dores, inchaços e problemas articulares.</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span>IMAGE</span>
            <div className="flex flex-col">
              <h2>Facilidade no acompanhamento pós-cirúrgico:</h2>
              <p>monitore sua evolução de forma prática.</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span>IMAGE</span>
            <div className="flex flex-col">
              <h2>Orientação sobre reembolso:</h2>
              <p>receba suporte para consultas particulares e processos de reembolso de cirurgias.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full">
        <h1>Agende sua consulta online agora!</h1>
        <p>Não deixe que a dor no joelho limite sua qualidade de vida. Agende sua consulta online e comece a sua recuperação hoje mesmo!</p>
        <Button label="Marcar consulta online" icon="arrow-top-right" />
      </section>
      <section className="w-full">
        <Faq
          data={[
            { question: "Posso realizar a consulta pelo celular?", answer: "Sim, o teleatendimento é acessível por smartphones, tablets ou computadores. Basta uma conexão estável com a internet." },
            { question: "Quanto tempo dura uma consulta online?", answer: "Normalmente, a consulta dura entre 30 e 40 minutos, mas o tempo pode variar dependendo da complexidade do seu caso." },
            { question: "O que preciso preparar antes da consulta?", answer: "Recomendo que você tenha em mãos seus exames recentes, histórico médico e uma lista de sintomas ou dúvidas para conversarmos." },
            { question: "Como funciona o pagamento para consultas particulares?", answer: "Você pode realizar o pagamento online, via cartão de crédito, transferência bancária ou PIX, antes da consulta." },
            { question: "Você pode emitir receitas médicas durante o teleatendimento?", answer: "Sim, posso emitir receitas e atestados digitais, devidamente assinados e válidos em todo o território nacional." },
            { question: "O que acontece se minha conexão cair durante a consulta?", answer: "Se sua conexão for interrompida, entrarei em contato para retomar a consulta ou reagendá-la, conforme necessário." },
            { question: "O teleatendimento é seguro?", answer: "Sim, utilizo uma plataforma criptografada que garante a privacidade e a segurança de todas as informações compartilhadas." },
            { question: "Posso solicitar uma segunda opinião médica?", answer: "Claro! Se precisar de uma segunda opinião, terei prazer em revisar diagnósticos ou tratamentos realizados anteriormente." },
            { question: "E se eu precisar de um exame complementar?", answer: "Se necessário, solicitarei os exames durante a consulta e enviarei o pedido digitalmente para que você realize no local de sua preferência." },
            { question: "Há suporte técnico caso eu tenha dificuldade em acessar a consulta?", answer: "Sim, ofereço suporte para ajudá-lo caso surja alguma dificuldade técnica antes ou durante a consulta." },
          ]}
        />
      </section>
    </Container>
  );
}
