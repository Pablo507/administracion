'use client';

import { useMemo, useState } from 'react';
import { properties } from '@/lib/properties';
import PropertyCard from './PropertyCard';
import PropertyFilters, {
  defaultFilters,
  type Filters,
} from './PropertyFilters';

export default function PropertiesList() {
  const [filters, setFilters] = useState<Filters>(defaultFilters);

  const filtered = useMemo(() => {
    let result = properties.filter((p) => {
      if (filters.operation !== 'todos' && p.operation !== filters.operation)
        return false;
      if (filters.type !== 'todos' && p.type !== filters.type) return false;
      if (filters.zone !== 'todas' && p.zone !== filters.zone) return false;
      return true;
    });

    if (filters.sort === 'precio-asc') {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (filters.sort === 'precio-desc') {
      result = [...result].sort((a, b) => b.price - a.price);
    }

    return result;
  }, [filters]);

  return (
    <>
      <PropertyFilters
        filters={filters}
        onChange={setFilters}
        resultsCount={filtered.length}
      />

      {filtered.length === 0 ? (
        <div className="mt-12 text-center py-16 bg-white border border-slate-border rounded">
          <p className="text-navy text-lg font-medium mb-2">
            No encontramos propiedades con esos criterios
          </p>
          <p className="text-slate-text text-sm mb-6">
            Probá cambiar los filtros o limpiar la búsqueda.
          </p>
          <button
            onClick={() => setFilters(defaultFilters)}
            className="btn-outline"
          >
            Limpiar filtros
          </button>
        </div>
      ) : (
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((p) => (
            <PropertyCard key={p.slug} property={p} />
          ))}
        </div>
      )}
    </>
  );
}
