import Image from "next/image";
import Banner from "../ui/banner";
import Button from "../ui/button";
import Container from "../ui/container";

export default function Sobre() {
  return (
    <Container>
      <section className="w-full">
        <Banner
          bgColor="#56a49e"
          url=""
          title="Minha jornada na medicina e o compromisso com a saúde e tecnologia avançada para o joelho"
        />
      </section>
      <section className="w-full pt-12">
        <p>
          Desde pequeno, eu sabia que seria médico. Minha maior inspiração veio
          de dentro de casa: minha mãe, pediatra, cuja dedicação, cuidado e
          atenção a cada paciente sempre me encantaram. Nascido e criado em
          Brasília, iniciei minha jornada na{" "}
          <b>Universidade de Brasília (UnB)</b>, onde me formei em medicina.
          Desde os primeiros anos da faculdade, sentia o desejo de expandir meus
          horizontes e buscar experiências além da minha cidade.
        </p>
        <br />
        <p>
          Apaixonado por esportes, no 4º ano da faculdade, tive a oportunidade
          de estudar por 1 ano em Londres, na
          <b>Brunel University</b>, durante uma graduação em Ciências do
          Esporte. Esse período foi transformador para minha formação, pois
          aprendi sobre fisiologia do esporte e biomecânica, conhecimentos que
          hoje utilizo para entender a mobilidade das articulações e os
          movimentos do corpo, fundamentais na <b>saúde do joelho</b>.
        </p>
        <br />
        <p>
          De volta ao Brasil, foi durante o internato cirúrgico que tive a
          certeza: eu queria ser ortopedista. Após concluir a faculdade, servi
          por 1 ano como Tenente da Marinha do Brasil, atuando como médico
          militar no
          <b>Hospital das Forças Armadas em Brasília</b>. Essa experiência
          fortaleceu minha disciplina e compromisso com a excelência no cuidado
          médico.
        </p>
        <br />
        <p>
          Determinado a buscar a melhor formação possível, ingressei na
          residência de <b>ortopedia e traumatologia</b> no
          <b>
            Instituto de Ortopedia e Traumatologia do Hospital das Clínicas da
            Faculdade de Medicina da USP (IOT-HCFMUSP).
          </b>
          Ao final, fui o primeiro colocado geral da minha turma e atuei por 2
          anos como preceptor da residência, uma experiência enriquecedora que
          reforçou minha paixão por ensino e pesquisa.
        </p>
        <br />
        <p>
          Minha especialização em <b>cirurgia de joelho</b> também aconteceu no
          IOT, onde tive o privilégio de aprender com os melhores cirurgiões de{" "}
          <b>joelho</b> do Brasil. Ao final da formação, fiquei entre os 10
          primeiros colocados na prova da{" "}
          <b>Sociedade Brasileira de Cirurgia do Joelho (SBCJ).</b>
        </p>
        <br />
        <p>
          Hoje, sou médico assistente em ortopedia e traumatologia no Hospital
          das Clínicas e doutorando em Ciências Musculoesqueléticas pela USP.
          Minha pesquisa explora os efeitos ortobiológicos da câmara hiperbárica
          na reconstrução do <b>ligamento cruzado anterior</b>, unindo ciência e{" "}
          <b>tecnologia avançada em joelho</b> para oferecer o que há de mais
          moderno em diagnóstico e tratamento de lesões do joelho.
        </p>
        <br />
        <p>
          Meu compromisso é oferecer um atendimento completo, que vai desde a{" "}
          <b>consulta particular para joelho</b> até o acompanhamento do{" "}
          <b>processo de reembolso para cirurgias de joelho</b>, sempre com foco
          em soluções personalizadas e no que há de mais inovador em{" "}
          <b>tratamento moderno para joelho</b>.
        </p>
      </section>
      <section className="py-12 text-white">
        <div className="p-12 py-18 bg-[#56a49e] flex gap-12 rounded-4xl">
          <div className="left w-1/3">
            <p className="text-5xl font-bold">
              Saúde do joelho: <br />a importância de cuidar dessa articulação
            </p>
          </div>
          <div className="right w-2/3 flex flex-col items-start gap-12">
            <p className="text-base md:text-lg lg:text-xl">
              O <strong>joelho</strong> é uma articulação essencial para a mobilidade e qualidade
              de vida dos seres humanos. Com uma estrutura complexa, ele nos
              permite realizar desde atividades básicas, como caminhar, até
              movimentos mais exigentes, como correr, agachar ou subir escadas.
              Um <strong>joelho saudável</strong>, livre de dores, é fundamental para que
              possamos aproveitar ao máximo nosso dia a dia. Quando há dores ou
              limitações, a qualidade de vida é diretamente impactada. É
              importante lembrar que sentir dor no joelho não é normal. Caso
              você esteja enfrentando esse problema, marque uma consulta para
              recuperar sua
            </p>
            <Button label="Agendar consulta" icon="arrow-top-right" />
          </div>
        </div>
      </section>
      <section className="w-full flex flex-col items-center">
        <strong>
          <h1 className="text-3xl p-4 font-regular text-center text-[#56a49e]">
            Estruturas do joelho: uma máquina perfeita
          </h1>
        </strong>

        <p className="text-left">
          O <b>joelho</b> é composto por diversas estruturas que trabalham em
          harmonia para garantir o bom funcionamento dessa articulação complexa.
          Conheça as principais partes que compõem o <b>joelho</b>:
        </p>

        <div className=" bg-red-500 rounded-4xl overflow-hidden my-16">
          <Image
            width={600}
            height={600}
            src="/jpg/two_knees.jpg"
            alt="Imagem de Joelhos"
          />
        </div>

        {/* INTERATIVO */}
      </section>
      <section className="w-full flex flex-col items-center pb-36 ">
        <strong>
          <h1 className="text-3xl p-4 font-regular text-center text-[#56a49e]">
            Cuidando da Saúde do Joelho
          </h1>
        </strong>

        <p className="w-full">
          A <b>saúde do joelho</b> depende do bom funcionamento de cada uma
          dessas estruturas. Dores ou limitações podem ter diferentes causas,
          desde lesões agudas até condições degenerativas. Tratamentos modernos
          e personalizados, como os que utilizam
          <b>
            tecnologia avançada no diagnóstico e tratamento de lesões do joelho
          </b>
          , são essenciais para restaurar a mobilidade e a qualidade de vida.
          <br />
          Se você sente dores ou dificuldades para realizar suas atividades
          diárias, agende uma consulta particular para avaliação e tratamento do
          joelho. Caso necessário, nossa equipe também auxilia no{" "}
          <b>processo de reembolso para cirurgias de joelho</b>, garantindo
          tranquilidade e suporte em todas as etapas.
        </p>
        <br />
        <p className="w-full pb-16">
          Invista na sua saúde e viva sem dores no joelho!
        </p>

        <Button label="Agendar consulta" icon="arrow-top-right" />
      </section>
    </Container>
  );
}
