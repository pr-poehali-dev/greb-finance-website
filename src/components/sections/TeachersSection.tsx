import Icon from "@/components/ui/icon";
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

const ROLE_STYLES: Record<string, { accent: string; bg: string }> = {
  "Директор": { accent: "#c9a84c", bg: "rgba(201,168,76,0.12)" },
  "Заместитель директора": { accent: "#5cb8e4", bg: "rgba(92,184,228,0.1)" },
  "Старший методист": { accent: "#9b7fe8", bg: "rgba(155,127,232,0.1)" },
  "Методист": { accent: "#50c882", bg: "rgba(80,200,130,0.08)" },
};

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

  return (
    <div
      className="rounded-3xl overflow-hidden border transition-all duration-300 hover:scale-[1.03] hover:-translate-y-2 group"
      style={{
        background: "rgba(255,255,255,0.03)",
        borderColor: `${style.accent}33`,
        boxShadow: "0 4px 24px rgba(0,0,0,0.2)",
        animationDelay: `${index * 0.05}s`,
        width: "220px",
        flexShrink: 0,
      }}
    >
      <div className="relative overflow-hidden" style={{ height: "240px" }}>
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
            <Icon name="User" size={48} style={{ color: style.accent, opacity: 0.4 }} />
            <span
              className="text-xs px-3 text-center"
              style={{ color: "rgba(255,255,255,0.3)" }}
            >
              Фото скоро появится
            </span>
          </div>
        )}
        <div
          className="absolute bottom-0 left-0 right-0 h-16"
          style={{
            background: "linear-gradient(to top, rgba(13,27,62,0.8), transparent)",
          }}
        />
      </div>

      <div className="p-4 flex flex-col gap-2">
        <span
          className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full w-fit"
          style={{ background: style.bg, color: style.accent }}
        >
          {role}
        </span>
        <p className="text-sm font-bold text-white leading-snug">{name}</p>
        <p
          className="text-xs leading-relaxed italic"
          style={{ color: "rgba(255,255,255,0.45)" }}
        >
          {fun}
        </p>
      </div>
    </div>
  );
}

export default function TeachersSection() {
  return (
    <section
      id="team"
      className="py-24 px-6 overflow-hidden"
      style={{ background: "var(--navy)" }}
    >
      <div className="max-w-7xl mx-auto">
        <RevealSection>
          <div className="text-center mb-4">
            <p
              className="text-xs font-bold tracking-[0.3em] uppercase mb-3"
              style={{ color: "var(--gold)" }}
            >
              <Icon name="Users" size={14} className="inline mr-1 -mt-0.5" />
              Лица проекта
            </p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-white mb-4">
              Наша команда
            </h2>
            <span className="gold-line mx-auto block" />
            <p
              className="mt-4 max-w-2xl mx-auto text-base"
              style={{ color: "rgba(255,255,255,0.45)" }}
            >
              Люди, которые делают программу живой, интересной и незабываемой
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
              <Icon name="Camera" size={14} className="inline mr-1 -mt-0.5" />
              Фотографии остальных педагогов скоро появятся
            </p>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
