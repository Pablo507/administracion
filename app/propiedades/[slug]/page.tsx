import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { properties, formatPrice } from '@/lib/properties';

type Params = { slug: string };

export function generateStaticParams() {
  return properties.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const property = properties.find((p) => p.slug === slug);
  if (!property) return { title: 'Propiedad no encontrada' };

  return {
    title: `${property.title} | AdminMontevideo`,
    description: property.description.slice(0, 155),
  };
}

export default async function PropertyPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const property = properties.find((p) => p.slug === slug);

  if (!property) notFound();

  const whatsappText = encodeURIComponent(
    `Hola, me interesa la propiedad "${property.title}" (${property.slug})`
  );
  const whatsappUrl = `https://wa.me/59899123456?text=${whatsappText}`;

  return (
    <>
      <Header />

      <main className="pt-20">
        <div className="container-x py-8">
          <Link
            href="/propiedades"
            className="text-sm text-slate-text hover:text-navy"
          >
            ← Volver a propiedades
          </Link>
        </div>

        <section className="container-x pb-16">
          <div
            className="aspect-[16/9] bg-cover bg-center bg-slate-border rounded mb-10"
            style={{ backgroundImage: `url('${property.image}')` }}
          />

          <div className="grid lg:grid-cols-[2fr_1fr] gap-16">
            <div>
              <div className="flex items-center gap-4 text-xs uppercase tracking-wider mb-4">
                <span
                  className={
                    property.operation === 'alquiler'
                      ? 'text-gold'
                      : 'text-navy'
                  }
                >
                  {property.operation}
                </span>
                <span className="text-slate-text">{property.zone}</span>
              </div>

              <h1 className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight">
                {property.title}
              </h1>

              <div className="mt-6 flex flex-wrap gap-6 text-sm text-slate-text border-y border-slate-border py-4">
                {property.bedrooms > 0 && (
                  <span>{property.bedrooms} dormitorios</span>
                )}
                <span>
                  {property.bathrooms} baño
                  {property.bathrooms > 1 ? 's' : ''}
                </span>
                <span>{property.area} m²</span>
              </div>

              <div className="mt-8">
                <h2 className="text-sm uppercase tracking-wider text-slate-text mb-4">
                  Descripción
                </h2>
                <p className="text-navy leading-relaxed text-lg">
                  {property.description}
                </p>
              </div>
            </div>

            <aside className="lg:sticky lg:top-28 h-fit bg-white border border-slate-border rounded p-8">
              <div className="text-xs uppercase tracking-wider text-slate-text mb-2">
                {property.operation === 'alquiler'
                  ? 'Alquiler mensual'
                  : 'Precio de venta'}
              </div>
              <div className="text-3xl font-semibold tracking-tight text-navy">
                {formatPrice(property.price, property.currency)}
              </div>

              <div className="mt-8 space-y-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold w-full"
                >
                  Consultar por WhatsApp
                </a>
                <a href="/#contacto" className="btn-outline w-full">
                  Solicitar visita
                </a>
              </div>

              <p className="mt-6 text-xs text-slate-text leading-relaxed">
                Respondemos en menos de 24 horas hábiles. Atendemos en español,
                inglés y portugués.
              </p>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}

