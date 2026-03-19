import Icon from "@/components/ui/icon";
import { FUN_FACTS, COAT_OF_ARMS_URL } from "./data";
import { scrollToSection } from "./hooks";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "var(--navy)" }}
    >
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div
          className="mb-8 flex justify-center animate-fade-in"
          style={{ animationDuration: "0.8s" }}
        >
          <div className="relative group cursor-pointer">
            <div
              className="absolute -inset-6 rounded-full opacity-20 pointer-events-none"
              style={{
                background:
                  "conic-gradient(from 0deg, var(--gold), transparent, var(--gold), transparent, var(--gold))",
                animation: "spin 8s linear infinite",
              }}
            />
            <div
              className="absolute -inset-4 rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(201,168,76,0.25) 0%, transparent 70%)",
                animation: "pulse-glow 2.5s ease-in-out infinite",
              }}
            />
            <img
              src={COAT_OF_ARMS_URL}
              alt="Герб финансовой грамотности"
              className="relative w-72 h-72 md:w-96 md:h-96 object-contain transition-transform duration-500 group-hover:scale-110 rounded-3xl"
              style={{
                filter:
                  "drop-shadow(0 0 24px rgba(201,168,76,0.5)) drop-shadow(0 8px 32px rgba(0,0,0,0.4))",
                animation: "floatHerb 4s ease-in-out infinite",
                mixBlendMode: "screen",
              }}
            />
          </div>
        </div>

        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-5 animate-fade-up"
          style={{
            background: "rgba(201,168,76,0.12)",
            border: "1px solid rgba(201,168,76,0.3)",
            color: "var(--gold)",
            animationDelay: "0.2s",
            opacity: 0,
          }}
        >
          <Icon name="Star" size={14} />
          <span>Профильная смена по финансовой грамотности</span>
          <Icon name="Star" size={14} />
        </div>

        <h1
          className="font-cormorant text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-white mb-4 animate-fade-up"
          style={{ animationDelay: "0.35s", opacity: 0 }}
        >
          Герб, который объединил{" "}
          <span style={{ color: "var(--gold)" }}>финансы и креатив</span>
        </h1>

        <p
          className="text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up"
          style={{
            color: "rgba(255,255,255,0.55)",
            animationDelay: "0.5s",
            opacity: 0,
          }}
        >
          Участники смены по финансовой грамотности создали символ, отражающий
          главные принципы: знание, расчёт и умение не терять чувство юмора
          даже при обсуждении бюджета.
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up"
          style={{ animationDelay: "0.65s", opacity: 0 }}
        >
          <button
            className="group flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm tracking-wide transition-all hover:scale-105 hover:shadow-2xl"
            style={{
              background: "linear-gradient(135deg, var(--gold), #e8c96b)",
              color: "var(--navy)",
            }}
            onClick={() => scrollToSection("#about")}
          >
            <span>Подробнее</span>
            <Icon
              name="ArrowDown"
              size={16}
              className="transition-transform group-hover:translate-y-0.5"
            />
          </button>
          <button
            className="flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm tracking-wide border text-white transition-all hover:bg-white/10"
            style={{ borderColor: "rgba(201,168,76,0.4)" }}
            onClick={() => scrollToSection("#services")}
          >
            <Icon name="Gift" size={16} />
            <span>Наши услуги</span>
          </button>
        </div>

        <div
          className="mt-16 grid grid-cols-2 gap-4 max-w-sm mx-auto animate-fade-up"
          style={{ animationDelay: "0.8s", opacity: 0 }}
        >
          {FUN_FACTS.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl p-4 text-center transition-all hover:scale-105"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(201,168,76,0.15)",
              }}
            >
              <div
                className="text-2xl font-bold mb-1"
                style={{ color: "var(--gold)" }}
              >
                {s.num}
              </div>
              <div className="text-xs font-bold text-white">{s.label}</div>
              <div
                className="text-[10px] mt-0.5"
                style={{ color: "rgba(255,255,255,0.35)" }}
              >
                {s.sub}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Icon
          name="ChevronDown"
          size={22}
          style={{ color: "var(--gold)", opacity: 0.5 }}
        />
      </div>
    </section>
  );
}