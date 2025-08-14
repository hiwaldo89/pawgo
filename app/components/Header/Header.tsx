"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../Button";
import Container from "../Container";
import { useAuth } from "@/app/hooks/useAuth";
import { useModal } from "@/app/hooks/useModal";

const menuItems = [
  { text: "Blog", url: "blog" },
  { text: "Preguntas frecuentes", url: "preguntas-frecuentes" },
  { text: "Soporte", url: "soporte" },
];

const Header: React.FC = () => {
  const { user } = useAuth();
  const { openModal } = useModal();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-white py-[18px] drop-shadow-md">
      <Container className="flex items-center justify-between">
        <Link href="/">
          <Image src="/logo.svg" alt="PawGo" width={110} height={32} />
        </Link>

        {/* Desktop menu */}
        <nav className="hidden md:flex items-center gap-[28px]">
          <ul className="flex gap-[28px]">
            {menuItems.map(({ text, url }) => (
              <li key={`desktop-${url}`}>
                <Link href={`/${url}`} className="cta">
                  {text}
                </Link>
              </li>
            ))}
            {!!user && (
              <li>
                <Link href="/mi-cuenta" className="cta text-lavander underline">
                  Mi cuenta
                </Link>
              </li>
            )}
          </ul>
          {!user && (
            <Button
              onClick={() => openModal("login")}
              className="cursor-pointer"
            >
              Iniciar sesión
            </Button>
          )}
        </nav>

        {/* Mobile hamburger button */}
        <button
          className="md:hidden p-2 rounded-md border border-gray-300"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span className="block w-5 h-0.5 bg-gray-700 mb-1"></span>
          <span className="block w-5 h-0.5 bg-gray-700 mb-1"></span>
          <span className="block w-5 h-0.5 bg-gray-700"></span>
        </button>
      </Container>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 mt-[18px]">
          <ul className="flex flex-col gap-4 p-4">
            {menuItems.map(({ text, url }) => (
              <li key={`mobile-${url}`}>
                <Link
                  href={`/${url}`}
                  className="cta block"
                  onClick={() => setMobileOpen(false)}
                >
                  {text}
                </Link>
              </li>
            ))}
            {!!user && (
              <li>
                <Link
                  href="/mi-cuenta"
                  className="cta text-lavander underline block"
                  onClick={() => setMobileOpen(false)}
                >
                  Mi cuenta
                </Link>
              </li>
            )}
            {!user && (
              <li>
                <Button
                  onClick={() => {
                    openModal("login");
                    setMobileOpen(false);
                  }}
                  className="cursor-pointer w-full"
                >
                  Iniciar sesión
                </Button>
              </li>
            )}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
