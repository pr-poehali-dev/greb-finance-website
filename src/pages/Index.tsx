import Navbar from "@/components/sections/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import TeachersSection from "@/components/sections/TeachersSection";
import ArticlesContacts from "@/components/sections/ArticlesContacts";
import { NAV_ITEMS } from "@/components/sections/data";
import { scrollToSection } from "@/components/sections/hooks";

function Footer() {
  return (
    <footer
      className="py-10 px-6 border-t"
      style={{ background: "#070f22", borderColor: "rgba(201,168,76,0.1)" }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="font-bold text-xl tracking-widest" style={{ color: "var(--gold)" }}>
            ГЕРБ
          </span>
          <span style={{ color: "rgba(255,255,255,0.15)" }}>|</span>
          <span className="text-sm" style={{ color: "rgba(255,255,255,0.35)" }}>
            Проект участников Сириус 55
          </span>
        </div>

        <nav className="flex flex-wrap justify-center gap-5">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className="text-xs transition-colors"
              style={{ color: "rgba(255,255,255,0.35)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.7)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.35)";
              }}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="text-center md:text-right">
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.2)" }}>
            © 2026 ГЕРБ • Сириус 55
          </p>
          <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.12)" }}>
            Деньги знать — не стыдно 💛
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function Index() {
  return (
    <div className="min-h-screen font-montserrat" style={{ background: "var(--cream)" }}>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TeachersSection />
      <ArticlesContacts />
      <Footer />
    </div>
  );
}