import Container from "@/app/ui/container";
import "../globals.css";

export function Footer() {
  return (
    <footer className="w-full bg-footer p-12 border-t-6 border-[#bbb] text-white text-xs">
      <Container>
        <div className="flex flex-col md:flex-row justify-between bg-footer gap-4">
          <div className="text-gray-500 md:text-center text-center">
            © 2025 Dr. Pedro Henrique Paolucci. Todos os direitos reservados.
          </div>

          <div className="text-white font-bold text-center">
            Dr. Pedro Henrique Paolucci
          </div>

          <div className="text-center md:text-right text-white font-bold">
            <div className="inline-flex flex-col items-center md:items-end">
              <span>pedro.paolucci@hc.fm.usp.br</span>
              <span>11 999831998</span>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
