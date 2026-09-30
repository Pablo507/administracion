export default function Footer() {
  return (
    <footer className="bg-navy text-white/70">
      <div className="container-x py-16 grid md:grid-cols-3 gap-12">
        <div>
          <div className="text-white font-semibold text-lg">
            Admin<span className="text-gold">Montevideo</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed max-w-xs">
            Gestión profesional de propiedades en Montevideo, Costa de Oro y
            Punta del Este.
          </p>
        </div>

        <div>
          <div className="text-white text-sm font-medium mb-5">Enlaces</div>
          <ul className="space-y-3 text-sm">
            <li><a href="#servicios" className="hover:text-white">Servicios</a></li>
            <li><a href="#proceso" className="hover:text-white">Cómo trabajamos</a></li>
            <li><a href="#calculadora" className="hover:text-white">Calculadora</a></li>
            <li><a href="#faq" className="hover:text-white">Preguntas frecuentes</a></li>
            <li><a href="#contacto" className="hover:text-white">Contacto</a></li>
          </ul>
        </div>

        <div>
          <div className="text-white text-sm font-medium mb-5">Contacto</div>
          <ul className="space-y-3 text-sm">
            <li>info@adminmontevideo.uy</li>
            <li>+598 99 123 456</li>
            <li>Montevideo, Uruguay</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x py-6 flex flex-col md:flex-row justify-between gap-3 text-xs">
          <span>© {new Date().getFullYear()} AdminMontevideo. Todos los derechos reservados.</span>
          <span>Aviso legal · Política de privacidad</span>
        </div>
      </div>
    </footer>
  );
}
