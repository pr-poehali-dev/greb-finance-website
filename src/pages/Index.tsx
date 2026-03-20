import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/sections/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import TeachersSection from "@/components/sections/TeachersSection";
import ServicesSection from "@/components/sections/ServicesSection";
import SecuritySection from "@/components/sections/SecuritySection";
import ContactsSection from "@/components/sections/ContactsSection";
import { NAV_ITEMS } from "@/components/sections/data";
import { scrollToSection } from "@/components/sections/hooks";
import Icon from "@/components/ui/icon";

function FallingCoins() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [coins, setCoins] = useState<
    { id: number; x: number; delay: number; duration: number; size: number }[]
  >([]);

  useEffect(() => {
    const generated = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 8,
      duration: 6 + Math.random() * 6,
      size: 10 + Math.random() * 14,
    }));
    setCoins(generated);
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-40 overflow-hidden"
    >
      {coins.map((c) => (
        <div
          key={c.id}
          className="absolute opacity-[0.06]"
          style={{
            left: `${c.x}%`,
            top: "-30px",
            fontSize: `${c.size}px`,
            animation: `coinFall ${c.duration}s linear ${c.delay}s infinite`,
          }}
        >
          <Icon name="Coins" size={c.size} style={{ color: "var(--gold)" }} />
        </div>
      ))}
    </div>
  );
}

function Footer() {
  const [count] = useState(() => 2048 + Math.floor(Math.random() * 100));

  return (
    <footer
      className="py-10 px-6 border-t"
      style={{ background: "#070f22", borderColor: "rgba(201,168,76,0.1)" }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <Icon name="Shield" size={20} style={{ color: "var(--gold)" }} />
          <span
            className="font-cormorant font-bold text-lg"
            style={{ color: "var(--gold)" }}
          >
            Сириус 55
          </span>
        </div>

        <nav className="flex flex-wrap justify-center gap-5">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className="text-xs transition-colors hover:text-white/70"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="text-center md:text-right">
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
            &copy; Сириус 55 — финансовая грамотность, 2026. Все права защищены, деньги
            припрятаны.
          </p>
          <p
            className="text-xs mt-1"
            style={{ color: "rgba(255,255,255,0.15)" }}
          >
            <Icon name="Users" size={10} className="inline mr-1 -mt-0.5" />
            Нас посетило {count} человек и 3 финансово грамотных кота.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function Index() {
  return (
    <div
      className="min-h-screen font-montserrat"
      style={{ background: "var(--cream)" }}
    >
      <FallingCoins />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TeachersSection />
      <ServicesSection />
      <SecuritySection />
      <ContactsSection />
      <Footer />
    </div>
  );
}