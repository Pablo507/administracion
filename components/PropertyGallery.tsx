'use client';

import { useState } from 'react';

type Props = {
  images: string[];
  title: string;
};

export default function PropertyGallery({ images, title }: Props) {
  const [active, setActive] = useState(0);

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="mb-10">
      <div
        className="aspect-[16/9] bg-cover bg-center bg-slate-border rounded overflow-hidden"
        style={{ backgroundImage: `url('${images[active]}')` }}
        aria-label={`${title} - Imagen ${active + 1}`}
      />

      {images.length > 1 && (
        <div className="mt-4 grid grid-cols-4 md:grid-cols-6 gap-3">
          {images.map((img, i) => (
            <button
              key={img}
              onClick={() => setActive(i)}
              className={`aspect-square bg-cover bg-center rounded border-2 transition-colors ${
                active === i
                  ? 'border-gold'
                  : 'border-transparent hover:border-slate-border'
              }`}
              style={{ backgroundImage: `url('${img}')` }}
              aria-label={`Ver imagen ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}