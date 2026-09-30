'use client';

import { useMemo, useState } from 'react';

export default function Calculator() {
  const [rent, setRent] = useState<string>('');

  const { commission, net } = useMemo(() => {
    const value = parseFloat(rent.replace(',', '.')) || 0;
    const c = value * 0.07 * 1.22;
    return { commission: c, net: value - c };
  }, [rent]);

  const fmt = (n: number) =>
    n.toLocaleString('es-UY', { maximumFractionDigits: 0 });

  return (
    <section id="calculadora" className="section">
      <div className="container-x grid lg:grid-cols-2 gap-16 items-start">
        <div>
          <p className="eyebrow">Calculadora</p>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tightest leading-tight">
            Calculá cuánto te costaría la administración
          </h2>
          <p className="mt-6 text-slate-text text-lg leading-relaxed">
            Nuestra comisión es del <strong className="text-navy">7% + IVA</strong>{' '}
            sobre el alquiler cobrado. Sin costos ocultos, sin cargos por
            publicación ni por visita.
          </p>
          <p className="mt-4 text-slate-text leading-relaxed">
            Si el alquiler no se cobra, no cobramos comisión.
          </p>
        </div>

        <div className="bg-white border border-slate-border rounded p-8 md:p-10">
          <label
            htmlFor="rent"
            className="block text-sm font-medium text-navy mb-3"
          >
            Alquiler mensual (UYU)
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-text">
              $
            </span>
            <input
              id="rent"
              type="text"
              inputMode="numeric"
              value={rent}
              onChange={(e) => setRent(e.target.value)}
              placeholder="30.000"
              className="w-full pl-8 pr-4 py-4 border border-slate-border rounded text-lg focus:outline-none focus:border-navy"
            />
          </div>

          <div className="mt-8 space-y-4 border-t border-slate-border pt-6">
            <div className="flex justify-between items-baseline">
              <span className="text-slate-text">Comisión estimada</span>
              <span className="text-navy font-medium">
                $ {fmt(commission)}
              </span>
            </div>
            <div className="flex justify-between items-baseline">
              <span className="text-slate-text">Neto que recibís</span>
              <span className="text-navy text-2xl font-semibold tracking-tight">
                $ {fmt(net)}
              </span>
            </div>
          </div>

          <p className="mt-6 text-xs text-slate-text">
            * Cálculo aproximado. El IVA aplicable es del 22%.
          </p>
        </div>
      </div>
    </section>
  );
}
