import { hotel } from "@/data/hotel";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export default function Contact() {
  return (
    <section id="contact" className="section-shell py-8 md:py-12">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <div className="mb-6 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">Contact</p>
          <h3 className="mt-2 text-3xl font-bold text-slate-900">Book or make an enquiry</h3>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-2xl bg-slate-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Phone</p>
            <a
              href={`tel:${hotel.phone.replace(/\s+/g, "")}`}
              className="mt-2 block text-base font-semibold text-slate-800 hover:text-sky-700"
            >
              {hotel.phone}
            </a>
          </div>

          <div className="rounded-2xl bg-slate-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">WhatsApp</p>
            <a
              href={buildWhatsAppUrl(hotel.whatsapp, `Hello ${hotel.name}, I would like to enquire.`)}
              target="_blank"
              rel="noreferrer"
              className="mt-2 block text-base font-semibold text-slate-800 hover:text-sky-700"
            >
              {hotel.whatsapp}
            </a>
          </div>

          <div className="rounded-2xl bg-slate-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Email</p>
            <a href={`mailto:${hotel.email}`} className="mt-2 block text-base font-semibold text-slate-800 hover:text-sky-700">
              {hotel.email}
            </a>
          </div>

          <div className="rounded-2xl bg-slate-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Address</p>
            <p className="mt-2 text-base font-semibold text-slate-800">{hotel.address}</p>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a
            href={`tel:${hotel.phone.replace(/\s+/g, "")}`}
            className="inline-flex items-center justify-center rounded-full bg-sky-700 px-5 py-3 font-semibold text-white transition hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
          >
            Call now
          </a>
          <a
            href={buildWhatsAppUrl(
              hotel.whatsapp,
              `Hello ${hotel.name}, I would like to book a room or enquire about availability.`
            )}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-offset-2"
          >
            Book on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
