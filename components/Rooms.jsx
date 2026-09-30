import Image from "next/image";
import { hotel } from "@/data/hotel";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export default function Rooms() {
  return (
    <section id="rooms" className="section-shell py-8 md:py-12">
      <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">Rooms</p>
          <h3 className="mt-2 text-3xl font-bold text-slate-900">Sample room options</h3>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {hotel.rooms.map((room) => (
          <article
            key={room.name}
            className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
          >
            <div className="relative h-56 overflow-hidden bg-slate-200">
              <Image
                src={room.image}
                alt={room.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                className="object-cover"
              />
              {room.placeholder ? (
                <span className="absolute left-3 top-3 rounded-full border border-white/80 bg-white/80 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-sky-700 backdrop-blur-sm">
                  Sample
                </span>
              ) : null}
            </div>

            <div className="p-5">
              <div className="mb-3 flex items-start justify-between gap-3">
                <h4 className="text-xl font-semibold text-slate-900">{room.name}</h4>
                {room.placeholder ? (
                  <span className="shrink-0 rounded-full border border-sky-200 bg-sky-50 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-sky-700">
                    Sample
                  </span>
                ) : null}
              </div>

              <p className="text-sm leading-6 text-slate-600">{room.description}</p>

              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {room.amenities.map((item, index) => (
                  <li key={`${room.name}-${item}-${index}`} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-700" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex items-center justify-between gap-3">
                <span className="text-lg font-bold text-sky-700">UGX {room.price.toLocaleString()}</span>
                <a
                  href={buildWhatsAppUrl(
                    hotel.whatsapp,
                    `Hello ${hotel.name}, I would like to book a ${room.name}. Check-in: __ Check-out: __ Guests: __`
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-sky-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
                >
                  Book this room
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
