import Image from "next/image";
import { hotel } from "@/data/hotel";

export default function Gallery() {
  return (
    <section id="gallery" className="section-shell py-8 md:py-12">
      <div className="mb-6 max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">Gallery</p>
        <h3 className="mt-2 text-3xl font-bold text-slate-900">A few sample property images</h3>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {hotel.gallery.map((image) => (
          <div key={image.alt} className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="relative h-64 overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                className="object-cover transition duration-300 group-hover:scale-105"
                loading="lazy"
              />
              {image.placeholder ? (
                <span className="absolute left-3 top-3 rounded-full border border-white/80 bg-white/80 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-sky-700 backdrop-blur-sm">
                  Sample
                </span>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
