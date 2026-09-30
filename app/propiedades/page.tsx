import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import PropertiesList from '@/components/PropertiesList';

export const metadata: Metadata = {
  title: 'Propiedades en alquiler y venta | AdminMontevideo',
  description:
    'Propiedades en alquiler y venta en Montevideo. Apartamentos, casas y locales administrados por nuestro equipo. Filtrá por zona, tipo y precio.',
};

export default function PropertiesPage() {
  return (
    <>
      <Header />

      <main className="pt-20">
        <section className="bg-navy text-white py-24">
          <div className="container-x">
            <p className="eyebrow">Portafolio</p>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight max-w-3xl">
              Propiedades en Montevideo
            </h1>
            <p className="mt-6 text-white/75 text-lg max-w-2xl leading-relaxed">
              Apartamentos, casas y locales en alquiler y venta administrados
              por nuestro equipo.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container-x">
            <PropertiesList />
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
