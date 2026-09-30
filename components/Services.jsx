import { hotel } from "@/data/hotel";

const iconLabels = {
  CarFront: "Park",
  Wifi: "Wi‑Fi",
  BatteryCharging: "Batt",
  ShieldCheck: "Shield",
};

export default function Services() {
  return (
    <section id="about" className="section-shell py-8 md:py-12">
      <div className="mb-6 max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">Why stay with us</p>
        <h3 className="mt-2 text-3xl font-bold text-slate-900">Simple comforts for practical travelers</h3>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {hotel.services.map((service) => {
          const iconText = iconLabels[service.icon] || service.icon || "★";

          return (
            <article
              key={service.name}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 px-1 text-center text-[11px] font-bold uppercase leading-none tracking-tight text-sky-700">
                {iconText}
              </div>

              <div className="mb-3 flex items-start justify-between gap-3">
                <h4 className="text-xl font-semibold text-slate-900 break-words">{service.name}</h4>
                {service.placeholder ? (
                  <span className="shrink-0 rounded-full border border-sky-200 bg-sky-50 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-sky-700">
                    Sample
                  </span>
                ) : null}
              </div>

              <p className="text-sm leading-6 text-slate-600">{service.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
