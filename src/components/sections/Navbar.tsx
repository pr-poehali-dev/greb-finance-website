import { useState } from "react";
import Icon from "@/components/ui/icon";
import { NAV_ITEMS } from "./data";
import { useNavScroll, scrollToSection } from "./hooks";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useNavScroll();

  const handleNav = (href: string) => {
    setMenuOpen(false);
    scrollToSection(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-xl py-2" : "py-4"
      }`}
      style={{
        background: scrolled ? "rgba(10,20,50,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <button
          onClick={() => handleNav("#home")}
          className="flex items-center gap-3 group"
        >
          <Icon
            name="Shield"
            size={28}
            className="transition-all group-hover:scale-110"
            style={{ color: "var(--gold)" }}
          />
          <div className="flex flex-col">
            <span
              className="font-cormorant font-bold text-lg leading-tight tracking-wide"
              style={{ color: "var(--gold)" }}
            >
              Герб финансовой грамотности
            </span>
            <span
              className="text-[10px] tracking-widest uppercase hidden sm:block"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              Символ разумного подхода к деньгам
            </span>
          </div>
        </button>

        <nav className="hidden lg:flex items-center gap-5">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNav(item.href)}
              className="nav-link text-sm font-medium tracking-wide transition-colors hover:text-white"
              style={{ color: "rgba(255,255,255,0.75)" }}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          className="hidden lg:flex items-center gap-2 text-sm font-bold px-5 py-2 rounded-full transition-all hover:scale-105 hover:shadow-lg"
          style={{
            background: "linear-gradient(135deg, var(--gold), #e8c96b)",
            color: "var(--navy)",
          }}
          onClick={() => handleNav("#services")}
        >
          <Icon name="Gift" size={16} />
          <span>Услуги</span>
        </button>

        <button
          className="lg:hidden"
          style={{ color: "white" }}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Icon name={menuOpen ? "X" : "Menu"} size={24} />
        </button>
      </div>

      {menuOpen && (
        <div
          className="lg:hidden absolute top-full left-0 right-0 shadow-2xl py-6 px-6 flex flex-col gap-3"
          style={{ background: "rgba(10,20,50,0.98)", backdropFilter: "blur(12px)" }}
        >
          {NAV_ITEMS.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNav(item.href)}
              className="text-left text-base font-medium py-2 border-b transition-colors hover:text-white"
              style={{
                color: "rgba(255,255,255,0.75)",
                borderColor: "rgba(255,255,255,0.06)",
              }}
            >
              {item.label}
            </button>
          ))}
          <button
            className="mt-2 text-sm font-bold px-5 py-2.5 rounded-full w-fit flex items-center gap-2"
            style={{
              background: "linear-gradient(135deg, var(--gold), #e8c96b)",
              color: "var(--navy)",
            }}
            onClick={() => handleNav("#services")}
          >
            <Icon name="Gift" size={16} />
            Услуги
          </button>
        </div>
      )}
    </header>
  );
}
