import Image from "next/image";
import Button from "../ui/button";
import Container from "../ui/container";
import Faq from "../ui/faq";
import "./style.css";

export default function ConsultasReembolsos() {
  const how_works = [
    {
      title: "Agendamento online",
      desc: "escolha um horário que se encaixe na sua agenda.",
      image:
        "https://i.pinimg.com/736x/0b/4d/4c/0b4d4c73689fe2536bcd51bcb6dae1d3.jpg",
    },
    {
      title: "Consulta por vídeo",
      desc: "conecte-se em um ambiente virtual seguro e privativo.",
      image:
        "https://i.pinimg.com/736x/0b/4d/4c/0b4d4c73689fe2536bcd51bcb6dae1d3.jpg",
    },
    {
      title: "Análise detalhada",
      desc: "avaliação dos sintomas, histórico e exames, fornecendo um diagnóstico preciso",
      image:
        "https://i.pinimg.com/736x/0b/4d/4c/0b4d4c73689fe2536bcd51bcb6dae1d3.jpg",
    },
    {
      title: "Planejamento personalizado",
      desc: "orientações para tratamento, prevenção ou encaminhamento para cirurgia de joelho, se necessário",
      image:
        "https://i.pinimg.com/736x/0b/4d/4c/0b4d4c73689fe2536bcd51bcb6dae1d3.jpg",
    },
  ];

  const benefits = [
    {
      title: "Acesso rápido ao especialista",
      desc: "ideal para casos de emergência ou consulta de rotina.",
      image: "/jpg/dr_computer.jpg",
    },
    {
      title: "Diagnóstico preciso de lesões do joelho",
      desc: "avaliação de dores, inchaços e problemas articulares.",
      image: "/jpg/dr_xray.jpg",
    },
    {
      title: "Facilidade no acompanhamento pós-cirúrgico",
      desc: "monitore sua evolução de forma prática",
      image: "/jpg/woman_call.jpg",
    },
    {
      title: "Orientação sobre reembolso",
      desc: "receba suporte para consultas particulares e processos de reembolso de cirurgias.",
      image: "/jpg/woman_card.jpg",
    },
  ];

  return (
    <div className="main">
      <Container>
        <section className="flex flex-col gap-10 overflow-hidden">
          <div className="banner rounded-4xl ">.</div>
          <p className="text-left text-1xl ">
            Com o teleatendimento médico, você pode ter acesso a uma consulta
            especializada no conforto da sua casa. Ideal para diagnóstico de
            lesões, acompanhamento pós-operatório e planejamento de tratamentos
            modernos, o atendimento online traz praticidade e segurança para sua
            rotina.
          </p>
        </section>
        <section className="how-works flex flex-col justify-center gap-4 pt-12">
          <strong>
            <h1 className="text-center  text-4xl text-[#00726d]">
              Como funciona o teleatendimento médico?
            </h1>
          </strong>
          <p className="text-center text-1xl pb-15">
            O processo de teleconsulta foi desenhado para ser simples e
            eficiente:
          </p>
          <div className="how_works_items flex gap justify-center px-20 gap-20 pb-20 flex-wrap">
            {how_works.map((item, idx) => (
              <div
                className="hw-item p-10 flex flex-col justify-start items-center text-center flex-wrap gap-4 w-1/5 min-w-[270px] rounded-4xl"
                key={idx}
              >
                <Image
                  src={item.image}
                  width={180}
                  height={180}
                  alt={item.title}
                />
                <strong>
                  <h3 className="text-2xl text-[#00726d]">{item.title}</h3>
                </strong>
                <p className="how_works_desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </Container>

      <section className="benefits flex flex-col justify-center bg-[#024440] text-white py-16 gap-4">
        <strong>
          <h1 className="text-center  text-4xl">
            São muitos benefícios para você!
          </h1>
        </strong>
        <p className="text-center text-1xl ">
          O teleatendimento oferece inúmeras vantagens para quem busca cuidado
          especializado em saúde do joelho:
        </p>
        <div className="benefits-items flex gap justify-center px-20 gap-10 pb-20 flex-wrap pt-10">
          {benefits.map((benefit, index) => (
            <div
              className="hw-item p-4 flex flex-col justify-start items-center text-center flex-wrap gap-4 w-1/3 min-w-[360px] bg-red-500"
              key={index}
            >
              <div className="wrapper-benefit flex gap-8">
                <div
                  className="image-benefit overflow-hidden w-50 h-30 flex justify-center items-center rounded-2xl border-3 border-white"
                  style={{
                    backgroundImage: `url(${benefit.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                  aria-label={benefit.title}
                />
                <div className="desc-benefit w-full text-left flex flex-col gap-4 bg-blue-500 p-4 border-b-4 border-white">
                  <p className="text-1xl">
                    <strong>{benefit.title}:</strong>
                  </p>
                  <p className="text-base">{benefit.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Container>
        <section className="schedule flex flex-col items-center gap-8 py-10 px-6">
          <strong>
            <h1 className="text-center  text-4xl text-[#00726d]">
              Agende sua consulta online agora!
            </h1>
          </strong>
          <p className="text-center text-2xl ">
            Não deixe que a dor no joelho limite sua qualidade de vida. Agende
            sua consulta online e comece sua recuperação hoje mesmo.
          </p>
          <Button label="Marcar consulta online" icon="arrow-top-right" />
        </section>
        <section className="faq pb-20 max-md:w-6/6 lg:w-3/6 m-auto md:w-full md:px-2  ">
          <Faq
            data={[
              {
                question: "Posso realizar a consulta pelo celular?",
                answer:
                  "Sim, o teleatendimento é acessível por smartphones, tablets ou computadores. Basta uma conexão estável com a internet.",
              },
              {
                question: "Quanto tempo dura uma consulta online?",
                answer:
                  "Normalmente, a consulta dura entre 30 e 40 minutos, mas o tempo pode variar dependendo da complexidade do seu caso.",
              },
              {
                question: "O que preciso preparar antes da consulta?",
                answer:
                  "Recomendo que você tenha em mãos seus exames recentes, histórico médico e uma lista de sintomas ou dúvidas para conversarmos.",
              },
              {
                question:
                  "Como funciona o pagamento para consultas particulares?",
                answer:
                  "Você pode realizar o pagamento online, via cartão de crédito, transferência bancária ou PIX, antes da consulta.",
              },
              {
                question:
                  "Você pode emitir receitas médicas durante o teleatendimento?",
                answer:
                  "Sim, posso emitir receitas e atestados digitais, devidamente assinados e válidos em todo o território nacional.",
              },
              {
                question:
                  "O que acontece se minha conexão cair durante a consulta?",
                answer:
                  "Se sua conexão for interrompida, entrarei em contato para retomar a consulta ou reagendá-la, conforme necessário.",
              },
              {
                question: "O teleatendimento é seguro?",
                answer:
                  "Sim, utilizo uma plataforma criptografada que garante a privacidade e a segurança de todas as informações compartilhadas.",
              },
              {
                question: "Posso solicitar uma segunda opinião médica?",
                answer:
                  "Claro! Se precisar de uma segunda opinião, terei prazer em revisar diagnósticos ou tratamentos realizados anteriormente.",
              },
              {
                question: "E se eu precisar de um exame complementar?",
                answer:
                  "Se necessário, solicitarei os exames durante a consulta e enviarei o pedido digitalmente para que você realize no local de sua preferência.",
              },
              {
                question:
                  "Há suporte técnico caso eu tenha dificuldade em acessar a consulta?",
                answer:
                  "Sim, ofereço suporte para ajudá-lo caso surja alguma dificuldade técnica antes ou durante a consulta.",
              },
            ]}
          />
        </section>
      </Container>
    </div>
  );
}
