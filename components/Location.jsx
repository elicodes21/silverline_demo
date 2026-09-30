import { hotel } from "@/data/hotel";

export default function Location() {
  return (
    <section id="location" className="section-shell py-8 md:py-12">
      <div className="mb-6 max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">Getting here</p>
        <h3 className="mt-2 text-3xl font-bold text-slate-900">Location and directions</h3>
      </div>

      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="space-y-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Address</p>
              <p className="mt-2 text-lg font-semibold text-slate-900">{hotel.address}</p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">From Kampala</p>
              <p className="mt-2 text-slate-700">{hotel.kampala.distance}</p>
              <p className="mt-1 text-slate-700">{hotel.kampala.travelTime}</p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">From Hoima</p>
              <p className="mt-2 text-slate-700">{hotel.hoima.distance}</p>
              <p className="mt-1 text-slate-700">{hotel.hoima.travelTime}</p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Directions</p>
              <p className="mt-2 text-slate-700">{hotel.directions}</p>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="aspect-video">
            <iframe
              title="Silverline Hotel map"
              src={hotel.googleMapsEmbedUrl}
              className="h-full w-full border-0"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
