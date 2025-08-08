import Button from "../ui/button";
import Container from "../ui/container";
import Faq from "../ui/faq";

export default function Contato() {
  return (
    <Container>

      <section className="w-full bg-emerald-950 rounded-2xl mb-12 overflow-hidden">
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex-shrink-0 w-full md:w-4/10 h-full flex justify-center man-couch-bg lg:h-140 max-md:h-50">
            
          </div>

          <div
            className="w-full md:w-6/10 text-white flex flex-col lg:items-start lg:text-left lg:gap-10 md:items-start  md:text-left max-md:gap-4 gap-4 max-md:text-left items-start  p-12
          "
          >
            <p className="lg:text-7xl max-md:text-2xl text-2xl font-bold text-[#00a59f] leading-tight">
              Você está a um passo
              <br /> de transformar a sua
              <br /> qualidade de vida
            </p>
            <p className="lg:text-2xl max-md:text-2xl text-2xl">
              Comece a cuidar do seu joelho <br /> agora mesmo
            </p>
            <Button
              label="Agendar consulta"
              icon="arrow-top-right"
              type="submit"
            />
          </div>
        </div>
      </section>

      <section className="w-full">
        <p className="md:text-base px-8">
          Não deixe que problemas no joelho limitem suas atividades diárias.
          Agende uma consulta e descubra como tratamentos modernos e tecnologia
          avançada podem fazer a diferença na sua vida. Seja para diagnósticos
          precisos, cirurgias de joelho ou acompanhamento de reembolso, estou
          aqui para ajudar você a retomar sua rotina com confiança.
        </p>
      </section>

      <section className="w-full flex flex-col justify-center mb-10">
        <h1 className="text-4xl text-center p-16 text-[#00726d]">
          <strong>Por que agendar uma consulta comigo?</strong>
        </h1>

        <div className="flex flex-col justify-center items-center">
          <ul className=" md:text-base lg:pl-10 md:px-6 md:list-disc">
            <li>
              <b>Diagnóstico e tratamento especializado:</b> tecnologia avançada
              em joelho para identificar e tratar a causa do problema.
            </li>
            <li>
              <b>Experiência e dedicação:</b> com anos de atuação e pesquisa na
              área, ofereço um atendimento humanizado e focado nas suas
              necessidades.
            </li>
            <li>
              <b>Soluções personalizadas:</b> cada caso é único, e meu objetivo
              é encontrar o melhor caminho para sua recuperação.
            </li>
          </ul>
        </div>
      </section>

      <section className="w-full bg-emerald-950 rounded-2xl mb-12 overflow-hidden">
      <div className="flex flex-col md:flex-row items-center">
          <div className="flex-shrink-0 w-full md:w-4/10 h-full flex justify-center man-cellphone-bg lg:h-140 max-md:h-50">
            
          </div>

          <div
            className="w-full md:w-6/10 text-white flex flex-col lg:items-start lg:text-left lg:gap-10 md:items-start  md:text-left max-md:gap-4 gap-4 max-md:text-left items-start p-12
          "
          >
            <p className="lg:text-7xl max-md:text-2xl text-2xl font-bold text-[#00a59f] leading-tight">
              Como entrar em contato?
            </p>
            <p className="lg:text-5xl max-md:text-2xl text-2xl">
              WhatsApp:{" "}
              <span className="font-bold text-white">(11) 99983-1998</span>
            </p>
            <p className="lg:text-2xl max-md:text-2xl text-2xl">
              Clique abaixo para iniciar uma conversa agora mesmo
            </p>
            <Button
              label="Agendar consulta"
              icon="arrow-top-right"
              type="submit"
            />
          </div>
        </div>
      </section>

      <section className="w-full">
        <h2 className="text-center pb-16 text-3xl font-bold w-2/3 m-auto text-[#00726d] md:text-2xl lg:px-20 lg:pb-16 md:w-full">
          Ou, se preferir, preencha o formulário abaixo e encaminhe <br />
          sua mensagem diretamente ao meu e-mail.
        </h2>

        {/* 👌👌👌👌👌👌👌👌👌👌👌👌👌👌👌👌👌👌👌👌👌👌👌👌👌👌👌👌👌 */}
        <div className="flex flex-col md:flex-col lg:flex-row max-md:px-10 lg:px-30 py-10 gap-10 ">
          <div className="w-full lg:w-1/2 ">
            <form className="flex flex-col gap-4">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col md:flex-col gap-4">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1 flex flex-col">
                      <label className="pl-4 md:pl-2" htmlFor="name">
                        Nome:
                      </label>
                      <input
                        className="p-4 rounded-4xl bg-black text-white md:p-3"
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Nome completo..."
                      />
                    </div>
                    <div className="flex-1 flex flex-col">
                      <label className="pl-4 md:pl-2" htmlFor="email">
                        E-mail:
                      </label>
                      <input
                        className="p-4 rounded-4xl bg-black text-white md:p-3"
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Endereço de e-mail..."
                      />
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1 flex flex-col">
                      <label className="pl-4 md:pl-2" htmlFor="phone">
                        Celular:
                      </label>
                      <input
                        className="p-4 rounded-4xl bg-black text-white md:p-3"
                        type="text"
                        name="phone"
                        id="phone"
                        placeholder="Número com DDD:"
                      />
                    </div>
                    <div className="flex-1 flex flex-col">
                      <label className="pl-4 md:pl-2" htmlFor="message">
                        Mensagem
                      </label>
                      <input
                        className="p-4 rounded-4xl bg-black text-white md:p-3"
                        type="text"
                        name="message"
                        id="message"
                        placeholder="Escreva alguma solicitação..."
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-1 flex flex-col">
                <label className="pl-4 md:pl-2" htmlFor="notes">
                  Informações adicionais ou observações
                </label>
                <textarea
                  className="bg-black text-white rounded-2xl h-42 p-4 md:p-3 md:h-32"
                  name="notes"
                  id="notes"
                ></textarea>
              </div>

              <Button
                label="Enviar mensagem"
                icon="arrow-top-right"
                type="submit"
              />
            </form>
          </div>

          {/* Segundo filho com mesma largura */}
          <div className="w-full lg:w-1/2 bg-green-500 dr-computer-bg rounded-3xl overflow-hidden">
            {/* Conteúdo adicional aqui */}
          </div>
        </div>
      </section>
      <section className="pb-18 max-md:w-6/6 lg:w-3/6 m-auto md:w-full md:px-2  ">
        <Faq
          data={[
            {
              question: "Como faço para agendar uma consulta?",
              answer:
                "Você pode agendar sua consulta diretamente pelo WhatsApp (11) 99983-1998, enviando um e-mail para pedro.paolucci@hc.fm.usp.br, ou preenchendo o formulário de contato disponível nesta página.",
            },
            {
              question: "Qual é o melhor horário para entrar em contato?",
              answer:
                "Estou disponível para agendamentos e dúvidas de segunda a sexta-feira, das 9h às 18h. Mensagens enviadas fora desse horário serão respondidas o mais breve possível no próximo dia útil.",
            },
            {
              question:
                "Posso marcar uma consulta mesmo se não tiver os exames completos?",
              answer:
                "Sim! Na consulta inicial, avalio seu caso e, se necessário, solicito os exames complementares para um diagnóstico mais preciso.",
            },
            {
              question: "Como funciona o atendimento pelo WhatsApp?",
              answer:
                "No WhatsApp, você pode esclarecer dúvidas rápidas, obter informações sobre horários disponíveis e concluir o agendamento da consulta de forma prática e segura.",
            },
            {
              question: "O formulário de contato é seguro?",
              answer:
                "Sim, todas as informações enviadas pelo formulário são protegidas e usadas exclusivamente para responder sua mensagem e agendar sua consulta.",
            },
            {
              question: "E se eu tiver uma emergência relacionada ao joelho?",
              answer:
                "Em casos de emergência, recomendo procurar imediatamente um pronto-socorro ortopédico para avaliação e atendimento imediato. Após a estabilização do quadro, você pode agendar uma consulta para acompanhamento e tratamento especializado.",
            },
          ]}
        />
      </section>
    </Container>
  );
}
