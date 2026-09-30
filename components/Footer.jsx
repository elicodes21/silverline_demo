import { hotel } from "@/data/hotel";

export default function Footer() {
  const navItems = [
    { label: "About", href: "#about" },
    { label: "Rooms", href: "#rooms" },
    { label: "Events", href: "#events" },
    { label: "Gallery", href: "#gallery" },
    { label: "Location", href: "#location" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-200">
      <div className="section-shell py-10 md:py-12">
        <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr_1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">{hotel.shortName}</p>
            <h3 className="mt-3 text-2xl font-bold text-white">{hotel.name}</h3>
            <p className="mt-3 max-w-md text-sm leading-6 text-slate-300">{hotel.tagline}</p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">Explore</p>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="transition hover:text-white">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">Contact</p>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li>{hotel.phone}</li>
              <li>{hotel.email}</li>
              <li>{hotel.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-700 pt-5 text-sm text-slate-400">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p>Demo website by Elisa</p>
            <p>Demo website — information, images and prices shown may be placeholders pending confirmation by Silverline Hotel.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
