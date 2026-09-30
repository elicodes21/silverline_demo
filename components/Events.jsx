import { hotel } from "@/data/hotel";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export default function Events() {
  return (
    <section id="events" className="section-shell py-8 md:py-12">
      <div className="mb-6 max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">Events & conferences</p>
        <h3 className="mt-2 text-3xl font-bold text-slate-900">Weddings, meetings, and private gatherings</h3>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        {hotel.eventPackages.map((eventPackage) => (
          <article
            key={eventPackage.name}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="mb-4 flex items-start justify-between gap-3">
              <h4 className="text-2xl font-semibold text-slate-900">{eventPackage.name}</h4>
              {eventPackage.placeholder ? (
                <span className="shrink-0 rounded-full border border-sky-200 bg-sky-50 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-sky-700">
                  Sample
                </span>
              ) : null}
            </div>

            <p className="text-sm leading-6 text-slate-600">{eventPackage.description}</p>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl bg-slate-50 p-3">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Capacity</p>
                <p className="mt-2 text-sm font-medium text-slate-800">{eventPackage.capacity}</p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-3">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Catering</p>
                <p className="mt-2 text-sm font-medium text-slate-800">{eventPackage.catering}</p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-3">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Sound system</p>
                <p className="mt-2 text-sm font-medium text-slate-800">{eventPackage.soundSystem}</p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-3">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Accommodation</p>
                <p className="mt-2 text-sm font-medium text-slate-800">{eventPackage.accommodationBundle}</p>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">Request a quote</p>
        <h4 className="mt-2 text-2xl font-bold text-slate-900">Tell us about your event</h4>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
          Sample event information is shown here. Replace it with confirmed venue details and packages later.
        </p>

        <a
          href={buildWhatsAppUrl(
            hotel.whatsapp,
            `Hello ${hotel.name}, I would like to request a quote for an event. Event type: __ Date: __ Number of guests: __ Additional details: __`
          )}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex items-center justify-center rounded-full bg-sky-700 px-5 py-3 font-semibold text-white transition hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
        >
          Request a quote
        </a>
      </div>
    </section>
  );
}
