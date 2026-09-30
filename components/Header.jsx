import { hotel } from "@/data/hotel";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export default function Header() {
  const bookingUrl = buildWhatsAppUrl(
    hotel.whatsapp,
    `Hello ${hotel.name}, I would like to enquire about accommodation.`
  );

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Rooms", href: "#rooms" },
    { label: "Events", href: "#events" },
    { label: "Location", href: "#location" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-sm">
      <div className="section-shell">
        <div className="flex items-center justify-between gap-4 py-4">
          <a href="#home" className="block shrink-0">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-sky-700">
              {hotel.shortName}
            </p>
            <h1 className="text-lg font-bold text-slate-900">{hotel.name}</h1>
          </a>

          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-sky-700">
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href={bookingUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-sky-700 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
          >
            Book on WhatsApp
          </a>
        </div>

        <nav className="flex overflow-x-auto pb-3 md:hidden">
          <div className="flex min-w-max gap-2 text-sm font-medium text-slate-700">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 whitespace-nowrap transition hover:border-sky-200 hover:text-sky-700"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
