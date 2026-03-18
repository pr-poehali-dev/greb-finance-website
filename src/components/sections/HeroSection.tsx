import Icon from "@/components/ui/icon";
import { COAT_OF_ARMS_URL, FUN_FACTS } from "./data";
import { scrollToSection } from "./hooks";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "var(--navy)" }}
    >
      {/* Animated background dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {["💰", "📈", "💡", "🪙", "📊", "💳", "🏦", "💎"].map((emoji, i) => (
          <span
            key={i}
            className="absolute text-2xl select-none opacity-10 animate-bounce"
            style={{
              left: `${10 + i * 12}%`,
              top: `${15 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.4}s`,
              animationDuration: `${2.5 + i * 0.3}s`,
              fontSize: `${1.2 + (i % 3) * 0.5}rem`,
            }}
          >
            {emoji}
          </span>
        ))}
      </div>

      {/* Radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* ГЕРБ — главный символ */}
        <div
          className="mb-8 flex justify-center animate-fade-in"
          style={{ animationDuration: "0.8s" }}
        >
          <div className="relative group">
            {/* Glow ring */}
            <div
              className="absolute -inset-3 rounded-full opacity-40 blur-md transition-all duration-500 group-hover:opacity-70 group-hover:-inset-4"
              style={{ background: "radial-gradient(circle, var(--gold), transparent 70%)" }}
            />
            <img
              src={COAT_OF_ARMS_URL}
              alt="Герб проекта ГРЕБ — Неделя финансовой грамотности Сириус 55"
              className="relative w-52 h-52 md:w-64 md:h-64 object-contain rounded-none drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
              style={{ filter: "drop-shadow(0 0 30px rgba(201,168,76,0.35))" }}
            />
          </div>
        </div>

        {/* Badge */}
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
          <span>⭐</span>
          <span>Участники программы Сириус 55</span>
          <span>⭐</span>
        </div>

        <h1
          className="font-cormorant text-5xl md:text-7xl font-bold leading-tight text-white mb-3 animate-fade-up"
          style={{ animationDelay: "0.35s", opacity: 0 }}
        >
          Проект{" "}
          <span
            className="relative"
            style={{ color: "var(--gold)" }}
          >
            ГРЕБ
          </span>
        </h1>

        <p
          className="font-montserrat text-xl md:text-2xl font-light mb-4 animate-fade-up"
          style={{
            color: "rgba(255,255,255,0.7)",
            animationDelay: "0.45s",
            opacity: 0,
          }}
        >
          🎓 Неделя финансовой грамотности
        </p>

        <p
          className="text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up"
          style={{
            color: "rgba(255,255,255,0.5)",
            animationDelay: "0.55s",
            opacity: 0,
          }}
        >
          Мы — команда обучающихся дополнительной программы <strong style={{ color: "var(--gold)" }}>Сириус 55</strong>.
          Наш проект — это весёлое и полезное путешествие в мир финансов.
          Кредит, инфляция, инвестиции — звучит скучно? Посмотрим! 😄
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
            <span>Узнать о проекте</span>
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </button>
          <button
            className="flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm tracking-wide border text-white transition-all hover:bg-white/10"
            style={{ borderColor: "rgba(201,168,76,0.4)" }}
            onClick={() => scrollToSection("#contacts")}
          >
            <span>Связаться с нами</span>
            <span>✉️</span>
          </button>
        </div>

        {/* Fun stats */}
        <div
          className="mt-16 grid grid-cols-3 gap-4 max-w-md mx-auto animate-fade-up"
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
              <div className="text-2xl mb-1">{s.num}</div>
              <div className="text-xs font-bold text-white">{s.label}</div>
              <div className="text-[10px] mt-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>
                {s.sub}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={22} style={{ color: "var(--gold)", opacity: 0.5 }} />
      </div>
    </section>
  );
}
