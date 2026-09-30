const garantias = [
  'ANDA',
  'Contaduría General de la Nación',
  'Seguros de alquiler',
  'Garantía propietaria',
];

export default function TrustBar() {
  return (
    <section className="border-y border-slate-border bg-white">
      <div className="container-x py-10">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-slate-text mb-6">
          Trabajamos con las principales garantías de alquiler del país
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
          {garantias.map((g) => (
            <span
              key={g}
              className="text-navy/70 text-sm font-medium tracking-tight"
            >
              {g}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
