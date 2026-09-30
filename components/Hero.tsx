export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[90vh] flex items-center bg-navy overflow-hidden"
    >
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1589909202802-8f4aadce1849?auto=format&fit=crop&w=2000&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/40" />

      <div className="container-x relative pt-32 pb-24">
        <p className="eyebrow">Montevideo · Costa de Oro · Punta del Este</p>

        <h1 className="text-white text-4xl md:text-6xl font-semibold tracking-tightest leading-[1.05] max-w-4xl">
          Administración de propiedades en Montevideo, sin complicaciones
        </h1>

        <p className="mt-6 text-white/80 text-lg md:text-xl max-w-2xl leading-relaxed">
          Nos ocupamos de la cobranza, los impuestos, el mantenimiento y los
          inquilinos. Vos solo recibís el alquiler en tu cuenta.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a href="#contacto" className="btn-gold">
            Solicitar presupuesto
          </a>
          <a
            href="https://wa.me/59899123456?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20administraci%C3%B3n%20de%20propiedades"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center border border-white/30 text-white px-6 py-3 rounded font-medium hover:bg-white/10 transition-colors"
          >
            Hablar por WhatsApp
          </a>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl border-t border-white/15 pt-8">
          {[
            ['+50', 'Propiedades administradas'],
            ['7% + IVA', 'Comisión sobre cobrado'],
            ['ES / EN / PT', 'Atención multilingüe'],
          ].map(([k, v]) => (
            <div key={k}>
              <div className="text-white text-2xl font-semibold tracking-tight">{k}</div>
              <div className="text-white/60 text-sm mt-1">{v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
