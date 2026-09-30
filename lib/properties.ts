export type Operation = 'alquiler' | 'venta';
export type PropertyType = 'apartamento' | 'casa' | 'local';

export type Property = {
  slug: string;
  title: string;
  operation: Operation;
  type: PropertyType;
  zone: string;
  price: number;
  currency: 'USD' | 'UYU';
  bedrooms: number;
  bathrooms: number;
  area: number;
  image: string;
  description: string;
  featured?: boolean;
};

export const properties: Property[] = [
  {
    slug: 'apartamento-pocitos-2dorm',
    title: 'Apartamento 2 dormitorios en Pocitos',
    operation: 'alquiler',
    type: 'apartamento',
    zone: 'Pocitos',
    price: 28000,
    currency: 'UYU',
    bedrooms: 2,
    bathrooms: 1,
    area: 75,
    image:
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80',
    description:
      'Luminoso apartamento a 2 cuadras de la Rambla. Living comedor amplio, cocina equipada, dos dormitorios con placard y balcón. Edificio con portería.',
    featured: true,
  },
  {
    slug: 'casa-carrasco-4dorm',
    title: 'Casa 4 dormitorios en Carrasco',
    operation: 'venta',
    type: 'casa',
    zone: 'Carrasco',
    price: 385000,
    currency: 'USD',
    bedrooms: 4,
    bathrooms: 3,
    area: 280,
    image:
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80',
    description:
      'Casa sobre parcela de 800 m² con jardín, piscina y parrillero. Amplios ambientes, suite principal con vestidor, dependencia de servicio y garaje para 3 autos.',
    featured: true,
  },
  {
    slug: 'apartamento-punta-carretas-1dorm',
    title: 'Monoambiente en Punta Carretas',
    operation: 'alquiler',
    type: 'apartamento',
    zone: 'Punta Carretas',
    price: 19500,
    currency: 'UYU',
    bedrooms: 1,
    bathrooms: 1,
    area: 42,
    image:
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
    description:
      'Monoambiente reciclado a nuevo en zona inmejorable. Cocina integrada, baño completo, aire acondicionado. Ideal para una persona o pareja.',
  },
  {
    slug: 'local-comercial-centro',
    title: 'Local comercial en Centro',
    operation: 'alquiler',
    type: 'local',
    zone: 'Centro',
    price: 45000,
    currency: 'UYU',
    bedrooms: 0,
    bathrooms: 1,
    area: 90,
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    description:
      'Local a la calle con vidriera amplia sobre 18 de Julio. Ideal para retail o gastronomía. Cuenta con depósito y baño.',
  },
  {
    slug: 'apartamento-malvin-3dorm',
    title: 'Apartamento 3 dormitorios en Malvín',
    operation: 'venta',
    type: 'apartamento',
    zone: 'Malvín',
    price: 195000,
    currency: 'USD',
    bedrooms: 3,
    bathrooms: 2,
    area: 120,
    image:
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80',
    description:
      'Apartamento en edificio moderno a 1 cuadra de la playa. Tres dormitorios, dos baños, cocina definida, lavadero y garaje.',
    featured: true,
  },
  {
    slug: 'casa-centro-3dorm',
    title: 'Casa 3 dormitorios en Centro',
    operation: 'alquiler',
    type: 'casa',
    zone: 'Centro',
    price: 52000,
    currency: 'UYU',
    bedrooms: 3,
    bathrooms: 2,
    area: 160,
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    description:
      'Casa antigua reciclada con patio interno. Tres dormitorios, dos baños, living con estufa a leña y cocina office.',
  },
  {
    slug: 'apartamento-cordon-2dorm',
    title: 'Apartamento 2 dormitorios en Cordón',
    operation: 'alquiler',
    type: 'apartamento',
    zone: 'Cordón',
    price: 25000,
    currency: 'UYU',
    bedrooms: 2,
    bathrooms: 1,
    area: 68,
    image:
      'https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1200&q=80',
    description:
      'Apartamento en edificio con ascensor, a pasos de la Universidad. Muy luminoso, cocina reformada, living comedor con balcón.',
  },
  {
    slug: 'casa-punta-gorda-5dorm',
    title: 'Casa 5 dormitorios en Punta Gorda',
    operation: 'venta',
    type: 'casa',
    zone: 'Punta Gorda',
    price: 620000,
    currency: 'USD',
    bedrooms: 5,
    bathrooms: 4,
    area: 420,
    image:
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
    description:
      'Impresionante residencia con vista al río. Cinco dormitorios, cuatro baños, doble living, jardín con piscina y garaje para 4 autos.',
    featured: true,
  },
  {
    slug: 'apartamento-buceo-2dorm',
    title: 'Apartamento 2 dormitorios en Buceo',
    operation: 'alquiler',
    type: 'apartamento',
    zone: 'Buceo',
    price: 32000,
    currency: 'UYU',
    bedrooms: 2,
    bathrooms: 2,
    area: 85,
    image:
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80',
    description:
      'Apartamento a estrenar en zona de Puerto del Buceo. Dos dormitorios, dos baños, cocina integrada y balcón terraza con parrillero.',
  },
  {
    slug: 'local-pocitos-gastronomico',
    title: 'Local gastronómico en Pocitos',
    operation: 'alquiler',
    type: 'local',
    zone: 'Pocitos',
    price: 68000,
    currency: 'UYU',
    bedrooms: 0,
    bathrooms: 2,
    area: 130,
    image:
      'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=80',
    description:
      'Local equipado para gastronomía con cocina instalada, salón para 40 comensales y depósito. Plena zona comercial de Pocitos.',
  },
  {
    slug: 'apartamento-carrasco-3dorm',
    title: 'Apartamento 3 dormitorios en Carrasco',
    operation: 'venta',
    type: 'apartamento',
    zone: 'Carrasco',
    price: 285000,
    currency: 'USD',
    bedrooms: 3,
    bathrooms: 2,
    area: 145,
    image:
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    description:
      'Apartamento en torre de categoría con amenities. Tres dormitorios, dos baños, dos cocheras y baulera. Vista abierta al golf.',
  },
  {
    slug: 'casa-prado-3dorm',
    title: 'Casa 3 dormitorios en Prado',
    operation: 'alquiler',
    type: 'casa',
    zone: 'Prado',
    price: 48000,
    currency: 'UYU',
    bedrooms: 3,
    bathrooms: 2,
    area: 170,
    image:
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80',
    description:
      'Casa de estilo sobre calle arbolada. Tres dormitorios, dos baños, living con hogar, jardín y garaje. A metros del Parque del Prado.',
  },
];

export const zones = Array.from(new Set(properties.map((p) => p.zone))).sort();

export function formatPrice(price: number, currency: string) {
  return `${currency} ${price.toLocaleString('es-UY')}`;
}
