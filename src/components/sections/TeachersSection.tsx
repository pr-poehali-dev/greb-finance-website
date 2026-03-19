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

const ROLE_COLORS: Record<string, { bg: string; border: string; badge: string; textColor: string }> = {
  "Директор": {
    bg: "linear-gradient(135deg, rgba(201,168,76,0.18), rgba(201,168,76,0.06))",
    border: "rgba(201,168,76,0.5)",
    badge: "#c9a84c",
    textColor: "#0d1b3e",
  },
  "Заместитель директора": {
    bg: "linear-gradient(135deg, rgba(92,184,228,0.15), rgba(92,184,228,0.05))",
    border: "rgba(92,184,228,0.4)",
    badge: "#5cb8e4",
    textColor: "#0d1b3e",
  },
  "Старший методист": {
    bg: "linear-gradient(135deg, rgba(155,127,232,0.15), rgba(155,127,232,0.05))",
    border: "rgba(155,127,232,0.4)",
    badge: "#9b7fe8",
    textColor: "#fff",
  },
  "Методист": {
    bg: "linear-gradient(135deg, rgba(80,200,130,0.12), rgba(80,200,130,0.04))",
    border: "rgba(80,200,130,0.35)",
    badge: "#50c882",
    textColor: "#0d1b3e",
  },
};

function PersonCard({
  name,
  role,
  photo,
  fun,
  emoji,
  index,
}: {
  name: string;
  role: string;
  photo: string;
  fun: string;
  emoji: string;
  index: number;
}) {
  const colors = ROLE_COLORS[role] || ROLE_COLORS["Методист"];

  return (
    <div
      className="flex flex-col rounded-3xl overflow-hidden border transition-all duration-300 hover:scale-105 hover:-translate-y-2 group"
      style={{
        background: colors.bg,
        borderColor: colors.border,
        boxShadow: "0 4px 24px rgba(0,0,0,0.25)",
        animationDelay: `${index * 0.07}s`,
        width: "180px",
        flexShrink: 0,
      }}
    >
      <div className="relative overflow-hidden" style={{ height: "200px" }}>
        {photo ? (
          <img
            src={photo}
            alt={name}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div
            className="w-full h-full flex flex-col items-center justify-center gap-2"
            style={{ background: "rgba(255,255,255,0.05)" }}
          >
            <span className="text-5xl">{emoji}</span>
            <span className="text-xs text-white/40 text-center px-2">Фото засекречено</span>
          </div>
        )}
        <div
          className="absolute top-2 right-2 w-8 h-8 rounded-full flex items-center justify-center text-base"
          style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(4px)" }}
        >
          {emoji}
        </div>
      </div>

      <div className="p-3 flex flex-col gap-1.5 flex-1">
        <span
          className="text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full text-center"
          style={{ background: colors.badge, color: colors.textColor }}
        >
          {role}
        </span>
        <p className="text-xs font-bold text-white leading-snug text-center">{name}</p>
        <p
          className="text-[10px] leading-relaxed text-center italic"
          style={{ color: "rgba(255,255,255,0.5)" }}
        >
          {fun}
        </p>
      </div>
    </div>
  );
}

export default function TeachersSection() {
  return (
    <section id="teachers" className="py-24 px-6 overflow-hidden" style={{ background: "var(--navy)" }}>
      <div className="max-w-7xl mx-auto">

        <RevealSection>
          <div className="text-center mb-4">
            <p
              className="text-xs font-bold tracking-[0.3em] uppercase mb-3"
              style={{ color: "var(--gold)" }}
            >
              👨‍🏫 Команда Сириус 55
            </p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-white mb-4">
              Наши наставники
            </h2>
            <span className="gold-line mx-auto block" />
            <p className="mt-4 max-w-2xl mx-auto text-base" style={{ color: "rgba(255,255,255,0.45)" }}>
              Люди, которые делают программу живой, интересной и незабываемой 🌟
            </p>
          </div>
        </RevealSection>

        <RevealSection>
          <div
            className="mx-auto max-w-2xl rounded-2xl p-4 mb-10 text-center border"
            style={{
              background: "rgba(201,168,76,0.08)",
              borderColor: "rgba(201,168,76,0.25)",
            }}
          >
            <p className="text-sm text-white/70">
              😂 <strong style={{ color: "var(--gold)" }}>Внимание!</strong> Все описания написаны с любовью и юмором. Педагоги в курсе и одобрили. Почти.
            </p>
          </div>
        </RevealSection>

        <RevealSection>
          <div className="flex flex-wrap gap-5 justify-center">
            {ALL_TEACHERS.map((teacher, i) => (
              <PersonCard
                key={i}
                index={i}
                name={teacher.name}
                role={teacher.role}
                photo={teacher.photo}
                fun={teacher.fun}
                emoji={teacher.emoji}
              />
            ))}
          </div>
        </RevealSection>

        <RevealSection>
          <div
            className="mt-12 rounded-2xl p-5 text-center border"
            style={{
              background: "rgba(255,255,255,0.03)",
              borderColor: "rgba(255,255,255,0.06)",
            }}
          >
            <p className="text-white/50 text-sm">
              🤝 Фотографии остальных педагогов скоро появятся. Или не скоро — но точно появятся!
            </p>
          </div>
        </RevealSection>

      </div>
    </section>
  );
}
