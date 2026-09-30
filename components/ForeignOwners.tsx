const bullets = [
  'Atención en español, inglés y portugués',
  'Reportes mensuales por email con todos los movimientos',
  'Gestión completa de impuestos y obligaciones ante la DGI',
  'Coordinación de mantenimiento con proveedores de confianza',
  'Transferencias internacionales del neto del alquiler',
];

export default function ForeignOwners() {
  return (
    <section className="section bg-white border-y border-slate-border">
      <div className="container-x grid lg:grid-cols-2 gap-16 items-center">
        <div
          className="aspect-[4/3] bg-cover bg-center rounded"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51?auto=format&fit=crop&w=1400&q=80')",
          }}
        />
        <div>
          <p className="eyebrow">Propietarios en el exterior</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tightest leading-tight">
            ¿Vivís fuera de Uruguay y tenés una propiedad en Montevideo?
          </h2>
          <p className="mt-6 text-slate-text text-lg leading-relaxed">
            Sabemos lo difícil que es gestionar una propiedad a distancia. Por
            eso ofrecemos un servicio pensado para propietarios que están en el
            exterior.
          </p>

          <ul className="mt-8 space-y-4">
            {bullets.map((b) => (
              <li key={b} className="flex gap-4">
                <span className="text-gold mt-1 shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12l5 5L20 7" />
                  </svg>
                </span>
                <span className="text-navy leading-relaxed">{b}</span>
              </li>
            ))}
          </ul>

          <a href="#contacto" className="btn-primary mt-10">
            Agendar una llamada
          </a>
        </div>
      </div>
    </section>
  );
}
