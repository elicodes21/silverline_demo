import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Silverline Hotel | Kiboga, Uganda",
  description: "Demo pitch website for Silverline Hotel in Kiboga, Uganda.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${manrope.className} bg-stone-50 text-slate-800 antialiased`}>
        {children}
      </body>
    </html>
  );
}
