import Image from "next/image";
import Banner from "./ui/banner";
import Button from "./ui/button";
import Container from "./ui/container";

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center gap-6">
        {/* Hero Section */}
        <section
          className="grid lg:grid-cols-2 gap-6 w-full
          max-md:grid-cols-1 max-md:gap-4"
        >
          <div
            className="left w-full flex flex-col justify-center items-center p-10 min-h-168 rounded-3xl dr-pedro-bg
            max-md:p-6 max-md:min-h-0 max-md:rounded-2xl max-sm:h-[500px] max-md:h-[500px] lg:h-auto"
          >
            <div className="left-wrapper flex flex-col items-start gap-4 w-full">
              <h1 className="text-6xl font-light max-md:text-3xl max-md:text-center max-md:w-full">
                Especialista em <br className="max-md:hidden" /> saúde do
                joelho:
              </h1>
              <p className="font-bold max-md:text-base max-md:text-center max-md:w-full">
                tecnologia avançada e acolhimento{" "}
                <br className="max-md:hidden" />
                humano para devolver movimento e{" "}
                <br className="max-md:hidden" />
                qualidade de vida ao seu dia a dia.
              </p>
              <div className="max-md:w-full max-md:flex max-md:justify-center">
                <Button label="Agendar consulta" icon="arrow-top-right" />
              </div>
            </div>
          </div>

          <div
            className="right w-full flex flex-col justify-center items-center p-10 min-h-128 rounded-3xl specialist-bg
            max-md:p-6 max-md:min-h-0 max-md:rounded-2xl max-md:mt-0 max-sm:h-[500px] max-md:h-[500px] lg:h-auto"
          >
            <Button label="Dr. Pedro Henrique Paolucci" />
          </div>
        </section>

        {/* Texto de introdução */}
        <section className="py-10 max-md:py-6 max-md:px-2">
          <p className="max-md:text-base">
            O <b>joelho</b> é uma das articulações mais importantes do corpo,
            essencial para sua mobilidade e qualidade de vida. Quando surgem
            dores ou limitações, é fundamental contar com um{" "}
            <b>especialista em saúde do joelho</b> de confiança. O Dr. Pedro
            Henrique Paolucci é referência em medicina de <b>joelho</b>,
            oferecendo tratamentos modernos e personalizados para cuidar de
            forma precisa e eficaz da sua saúde.
          </p>
          <br className="max-md:hidden" />
          <p className="max-md:text-base">
            Combinando tecnologia avançada, técnicas inovadoras e uma abordagem
            acolhedora, o Dr. trabalha para aliviar suas dores, restaurar seus
            movimentos e devolver a liberdade que você merece. Aqui, seu
            bem-estar está sempre em primeiro lugar.
          </p>
        </section>

        {/* Sobre o Dr. */}
        <section
          className="grid lg:grid-cols-2 gap-6 w-full pb-10
          max-md:grid-cols-1 max-md:gap-4 max-md:pb-6"
        >
          <div
            className="left w-full flex flex-col justify-center items-center p-10 min-h-128 rounded-3xl dr-hands-bg
            max-md:p-6 max-md:min-h-70 max-md:rounded-2xl max-md-[500px]"
          ></div>
          <div
            className="right w-full flex flex-col justify-center items-center p-10 min-h-128 rounded-3xl gap-4 dr-desc-bg
            max-md:p-6 max-md:min-h-0 max-md:rounded-2xl"
          >
            <p className="max-md:text-base">
              Dr. Pedro Henrique Paolucci é ortopedista especializado em
              cirurgia de joelho, com formação pela Universidade de Brasília
              (UnB) e especialização pelo renomado Instituto de Ortopedia e
              Traumatologia do Hospital das Clínicas da USP (IOT-HCFMUSP). Sua
              trajetória combina sólida formação acadêmica e prática em um dos
              principais centros de ortopedia do país.
            </p>
            <p className="max-md:text-base">
              Atuando como ortopedista assistente no IOT-HCFMUSP, Dr. Pedro
              também é doutorando em Ciências do Sistema Musculoesquelético pela
              USP. Ele é membro titular da Sociedade Brasileira de Ortopedia e
              Traumatologia (SBOT) e da Sociedade Brasileira de Cirurgia do
              Joelho (SBCJ), reforçando seu compromisso com inovação e
              excelência.{" "}
            </p>
            <p className="max-md:text-base">
              Com ampla experiência no diagnóstico e tratamento de lesões e
              condições que afetam o joelho, o Dr. alia conhecimento técnico,
              abordagens modernas e um atendimento humanizado para garantir a
              recuperação funcional e a qualidade de vida de seus pacientes.
            </p>
            <div className="max-md:w-full max-md:flex max-md:justify-center">
              <Button label="Saiba mais" icon="arrow-top-right" />
            </div>
          </div>
        </section>

        {/* Serviços */}
        <section
          className="grid lg: grid-cols-4 gap-10 w-full pb-10
          max-md:grid-cols-1 max-md:gap-6 max-md:pb-6"
        >
          <div className="flex flex-col items-center gap-4 max-md:px-2">
            <div className="wrapper-image-service w-50 h-50 flex justify-center max-md:w-32 max-md:h-32">
              <Image
                width={120}
                height={60}
                src="/svg/convenio.svg"
                alt="Ícone de convênio"
              />
            </div>
            <strong className="text-2xl max-md:text-xl">Convênio</strong>
            <p className="text-center max-md:text-base">
              Atendimentos, incluindo <b>cirurgia de joelho</b>, são realizados
              de <b>forma particular</b>. Para facilitar, temos uma equipe
              disponível para auxiliar no processo de{" "}
              <b>reembolso para cirurgias de joelho</b>, sempre que necessário.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 max-md:px-2">
            <div className="wrapper-image-service w-50 h-50 flex justify-center max-md:w-32 max-md:h-32">
              <Image
                width={120}
                height={60}
                src="/svg/urgencias.svg"
                alt="Ícone de Urgências"
              />
            </div>
            <strong className="text-2xl max-md:text-xl">Urgências</strong>
            <p className="text-center max-md:text-base">
              Atendimentos de urgência são realizados mediante consulta
              particular no hospital. Em casos que demandem{" "}
              <b>cirurgia de joelho</b>, o procedimento segue como uma cirurgia
              eletiva, com suporte para o paciente no processo de{" "}
              <b>reembolso para cirurgias de joelho</b> junto ao convênio.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 max-md:px-2">
            <div className="wrapper-image-service w-50 h-50 flex justify-center max-md:w-32 max-md:h-32">
              <Image
                width={120}
                height={60}
                src="/svg/estrutura_hospitalar.svg"
                alt="Ícone de estrutura hospitalar"
              />
            </div>
            <strong className="text-2xl max-md:text-xl">
              Estrutura Hospitalar
            </strong>
            <p className="text-center max-md:text-base">
              Os atendimentos são realizados em parceria com algumas das
              instituições hospitalares mais renomadas do país, reconhecidas
              pela excelência em infraestrutura, tecnologia avançada em{" "}
              <b>joelho</b> e cuidado humanizado.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 max-md:px-2">
            <div className="wrapper-image-service w-50 h-50 flex justify-center max-md:w-32 max-md:h-32">
              <Image
                width={120}
                height={60}
                src="/svg/teleatendimento.svg"
                alt="Ícone de teleatendimento"
              />
            </div>
            <strong className="text-2xl max-md:text-xl">Teleatendimento</strong>
            <p className="text-center max-md:text-base">
              O <b>teleatendimento</b> é realizado de forma prática e eficiente,
              diretamente do consultório. O link da reunião pelo Google Meet é
              agendado com antecedência e enviado ao paciente por e-mail ou
              WhatsApp, garantindo uma consulta remota com toda a atenção e
              qualidade necessárias.
            </p>
          </div>
        </section>

        {/* Banner */}
        <section className="w-full pb-6 max-md:pb-4">
          <Banner
            url="/jpg/dr_knee.jpg"
            title="Ortopedista especialista em joelho: "
            subtitle="a importância da especialização"
          />
        </section>

        {/* Texto sobre especialização */}
        <section className="w-full pb-6 max-md:pb-4 max-md:px-2">
          <p className="max-md:text-base">
            Com os avanços da medicina, a especialização tornou-se
            indispensável. Na <b>ortopedia</b>, médicos com formação geral
            aprendem a diagnosticar e tratar diversas articulações, mas a
            especialização em <b>joelho</b> oferece conhecimento aprofundado
            sobre essa articulação complexa.
          </p>
          <br />
          <p className="max-md:text-base">
            Um <b>ortopedista especialista em joelho</b> está preparado para
            tratar desde lesões esportivas até condições mais graves, como
            artrose ou rupturas ligamentares, utilizando as técnicas mais
            modernas de <b>cirurgia de joelho</b>. Essa formação garante
            diagnósticos precisos e tratamentos personalizados, aumentando as
            chances de recuperação e melhoria da qualidade de vida.
          </p>
          <br />
          <p className="max-md:text-base">
            Se você busca cuidado especializado para a <b>saúde do joelho</b>,
            optar por um especialista é o caminho mais seguro e eficaz para
            voltar a se movimentar sem dores.
          </p>
        </section>

        {/* Slider */}
        <section className="w-full pb-12 max-md:pb-6">
          {/* SLIDER */}
          <div className="flex flex-wrap justify-between w-full gap- max-md:gap-3 max-md:justify-center">
            <div className="w-55 aspect-square bg-[#56a49e] rounded-3xl max-md:w-32"></div>
            <div className="w-55 aspect-square bg-[#56a49e] rounded-3xl max-md:w-32"></div>
            <div className="w-55 aspect-square bg-[#56a49e] rounded-3xl max-md:w-32"></div>
            <div className="w-55 aspect-square bg-[#56a49e] rounded-3xl max-md:w-32"></div>
            <div className="w-55 aspect-square bg-[#56a49e] rounded-3xl max-md:w-32"></div>
            <div className="w-55 aspect-square bg-[#56a49e] rounded-3xl max-md:w-32"></div>
          </div>
        </section>

        {/* Banner hospitais */}
        <section className="w-full pb-10 max-md:pb-6 ">
          <Banner url={"/jpg/dr_xray.jpg"} title="Hospitais de atuação" />
        </section>

        {/* Hospitais grid */}
        <section
          className="flex justify-between w-full gap-12 justify-between 
          max-md:flex-col max-md:gap-6"
        >
          <div
            className="w-2/5 rounded-3xl flex flex-col-reverse overflow-hidden dr-computer-bg
            max-md:w-full max-md:rounded-2xl max-md:min-h-40 max-md:h-[400px]"
          >
            <div
              className="p-8 pt-18 bg-gradient-to-t from-[#56a49e] via-[#39716d]
              max-md:p-4 max-md:pt-10"
            >
              <p className="text-white max-md:text-base">
                O Dr. Pedro Henrique Paolucci realiza seus tratamentos e
                cirurgias nos mais renomados hospitais de São Paulo - SP,
                garantindo excelência em cada etapa do atendimento.
              </p>
            </div>
          </div>
          <div
            className="grid grid-cols-4 gap-6 w-2/3
            max-md:grid-cols-2 max-md:gap-3 max-md:w-full"
          >
            <div className="aspect-square bg-[#56a49e] rounded-3xl w-full"></div>
            <div className="aspect-square bg-[#56a49e] rounded-3xl w-full"></div>
            <div className="aspect-square bg-[#56a49e] rounded-3xl w-full"></div>
            <div className="aspect-square bg-[#56a49e] rounded-3xl w-full"></div>
            <div className="aspect-square bg-[#56a49e] rounded-3xl w-full max-md:hidden"></div>
            <div className="aspect-square bg-[#56a49e] rounded-3xl w-full max-md:hidden"></div>
            <div className="aspect-square bg-[#56a49e] rounded-3xl w-full max-md:hidden"></div>
          </div>
        </section>

        {/* Contato */}
        <section className="w-full flex flex-col gap-6 pb-14 pt-10 max-md:pb-8 max-md:pt-6 max-md:px-2">
          <strong>
            <h1 className="text-3xl p-4 font-regular text-center max-md:text-2xl max-md:p-2">
              Entre em contato
            </h1>
          </strong>
          <p className="max-md:text-base">
            Com mais de 12 anos de experiência na área médica e mais de 5 anos
            dedicados à ortopedia, o Dr. Pedro Henrique Paolucci está preparado
            para oferecer um atendimento de excelência. Formado nas mais
            renomadas instituições do país e sempre atualizado em{" "}
            <b>cirurgia do joelho</b>, ele garante um tratamento de ponta,
            personalizado e seguro em cada etapa do processo.
          </p>
          <p className="max-md:text-base">
            Entre em contato agora mesmo e tenha a tranquilidade de contar com
            um profissional experiente e dedicado, pronto para cuidar da sua
            saúde com qualidade e atenção que você merece.
          </p>

          <div className="flex justify-center">
            <Button label="Agendar consulta" icon="arrow-top-right" />
          </div>
        </section>
      </div>
    </Container>
  );
}
