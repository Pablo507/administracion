'use client';

import { zones } from '@/lib/properties';

export type Filters = {
  operation: 'todos' | 'alquiler' | 'venta';
  type: 'todos' | 'apartamento' | 'casa' | 'local';
  zone: string;
  sort: 'recientes' | 'precio-asc' | 'precio-desc';
};

export const defaultFilters: Filters = {
  operation: 'todos',
  type: 'todos',
  zone: 'todas',
  sort: 'recientes',
};

type Props = {
  filters: Filters;
  onChange: (f: Filters) => void;
  resultsCount: number;
};

export default function PropertyFilters({
  filters,
  onChange,
  resultsCount,
}: Props) {
  const update = <K extends keyof Filters>(key: K, value: Filters[K]) => {
    onChange({ ...filters, [key]: value });
  };

  const hasActiveFilters =
    filters.operation !== 'todos' ||
    filters.type !== 'todos' ||
    filters.zone !== 'todas';

  return (
    <div className="bg-white border border-slate-border rounded p-6 md:p-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div>
          <label className="block text-xs uppercase tracking-wider text-slate-text mb-2">
            Operación
          </label>
          <select
            value={filters.operation}
            onChange={(e) =>
              update('operation', e.target.value as Filters['operation'])
            }
            className="w-full px-3 py-2.5 border border-slate-border rounded text-navy bg-white focus:outline-none focus:border-navy"
          >
            <option value="todos">Todas</option>
            <option value="alquiler">Alquiler</option>
            <option value="venta">Venta</option>
          </select>
        </div>

        <div>
          <label className="block text-xs uppercase tracking-wider text-slate-text mb-2">
            Tipo
          </label>
          <select
            value={filters.type}
            onChange={(e) =>
              update('type', e.target.value as Filters['type'])
            }
            className="w-full px-3 py-2.5 border border-slate-border rounded text-navy bg-white focus:outline-none focus:border-navy"
          >
            <option value="todos">Todos</option>
            <option value="apartamento">Apartamento</option>
            <option value="casa">Casa</option>
            <option value="local">Local comercial</option>
          </select>
        </div>

        <div>
          <label className="block text-xs uppercase tracking-wider text-slate-text mb-2">
            Zona
          </label>
          <select
            value={filters.zone}
            onChange={(e) => update('zone', e.target.value)}
            className="w-full px-3 py-2.5 border border-slate-border rounded text-navy bg-white focus:outline-none focus:border-navy"
          >
            <option value="todas">Todas</option>
            {zones.map((z) => (
              <option key={z} value={z}>
                {z}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs uppercase tracking-wider text-slate-text mb-2">
            Ordenar por
          </label>
          <select
            value={filters.sort}
            onChange={(e) =>
              update('sort', e.target.value as Filters['sort'])
            }
            className="w-full px-3 py-2.5 border border-slate-border rounded text-navy bg-white focus:outline-none focus:border-navy"
          >
            <option value="recientes">Más recientes</option>
            <option value="precio-asc">Precio: menor a mayor</option>
            <option value="precio-desc">Precio: mayor a menor</option>
          </select>
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-slate-border flex items-center justify-between">
        <span className="text-sm text-slate-text">
          {resultsCount} {resultsCount === 1 ? 'propiedad' : 'propiedades'}
        </span>

        {hasActiveFilters && (
          <button
            onClick={() => onChange(defaultFilters)}
            className="text-sm text-gold hover:text-gold-light transition-colors"
          >
            Limpiar filtros
          </button>
        )}
      </div>
    </div>
  );
}
