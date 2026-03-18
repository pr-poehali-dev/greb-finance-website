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
        background: scrolled
          ? "rgba(10,20,50,0.97)"
          : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNav("#home")}
          className="flex items-center gap-2 group"
        >
          <span
            className="font-bold text-xl tracking-widest uppercase transition-all group-hover:scale-110"
            style={{ color: "var(--gold)" }}
          >
            ГРЕБ
          </span>
          <span
            className="text-xs font-medium px-2 py-0.5 rounded-full hidden sm:block"
            style={{ background: "rgba(201,168,76,0.15)", color: "var(--gold)" }}
          >
            Сириус 55
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
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
          className="hidden md:flex items-center gap-2 text-sm font-bold px-5 py-2 rounded-full transition-all hover:scale-105 hover:shadow-lg"
          style={{
            background: "linear-gradient(135deg, var(--gold), #e8c96b)",
            color: "var(--navy)",
          }}
          onClick={() => handleNav("#contacts")}
        >
          <span>Вступить</span>
          <span>🚀</span>
        </button>

        {/* Burger */}
        <button
          className="md:hidden"
          style={{ color: "white" }}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Icon name={menuOpen ? "X" : "Menu"} size={24} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden absolute top-full left-0 right-0 shadow-2xl py-6 px-6 flex flex-col gap-3"
          style={{ background: "rgba(10,20,50,0.98)", backdropFilter: "blur(12px)" }}
        >
          {NAV_ITEMS.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNav(item.href)}
              className="text-left text-base font-medium py-1 border-b transition-colors hover:text-white"
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
            onClick={() => handleNav("#contacts")}
          >
            Вступить 🚀
          </button>
        </div>
      )}
    </header>
  );
}
