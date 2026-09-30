const faqs = [
  {
    q: '¿Qué zonas cubren?',
    a: 'Cubrimos todo Montevideo, además de Costa de Oro y Punta del Este. Si tu propiedad está fuera de estas zonas, consultanos igual.',
  },
  {
    q: '¿Cuánto cobran de comisión?',
    a: 'El 7% + IVA sobre el alquiler efectivamente cobrado. No cobramos por publicación, visitas ni por la firma del contrato.',
  },
  {
    q: '¿Qué pasa si el inquilino no paga?',
    a: 'Activamos el proceso de intimación y, si corresponde, iniciamos el reclamo judicial. Te mantenemos informado en cada etapa. Nuestra comisión solo se cobra sobre lo que efectivamente se cobra.',
  },
  {
    q: '¿Quién se encarga de los impuestos?',
    a: 'Nosotros. Retenemos y pagamos IRPF/IRNR ante la DGI, Contribución Inmobiliaria e Impuesto de Enseñanza Primaria en los plazos correspondientes.',
  },
  {
    q: '¿Puedo administrar mi propiedad si vivo en el exterior?',
    a: 'Sí, es uno de nuestros servicios más solicitados. Trabajamos con propietarios en Estados Unidos, Europa y otros países de la región. Toda la comunicación es por email y WhatsApp.',
  },
  {
    q: '¿Cuál es el plazo mínimo de contrato?',
    a: 'Los contratos de alquiler en Uruguay tienen un plazo mínimo de 2 años para vivienda, según la ley vigente. Nosotros gestionamos todo el ciclo, desde la firma hasta el cierre.',
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="section">
      <div className="container-x grid lg:grid-cols-[1fr_2fr] gap-16">
        <div>
          <p className="eyebrow">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tightest leading-tight">
            Preguntas frecuentes
          </h2>
        </div>

        <div className="divide-y divide-slate-border border-y border-slate-border">
          {faqs.map((f) => (
            <details key={f.q} className="group py-6">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <span className="text-navy font-medium pr-6">{f.q}</span>
                <span className="text-gold transition-transform group-open:rotate-45 shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 text-slate-text leading-relaxed pr-10">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
