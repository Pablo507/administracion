import Link from 'next/link';
import { properties } from '@/lib/properties';
import PropertyCard from './PropertyCard';

export default function Properties() {
  const featured = properties.filter((p) => p.featured).slice(0, 3);

  return (
    <section id="propiedades" className="section">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <p className="eyebrow">Propiedades</p>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight">
              Propiedades en alquiler y venta
            </h2>
            <p className="mt-5 text-slate-text text-lg leading-relaxed">
              Una selección de propiedades que administramos actualmente en
              Montevideo.
            </p>
          </div>

          <Link href="/propiedades" className="btn-outline shrink-0">
            Ver todas las propiedades
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((p) => (
            <PropertyCard key={p.slug} property={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
