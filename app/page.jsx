import Header from "@/components/Header";
import Hero from "@/components/Hero";

import Contact from "@/components/Contact";
import Events from "@/components/Events";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Location from "@/components/Location";
import Restaurant from "@/components/Restaurant";
import Rooms from "@/components/Rooms";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Rooms />
      <Events />
      <Restaurant />
      <Gallery />
      <Location />
      <Contact />
      <Footer />
    </main>
  );
}
