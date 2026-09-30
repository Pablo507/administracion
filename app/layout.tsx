import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Administración de Propiedades en Montevideo | Gestión Profesional',
  description:
    'Administración de propiedades y propiedad horizontal en Montevideo. Cobranza, impuestos, mantenimiento y selección de inquilinos. Atención en español, inglés y portugués.',
  keywords: [
    'administración de propiedades',
    'administración propiedad horizontal',
    'administradores de propiedad horizontal',
    'gestión de propiedades',
    'administración de bienes inmuebles',
    'Montevideo',
  ],
  openGraph: {
    title: 'Administración de Propiedades en Montevideo',
    description:
      'Nos ocupamos de la cobranza, los impuestos, el mantenimiento y los inquilinos. Vos solo recibís el alquiler.',
    type: 'website',
    locale: 'es_UY',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}