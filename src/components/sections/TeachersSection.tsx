import { useState } from "react";
import { ALL_TEACHERS } from "./data";
import { useScrollReveal } from "./hooks";

function RevealSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { ref, visible } = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </div>
  );
}

const ROLE_STYLES: Record<string, { accent: string; bg: string; emoji: string }> = {
  "Директор": { accent: "#c9a84c", bg: "rgba(201,168,76,0.12)", emoji: "👑" },
  "Заместитель директора": { accent: "#5cb8e4", bg: "rgba(92,184,228,0.1)", emoji: "⭐" },
  "Старший методист": { accent: "#9b7fe8", bg: "rgba(155,127,232,0.1)", emoji: "💎" },
  "Методист": { accent: "#50c882", bg: "rgba(80,200,130,0.08)", emoji: "🌟" },
};

const HEART_COLORS = ["#ff6b8a", "#ff8fab", "#ff69b4", "#ff1493", "#ff85a2", "#e8588c"];

function FloatingHearts() {
  const hearts = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    delay: Math.random() * 10,
    duration: 4 + Math.random() * 6,
    size: 12 + Math.random() * 18,
    color: HEART_COLORS[i % HEART_COLORS.length],
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {hearts.map((h) => (
        <div
          key={h.id}
          className="absolute"
          style={{
            left: `${h.x}%`,
            bottom: "-30px",
            fontSize: `${h.size}px`,
            color: h.color,
            opacity: 0.15,
            animation: `floatHeart ${h.duration}s ease-in-out ${h.delay}s infinite`,
          }}
        >
          ❤️
        </div>
      ))}
    </div>
  );
}

function HeartBorder({ color, children }: { color: string; children: React.ReactNode }) {
  return (
    <div className="relative p-1">
      <div
        className="absolute -top-2 -left-2 text-lg"
        style={{ color, animation: "heartPulse 2s ease-in-out infinite" }}
      >❤</div>
      <div
        className="absolute -top-2 -right-2 text-lg"
        style={{ color, animation: "heartPulse 2s ease-in-out 0.3s infinite" }}
      >❤</div>
      <div
        className="absolute -bottom-2 -left-2 text-lg"
        style={{ color, animation: "heartPulse 2s ease-in-out 0.6s infinite" }}
      >❤</div>
      <div
        className="absolute -bottom-2 -right-2 text-lg"
        style={{ color, animation: "heartPulse 2s ease-in-out 0.9s infinite" }}
      >❤</div>
      <div
        className="absolute top-1/2 -left-3 -translate-y-1/2 text-sm"
        style={{ color, opacity: 0.6 }}
      >❤</div>
      <div
        className="absolute top-1/2 -right-3 -translate-y-1/2 text-sm"
        style={{ color, opacity: 0.6 }}
      >❤</div>
      {children}
    </div>
  );
}

function PersonCard({
  name,
  role,
  photo,
  fun,
  index,
}: {
  name: string;
  role: string;
  photo: string;
  fun: string;
  index: number;
}) {
  const style = ROLE_STYLES[role] || ROLE_STYLES["Методист"];
  const hasPhoto = photo.length > 0;
  const heartColor = HEART_COLORS[index % HEART_COLORS.length];

  return (
    <HeartBorder color={heartColor}>
      <div
        className="rounded-3xl overflow-hidden border-2 transition-all duration-300 hover:scale-[1.05] hover:-translate-y-3 group"
        style={{
          background: "rgba(255,255,255,0.05)",
          borderColor: `${heartColor}55`,
          boxShadow: `0 4px 24px rgba(0,0,0,0.2), 0 0 20px ${heartColor}15`,
          animationDelay: `${index * 0.05}s`,
          width: "230px",
          flexShrink: 0,
        }}
      >
        <div className="relative overflow-hidden" style={{ height: "250px" }}>
          {hasPhoto ? (
            <img
              src={photo}
              alt={name}
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
            />
          ) : (
            <div
              className="w-full h-full flex flex-col items-center justify-center gap-3"
              style={{ background: style.bg }}
            >
              <div className="text-5xl" style={{ animation: "heartPulse 2s ease-in-out infinite" }}>
                {style.emoji}
              </div>
              <span
                className="text-xs px-3 text-center"
                style={{ color: "rgba(255,255,255,0.3)" }}
              >
                Скоро будет фото!
              </span>
            </div>
          )}
          <div
            className="absolute bottom-0 left-0 right-0 h-20"
            style={{
              background: "linear-gradient(to top, rgba(13,27,62,0.9), transparent)",
            }}
          />
          <div className="absolute top-2 right-2 text-lg">
            {style.emoji}
          </div>
        </div>

        <div className="p-4 flex flex-col gap-2">
          <span
            className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full w-fit flex items-center gap-1"
            style={{ background: style.bg, color: style.accent }}
          >
            <span>{style.emoji}</span>
            {role}
          </span>
          <p className="text-sm font-bold text-white leading-snug">{name}</p>
          <p
            className="text-xs leading-relaxed italic"
            style={{ color: "rgba(255,255,255,0.55)" }}
          >
            «{fun}»
          </p>
        </div>
      </div>
    </HeartBorder>
  );
}

const FUNNY_QUOTES = [
  "Если педагог поставил тебе 5 — это инвестиция в будущее! 📈",
  "Наши педагоги знают, как посчитать сдачу с миллиона 💰",
  "Педагоги — это те, кто верит в тебя больше, чем ты в свой бюджет 😄",
  "За каждым успешным студентом стоит педагог с кофе ☕",
];

export default function TeachersSection() {
  const [quoteIdx, setQuoteIdx] = useState(0);

  return (
    <section
      id="team"
      className="py-24 px-6 overflow-hidden relative"
      style={{ background: "linear-gradient(180deg, var(--navy) 0%, #0a1633 50%, var(--navy) 100%)" }}
    >
      <FloatingHearts />

      <div className="max-w-7xl mx-auto relative z-10">
        <RevealSection>
          <div className="text-center mb-6">
            <p
              className="text-xs font-bold tracking-[0.3em] uppercase mb-3"
              style={{ color: "#ff6b8a" }}
            >
              ❤️ С любовью от студентов ❤️
            </p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-white mb-4">
              Наши{" "}
              <span style={{ color: "#ff6b8a" }}>любимые</span>{" "}
              педагоги{" "}
              <span className="inline-block" style={{ animation: "heartPulse 1.5s ease-in-out infinite" }}>💖</span>
            </h2>
            <span className="mx-auto block w-16 h-1 rounded-full" style={{ background: "linear-gradient(90deg, #ff6b8a, var(--gold), #ff6b8a)" }} />
            <p
              className="mt-4 max-w-2xl mx-auto text-base"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              Сотрудники центра «Сириус» и педагоги Омского педагогического университета — люди, которые делают программу живой, интересной и незабываемой!
            </p>
          </div>
        </RevealSection>

        <RevealSection>
          <div
            className="mb-8 mx-auto max-w-xl rounded-2xl p-4 text-center cursor-pointer transition-all hover:scale-105"
            style={{
              background: "linear-gradient(135deg, rgba(255,107,138,0.1), rgba(201,168,76,0.1))",
              border: "1px solid rgba(255,107,138,0.3)",
            }}
            onClick={() => setQuoteIdx((prev) => (prev + 1) % FUNNY_QUOTES.length)}
          >
            <p className="text-white text-sm font-medium">
              {FUNNY_QUOTES[quoteIdx]}
            </p>
            <p className="text-[10px] mt-2" style={{ color: "rgba(255,255,255,0.3)" }}>
              Нажми для новой мудрости ✨
            </p>
          </div>
        </RevealSection>

        <RevealSection>
          <div className="flex flex-wrap gap-8 justify-center">
            {ALL_TEACHERS.map((teacher, i) => (
              <PersonCard
                key={i}
                index={i}
                name={teacher.name}
                role={teacher.role}
                photo={teacher.photo}
                fun={teacher.fun}
              />
            ))}
          </div>
        </RevealSection>

        <RevealSection>
          <div
            className="mt-12 rounded-2xl p-6 text-center border"
            style={{
              background: "linear-gradient(135deg, rgba(255,107,138,0.05), rgba(201,168,76,0.05))",
              borderColor: "rgba(255,107,138,0.2)",
            }}
          >
            <p className="text-2xl mb-2">🎓</p>
            <p className="text-white/70 text-sm">
              Спасибо вам за всё, дорогие педагоги! Вы — лучшие!
            </p>
            <p className="text-white/40 text-xs mt-1">
              P.S. Обещаем вести себя хорошо... ну, или хотя бы стараться 😄
            </p>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}