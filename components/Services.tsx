const services = [
  {
    title: 'Selección de inquilinos',
    description:
      'Analizamos garantías, antecedentes y capacidad de pago antes de firmar. Reducimos el riesgo de morosidad desde el primer día.',
  },
  {
    title: 'Cobranza y depósito',
    description:
      'Cobramos el alquiler todos los meses y depositamos el neto en tu cuenta. Sin que tengas que perseguir a nadie.',
  },
  {
    title: 'Pago de impuestos',
    description:
      'Retenemos y pagamos IRPF/IRNR ante la DGI, Contribución Inmobiliaria e Impuesto de Enseñanza Primaria. Cumplimiento garantizado.',
  },
  {
    title: 'Reajustes y contratos',
    description:
      'Aplicamos los reajustes anuales según la ley vigente y gestionamos el cierre del contrato con revisión de inventario.',
  },
  {
    title: 'Propiedad horizontal',
    description:
      'Administramos gastos comunes, coordinamos asambleas y controlamos el cumplimiento de las obligaciones del edificio.',
  },
  {
    title: 'Mantenimiento',
    description:
      'Coordinamos reparaciones, proveedores y urgencias edilicias. Tu propiedad siempre en condiciones.',
  },
];

export default function Services() {
  return (
    <section id="servicios" className="section">
      <div className="container-x">
        <div className="max-w-2xl mb-16">
          <p className="eyebrow">Servicios</p>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tightest leading-tight">
            Todo lo que hacemos por tu propiedad
          </h2>
          <p className="mt-5 text-slate-text text-lg leading-relaxed">
            Nos encargamos de cada etapa del alquiler para que no tengas que
            ocuparte de nada.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-border border border-slate-border">
          {services.map((s, i) => (
            <div key={s.title} className="bg-cream p-8 md:p-10">
              <div className="text-gold text-sm font-medium mb-6">
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 className="text-xl font-semibold tracking-tight mb-3">
                {s.title}
              </h3>
              <p className="text-slate-text leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
