import Icon from "@/components/ui/icon";
import { FUN_FACTS } from "./data";
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
        {/* ГЕРБ — главный символ (SVG с русскими надписями и анимацией) */}
        <div
          className="mb-8 flex justify-center animate-fade-in"
          style={{ animationDuration: "0.8s" }}
        >
          <div className="relative group cursor-pointer">
            {/* Outer rotating ring */}
            <div
              className="absolute -inset-6 rounded-full opacity-20 pointer-events-none"
              style={{
                background: "conic-gradient(from 0deg, var(--gold), transparent, var(--gold), transparent, var(--gold))",
                animation: "spin 8s linear infinite",
              }}
            />
            {/* Pulsing glow */}
            <div
              className="absolute -inset-4 rounded-full pointer-events-none"
              style={{
                background: "radial-gradient(circle, rgba(201,168,76,0.25) 0%, transparent 70%)",
                animation: "pulse-glow 2.5s ease-in-out infinite",
              }}
            />
            {/* Inner glow on hover */}
            <div
              className="absolute -inset-2 rounded-full opacity-0 group-hover:opacity-60 blur-lg transition-all duration-700 pointer-events-none"
              style={{ background: "radial-gradient(circle, var(--gold), transparent 65%)" }}
            />
            {/* SVG Герб с русскими надписями */}
            <svg
              viewBox="0 0 260 260"
              className="relative w-56 h-56 md:w-72 md:h-72 transition-transform duration-500 group-hover:scale-110"
              style={{
                filter: "drop-shadow(0 0 24px rgba(201,168,76,0.5)) drop-shadow(0 8px 32px rgba(0,0,0,0.4))",
                animation: "floatHerb 4s ease-in-out infinite",
              }}
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <radialGradient id="shieldGrad" cx="50%" cy="40%" r="60%">
                  <stop offset="0%" stopColor="#1a2d5a" />
                  <stop offset="100%" stopColor="#0d1b3e" />
                </radialGradient>
                <radialGradient id="goldGrad" cx="50%" cy="30%" r="70%">
                  <stop offset="0%" stopColor="#f0d060" />
                  <stop offset="100%" stopColor="#c9a84c" />
                </radialGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
                <path id="topArc" d="M 40,130 A 90,90 0 0,1 220,130" />
                <path id="botArc" d="M 50,145 A 80,80 0 0,0 210,145" />
              </defs>

              {/* Щит форма */}
              <path
                d="M130,12 L230,50 L230,145 Q230,210 130,248 Q30,210 30,145 L30,50 Z"
                fill="url(#shieldGrad)"
                stroke="url(#goldGrad)"
                strokeWidth="3"
              />
              {/* Внутренняя обводка щита */}
              <path
                d="M130,22 L220,56 L220,145 Q220,202 130,238 Q40,202 40,145 L40,56 Z"
                fill="none"
                stroke="rgba(201,168,76,0.3)"
                strokeWidth="1"
              />

              {/* Звезда сириуса */}
              <g style={{ animation: "starPulse 3s ease-in-out infinite" }}>
                <circle cx="130" cy="100" r="22" fill="none" stroke="url(#goldGrad)" strokeWidth="1.5" opacity="0.5" />
                {/* 8-лучевая звезда */}
                {[0,45,90,135,180,225,270,315].map((angle, i) => {
                  const rad = (angle * Math.PI) / 180;
                  const x2 = 130 + Math.cos(rad) * 20;
                  const y2 = 100 + Math.sin(rad) * 20;
                  const x1 = 130 + Math.cos(rad) * 4;
                  const y1 = 100 + Math.sin(rad) * 4;
                  return (
                    <line
                      key={i}
                      x1={x1} y1={y1} x2={x2} y2={y2}
                      stroke="url(#goldGrad)"
                      strokeWidth={i % 2 === 0 ? "2.5" : "1.5"}
                      strokeLinecap="round"
                      filter="url(#glow)"
                    />
                  );
                })}
                <circle cx="130" cy="100" r="4" fill="url(#goldGrad)" filter="url(#glow)" />
              </g>

              {/* Полумесяц */}
              <path
                d="M108,100 A22,22 0 1,0 108,100.01"
                fill="none"
                stroke="url(#goldGrad)"
                strokeWidth="0"
              />
              <path
                d="M115,80 Q95,100 115,120"
                fill="none"
                stroke="url(#goldGrad)"
                strokeWidth="2.5"
                strokeLinecap="round"
              />

              {/* Число 55 */}
              <text
                x="130"
                y="155"
                textAnchor="middle"
                fill="url(#goldGrad)"
                fontSize="28"
                fontWeight="bold"
                fontFamily="serif"
                filter="url(#glow)"
              >
                55
              </text>

              {/* Верхняя надпись по дуге */}
              <text
                fontSize="10"
                fontWeight="bold"
                fontFamily="sans-serif"
                fill="url(#goldGrad)"
                letterSpacing="1"
              >
                <textPath href="#topArc" startOffset="50%" textAnchor="middle">
                  СИРИУС · ОМСК
                </textPath>
              </text>

              {/* Нижняя надпись по дуге */}
              <text
                fontSize="9"
                fontFamily="sans-serif"
                fill="rgba(201,168,76,0.8)"
                letterSpacing="0.5"
              >
                <textPath href="#botArc" startOffset="50%" textAnchor="middle">
                  Финансовая грамотность
                </textPath>
              </text>

              {/* Декоративные звёздочки по бокам */}
              <text x="48" y="140" fontSize="10" fill="url(#goldGrad)" opacity="0.7">✦</text>
              <text x="202" y="140" fontSize="10" fill="url(#goldGrad)" opacity="0.7">✦</text>

              {/* Нижний орнамент */}
              <path
                d="M90,220 Q130,235 170,220"
                fill="none"
                stroke="rgba(201,168,76,0.4)"
                strokeWidth="1.5"
              />
            </svg>
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
            ГЕРБ
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