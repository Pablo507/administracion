'use client';

import { useEffect, useState } from 'react';

type Props = {
  images: string[];
  title: string;
};

export default function PropertyGallery({ images, title }: Props) {
  const [active, setActive] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [zoomed, setZoomed] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const next = () =>
    setActive((i) => (i + 1) % images.length);
  const prev = () =>
    setActive((i) => (i - 1 + images.length) % images.length);

  const closeLightbox = () => {
    setLightboxOpen(false);
    setZoomed(false);
  };

  // Teclado: Escape cierra, flechas navegan
  useEffect(() => {
    if (!lightboxOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lightboxOpen, images.length]);

  // Bloquear scroll del body cuando el lightbox está abierto
  useEffect(() => {
    document.body.style.overflow = lightboxOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [lightboxOpen]);

  // Resetear el zoom al cambiar de imagen
  useEffect(() => {
    setZoomed(false);
  }, [active]);

  if (!images || images.length === 0) return null;

  // Swipe táctil
  const onTouchStart = (e: React.TouchEvent) => {
    if (zoomed) return;
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };
  const onTouchMove = (e: React.TouchEvent) => {
    if (zoomed) return;
    setTouchEnd(e.targetTouches[0].clientX);
  };
  const onTouchEnd = () => {
    if (zoomed || !touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) next();
    if (distance < -50) prev();
  };

  return (
    <>
      <div className="mb-10">
        {/* Imagen grande: clic abre el lightbox */}
        <button
          type="button"
          onClick={() => setLightboxOpen(true)}
          className="group relative block w-full aspect-[16/9] bg-cover bg-center bg-slate-border rounded overflow-hidden cursor-zoom-in"
          style={{ backgroundImage: `url('${images[active]}')` }}
          aria-label={`Ampliar imagen ${active + 1} de ${images.length}`}
        >
          <span className="absolute bottom-4 right-4 bg-black/60 text-white text-xs px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            🔍 Ampliar
          </span>
        </button>

        {/* Miniaturas */}
        {images.length > 1 && (
          <div className="mt-4 grid grid-cols-4 md:grid-cols-6 gap-3">
            {images.map((img, i) => (
              <button
                key={img}
                type="button"
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

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* Contador */}
          <div className="absolute top-5 left-5 z-20 text-white/80 text-sm bg-black/40 px-3 py-1.5 rounded">
            {active + 1} / {images.length}
          </div>

          {/* Zoom */}
          <button
            type="button"
            onClick={() => setZoomed(!zoomed)}
            className="absolute top-4 right-20 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center text-2xl leading-none"
            aria-label={zoomed ? 'Alejar' : 'Acercar'}
          >
            {zoomed ? '−' : '+'}
          </button>

          {/* Cerrar */}
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center text-3xl leading-none"
            aria-label="Cerrar"
          >
            ×
          </button>

          {/* Flecha izquierda */}
          {images.length > 1 && (
            <button
              type="button"
              onClick={prev}
              className="absolute left-2 md:left-6 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center text-4xl leading-none select-none"
              aria-label="Anterior"
            >
              ‹
            </button>
          )}

          {/* Imagen */}
          <div
            className={`w-full h-full flex items-center justify-center p-4 md:p-16 ${
              zoomed ? 'overflow-auto' : 'overflow-hidden'
            }`}
          >
            <img
              src={images[active]}
              alt={`${title} - Imagen ${active + 1}`}
              onClick={() => setZoomed(!zoomed)}
              className={
                zoomed
                  ? 'max-w-none max-h-none w-[200%] md:w-[150%] cursor-zoom-out select-none'
                  : 'max-w-full max-h-full object-contain cursor-zoom-in select-none'
              }
              draggable={false}
            />
          </div>

          {/* Flecha derecha */}
          {images.length > 1 && (
            <button
              type="button"
              onClick={next}
              className="absolute right-2 md:right-6 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center text-4xl leading-none select-none"
              aria-label="Siguiente"
            >
              ›
            </button>
          )}

          {/* Miniaturas inferiores (solo si hay más de 1) */}
          {images.length > 1 && (
            <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center gap-2 px-4 overflow-x-auto">
              {images.map((img, i) => (
                <button
                  key={img}
                  type="button"
                  onClick={() => setActive(i)}
                  className={`w-14 h-14 shrink-0 bg-cover bg-center rounded border-2 transition-all ${
                    active === i
                      ? 'border-gold opacity-100'
                      : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                  style={{ backgroundImage: `url('${img}')` }}
                  aria-label={`Ver imagen ${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}