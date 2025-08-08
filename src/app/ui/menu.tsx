
"use client";

import Container from "@/app/ui/container";
import { useState } from "react";
import Button from "./button";

export function Menu() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [submenuAberto, setSubmenuAberto] = useState(false);

  const linkClasses =
    "block p-3 hover:bg-[#bbb] rounded-full transition-colors duration-200";
  const sublinkClasses =
    "block p-3 hover:bg-[#eee] transition-colors duration-200";

  // Fecha o menu ao clicar em um link (mobile)
  function handleLinkClick() {
    setMenuAberto(false);
    setSubmenuAberto(false);
  }

  return (
    <Container>
      <nav className="flex items-center justify-between p-2 my-6 bg-[#C6E7E7] rounded-full relative">
        <Button
          label="Dr. Pedro Paolucci"
          link="/"
          italic={true}
          bold={true}
        />

        {/* Botão Hamburguer - aparece em md e abaixo */}
        <button
          className="md:flex lg:hidden  flex-col justify-center items-center w-10 h-10 rounded-full hover:bg-[#b0dede] transition-colors "
          aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
          onClick={() => setMenuAberto((aberto) => !aberto)}
        >
          <span
            className={`block h-0.5 w-6 bg-black transition-all duration-300 ${
              menuAberto ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          <span
            className={`block h-0.5 w-6 bg-black my-1 transition-all duration-300 ${
              menuAberto ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block h-0.5 w-6 bg-black transition-all duration-300 ${
              menuAberto ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </button>

        {/* Menu Desktop - aparece apenas em lg e acima */}
        <ul className="hidden lg:flex font-semibold">
          <li>
            <a href="/sobre" className={linkClasses}>
              Sobre
            </a>
          </li>
          <li className="relative group">
            <a
              href="#"
              className={linkClasses}
              onClick={(e) => e.preventDefault()}
            >
              Lesões e Tratamentos
            </a>
            <ul className="absolute w-full z-10 left-0 hidden group-hover:block bg-white shadow-lg rounded-md overflow-hidden min-w-[180px]">
              <li>
                <a
                  href="/lesoes-e-tratamentos/menisco"
                  className={sublinkClasses}
                >
                  Menisco
                </a>
              </li>
              <li>
                <a
                  href="/lesoes-e-tratamentos/lca"
                  className={sublinkClasses}
                >
                  LCA
                </a>
              </li>
              <li>
                <a
                  href="/lesoes-e-tratamentos/artrose"
                  className={sublinkClasses}
                >
                  Artrose
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/consultas-e-reembolsos" className={linkClasses}>
              Consultas e Reembolsos
            </a>
          </li>
          <li>
            <a href="/teleatendimento" className={linkClasses}>
              Teleatendimento
            </a>
          </li>
          <li>
            <a href="/contato" className={linkClasses}>
              Contato
            </a>
          </li>
        </ul>

        {/* Botão Desktop - aparece apenas em lg e acima */}
        <div className="hidden lg:block">
          <Button label="Agendar consulta" icon="arrow-top-right" />
        </div>

        {/* Menu Mobile/Tablet - aparece em md e abaixo */}
        {menuAberto && (
          <div className="fixed inset-0 z-50 bg-black/40 md:flex lg:hidden" onClick={() => setMenuAberto(false)}>
            <div
              className="absolute top-0 right-0 w-84 h-full bg-[#C6E7E7] shadow-lg flex flex-col p-6 gap-2"
              onClick={(e) => e.stopPropagation()}
            >
              <ul className="flex flex-col font-semibold gap-1">
                <li>
                  <a
                    href="/sobre"
                    className={linkClasses}
                    onClick={handleLinkClick}
                  >
                    Sobre
                  </a>
                </li>
                <li>
                  <button
                    className={`${linkClasses} w-full text-left flex items-center justify-between`}
                    onClick={() => setSubmenuAberto((aberto) => !aberto)}
                    aria-expanded={submenuAberto}
                  >
                    Lesões e Tratamentos
                    <span className="ml-2">
                      {submenuAberto ? "▲" : "▼"}
                    </span>
                  </button>
                  {submenuAberto && (
                    <ul className="ml-4 mt-1 bg-white rounded-md shadow-inner">
                      <li>
                        <a
                          href="/lesoes-e-tratamentos/menisco"
                          className={sublinkClasses}
                          onClick={handleLinkClick}
                        >
                          Menisco
                        </a>
                      </li>
                      <li>
                        <a
                          href="/lesoes-e-tratamentos/lca"
                          className={sublinkClasses}
                          onClick={handleLinkClick}
                        >
                          LCA
                        </a>
                      </li>
                      <li>
                        <a
                          href="/lesoes-e-tratamentos/artrose"
                          className={sublinkClasses}
                          onClick={handleLinkClick}
                        >
                          Artrose
                        </a>
                      </li>
                    </ul>
                  )}
                </li>
                <li>
                  <a
                    href="/consultas-e-reembolsos"
                    className={linkClasses}
                    onClick={handleLinkClick}
                  >
                    Consultas e Reembolsos
                  </a>
                </li>
                <li>
                  <a
                    href="/teleatendimento"
                    className={linkClasses}
                    onClick={handleLinkClick}
                  >
                    Teleatendimento
                  </a>
                </li>
                <li>
                  <a
                    href="/contato"
                    className={linkClasses}
                    onClick={handleLinkClick}
                  >
                    Contato
                  </a>
                </li>
              </ul>
              <div className="mt-4">
                <Button
                  label="Agendar consulta"
                  icon="arrow-top-right"
                  onClick={handleLinkClick}
                />
              </div>
            </div>
          </div>
        )}
      </nav>
    </Container>
  );
}

export default Menu;
