'use client';

import { useEffect, useState } from 'react';

const links = [
  { href: '/propiedades', label: 'Propiedades' },
  { href: '/#servicios', label: 'Servicios' },
  { href: '/#proceso', label: 'Cómo trabajamos' },
  { href: '/#calculadora', label: 'Calculadora' },
  { href: '/#faq', label: 'Preguntas' },
  { href: '/#contacto', label: 'Contacto' },
];
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-navy/95 backdrop-blur shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container-x flex items-center justify-between h-20">
        <a
          href="#top"
          className={`font-semibold tracking-tight text-lg ${
            scrolled ? 'text-white' : 'text-white'
          }`}
        >
          Admin<span className="text-gold">Montevideo</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-white/85 hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contacto"
          className="hidden md:inline-flex items-center bg-gold text-white text-sm px-5 py-2.5 rounded hover:bg-gold-light transition-colors"
        >
          Solicitar presupuesto
        </a>

        <button
          aria-label="Menú"
          onClick={() => setOpen(!open)}
          className="md:hidden text-white p-2"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-navy border-t border-white/10">
          <nav className="container-x flex flex-col py-4 gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-white/85 hover:text-white text-sm"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="bg-gold text-white text-sm px-5 py-2.5 rounded text-center"
            >
              Solicitar presupuesto
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

