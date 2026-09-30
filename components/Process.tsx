const steps = [
  {
    title: 'Evaluación inicial',
    description:
      'Visitamos tu propiedad, evaluamos su estado y te proponemos un valor de alquiler realista según el mercado actual.',
  },
  {
    title: 'Publicación y selección',
    description:
      'Publicamos en los principales portales y filtramos candidatos con garantía verificada.',
  },
  {
    title: 'Contrato y mudanza',
    description:
      'Redactamos el contrato, hacemos el inventario y acompañamos la mudanza del inquilino.',
  },
  {
    title: 'Gestión mensual',
    description:
      'Cobramos, pagamos impuestos, coordinamos mantenimiento y te transferimos el neto todos los meses.',
  },
];

export default function Process() {
  return (
    <section id="proceso" className="section bg-navy text-white">
      <div className="container-x">
        <div className="max-w-2xl mb-16">
          <p className="eyebrow">Proceso</p>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tightest leading-tight">
            Cómo trabajamos
          </h2>
          <p className="mt-5 text-white/70 text-lg leading-relaxed">
            Un proceso claro, sin sorpresas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((s, i) => (
            <div key={s.title} className="border-t border-white/15 pt-6">
              <div className="text-gold text-sm font-medium mb-6">
                Paso {String(i + 1).padStart(2, '0')}
              </div>
              <h3 className="text-lg font-semibold tracking-tight mb-3">
                {s.title}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                {s.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <a href="#contacto" className="btn-gold">
            Quiero empezar
          </a>
        </div>
      </div>
    </section>
  );
}
