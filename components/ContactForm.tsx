'use client';

import { useForm } from '@formspree/react';

const FORM_ID = 'mvkgdbva'; // ← reemplazar

export default function ContactForm() {
  const [state, handleSubmit] = useForm(FORM_ID);

  if (state.succeeded) {
    return (
      <section id="contacto" className="section bg-navy text-white">
        <div className="container-x max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tightest">
            ¡Gracias por contactarnos!
          </h2>
          <p className="mt-5 text-white/75 text-lg leading-relaxed">
            Recibimos tu consulta. Te vamos a responder en menos de 24 horas
            hábiles.
          </p>
          <a
            href="https://wa.me/59899123456?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20administraci%C3%B3n%20de%20propiedades"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold mt-8"
          >
            Ir a WhatsApp
          </a>
        </div>
      </section>
    );
  }

  return (
    <section id="contacto" className="section bg-navy text-white">
      <div className="container-x grid lg:grid-cols-[1fr_1.3fr] gap-16">
        <div>
          <p className="eyebrow">Contacto</p>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tightest leading-tight">
            Contanos sobre tu propiedad
          </h2>
          <p className="mt-6 text-white/70 text-lg leading-relaxed">
            Completá el formulario y te contactamos en menos de 24 horas
            hábiles con una propuesta personalizada.
          </p>
          <p className="mt-4 text-white/70 leading-relaxed">
            También podés escribirnos directamente por WhatsApp.
          </p>

          <div className="mt-12 space-y-4 text-white/80 text-sm">
            <div>📧 info@adminmontevideo.uy</div>
            <div>📱 +598 99 123 456</div>
            <div>📍 Montevideo, Uruguay</div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white text-navy rounded p-8 md:p-10"
        >
          <div className="grid md:grid-cols-2 gap-5">
            <Field label="Nombre completo *">
              <input type="text" name="name" required className="input" />
            </Field>
            <Field label="Email *">
              <input type="email" name="email" required className="input" />
            </Field>
            <Field label="Teléfono / WhatsApp *">
              <input type="tel" name="phone" required className="input" />
            </Field>
            <Field label="Tipo de propiedad *">
              <select name="propertyType" required className="input">
                <option value="">Seleccionar…</option>
                <option>Apartamento</option>
                <option>Casa</option>
                <option>Local comercial</option>
                <option>Edificio completo</option>
              </select>
            </Field>
            <Field label="Zona *" full>
              <select name="zone" required className="input">
                <option value="">Seleccionar…</option>
                <option>Pocitos</option>
                <option>Carrasco</option>
                <option>Centro</option>
                <option>Malvín</option>
                <option>Punta Carretas</option>
                <option>Otra</option>
              </select>
            </Field>
            <Field label="Mensaje (opcional)" full>
              <textarea name="message" rows={4} className="input" />
            </Field>
          </div>

          <button
            type="submit"
            disabled={state.submitting}
            className="btn-gold w-full mt-8 disabled:opacity-60"
          >
            {state.submitting ? 'Enviando…' : 'Solicitar presupuesto'}
          </button>

          {state.errors && (
            <p className="mt-4 text-sm text-red-600">
              Hubo un error al enviar. Intentá de nuevo.
            </p>
          )}
        </form>
      </div>

      <style jsx>{`
        .input {
          width: 100%;
          padding: 12px 14px;
          border: 1px solid #e8e6e1;
          border-radius: 4px;
          font-size: 15px;
          color: #0a1f33;
          background: #fafaf7;
          outline: none;
          transition: border-color 0.15s;
        }
        .input:focus {
          border-color: #0a1f33;
          background: #fff;
        }
      `}</style>
    </section>
  );
}

function Field({
  label,
  children,
  full,
}: {
  label: string;
  children: React.ReactNode;
  full?: boolean;
}) {
  return (
    <div className={full ? 'md:col-span-2' : ''}>
      <label className="block text-xs uppercase tracking-wider text-slate-text mb-2">
        {label}
      </label>
      {children}
    </div>
  );
}
