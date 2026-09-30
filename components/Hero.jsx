import Image from "next/image";
import { hotel } from "@/data/hotel";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export default function Hero() {
  const bookingUrl = buildWhatsAppUrl(
    hotel.whatsapp,
    `Hello ${hotel.name}, I would like to enquire about accommodation.`
  );

  return (
    <section id="home" className="section-shell py-8 md:py-12">
      <div className="grid gap-8 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm md:grid-cols-[1.2fr_0.8fr] md:p-3">
        <div className="flex flex-col justify-center p-6 md:p-10">
          <span className="pill-label w-fit">Demo website</span>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            {hotel.name}
          </h2>

          <p className="mt-4 text-xl font-medium text-sky-700">{hotel.tagline}</p>

          <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">{hotel.description}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={bookingUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-sky-700 px-5 py-3 font-semibold text-white transition hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
            >
              Book on WhatsApp
            </a>

            <a
              href={`tel:${hotel.phone.replace(/\s+/g, "")}`}
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-offset-2"
            >
              Call now
            </a>
          </div>
        </div>

        <div className="relative min-h-[320px] overflow-hidden rounded-[1.5rem] bg-slate-200 md:min-h-[520px]">
          <Image
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
            alt="Sample hotel exterior view"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority
          />
          <div className="absolute left-4 top-4 rounded-full border border-white/80 bg-white/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-sky-700 backdrop-blur-sm">
            Sample
          </div>
        </div>
      </div>
    </section>
  );
}
