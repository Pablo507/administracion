import Link from 'next/link';
import type { Property } from '@/lib/properties';
import { formatPrice } from '@/lib/properties';

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <Link
      href={`/propiedades/${property.slug}`}
      className="group block bg-white border border-slate-border rounded overflow-hidden hover:border-navy transition-colors"
    >
      <div
        className="aspect-[4/3] bg-cover bg-center bg-slate-border"
        style={{ backgroundImage: `url('${property.image}')` }}
      />

      <div className="p-6">
        <div className="flex items-center justify-between text-xs uppercase tracking-wider mb-3">
          <span
            className={
              property.operation === 'alquiler' ? 'text-gold' : 'text-navy'
            }
          >
            {property.operation}
          </span>
          <span className="text-slate-text">{property.zone}</span>
        </div>

        <h3 className="text-navy font-semibold tracking-tight leading-snug mb-3 group-hover:text-gold transition-colors">
          {property.title}
        </h3>

        <div className="flex items-center gap-4 text-xs text-slate-text mb-4">
          {property.bedrooms > 0 && <span>{property.bedrooms} dorm.</span>}
          <span>
            {property.bathrooms} baño{property.bathrooms > 1 ? 's' : ''}
          </span>
          <span>{property.area} m²</span>
        </div>

        <div className="text-navy text-xl font-semibold tracking-tight pt-4 border-t border-slate-border">
          {formatPrice(property.price, property.currency)}
          {property.operation === 'alquiler' && (
            <span className="text-xs text-slate-text font-normal"> /mes</span>
          )}
        </div>
      </div>
    </Link>
  );
}
