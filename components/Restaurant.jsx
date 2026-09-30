import Image from "next/image";
import { hotel } from "@/data/hotel";

export default function Restaurant() {
  return (
    <section id="restaurant" className="section-shell py-8 md:py-12">
      <div className="mb-6 max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">Restaurant & Bar</p>
        <h3 className="mt-2 text-3xl font-bold text-slate-900">Simple sample menu</h3>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {hotel.restaurantMenu.map((item) => (
          <article
            key={item.name}
            className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
          >
            <div className="relative h-44 overflow-hidden bg-slate-200">
              <Image
                src={item.image}
                alt={item.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                className="object-cover"
              />
              {item.placeholder ? (
                <span className="absolute left-3 top-3 rounded-full border border-white/80 bg-white/80 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-sky-700 backdrop-blur-sm">
                  Sample
                </span>
              ) : null}
            </div>

            <div className="p-5">
              <div className="mb-3 flex items-start justify-between gap-3">
                <h4 className="text-xl font-semibold text-slate-900">{item.name}</h4>
                {item.placeholder ? (
                  <span className="shrink-0 rounded-full border border-sky-200 bg-sky-50 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-sky-700">
                    Sample
                  </span>
                ) : null}
              </div>

              <p className="text-sm leading-6 text-slate-600">{item.description}</p>

              <div className="mt-4 flex items-center justify-between gap-3 border-t border-slate-200 pt-3">
                <span className="text-base font-semibold text-sky-700">UGX {item.price.toLocaleString()}</span>
                {item.placeholder ? (
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Sample price
                  </span>
                ) : null}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
