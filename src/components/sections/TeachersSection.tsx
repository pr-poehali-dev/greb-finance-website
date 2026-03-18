import { SENIOR_METHODISTS, TEAM_GROUPS } from "./data";
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

function PersonCard({
  name,
  photo,
  accentColor,
}: {
  name: string;
  photo: string;
  accentColor: string;
}) {
  return (
    <div className="flex flex-col items-center gap-2 group">
      <div
        className="relative overflow-hidden rounded-2xl transition-all duration-300 group-hover:scale-105 group-hover:-translate-y-1"
        style={{
          boxShadow: `0 4px 24px rgba(0,0,0,0.3)`,
        }}
      >
        <img
          src={photo}
          alt={name}
          className="w-32 h-40 object-cover object-top"
          style={{ display: "block" }}
        />
        {/* color overlay on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
          style={{ background: accentColor }}
        />
        {/* bottom shimmer */}
        <div
          className="absolute bottom-0 left-0 right-0 h-10"
          style={{
            background: `linear-gradient(to top, ${accentColor}33, transparent)`,
          }}
        />
      </div>
      <p className="text-xs font-semibold text-white text-center leading-tight max-w-[128px]">
        {name}
      </p>
    </div>
  );
}

function GroupBlock({
  title,
  emoji,
  color,
  bg,
  border,
  members,
}: {
  title: string;
  emoji: string;
  color: string;
  bg: string;
  border: string;
  members: { name: string; photo: string }[];
}) {
  return (
    <RevealSection>
      <div
        className="rounded-3xl p-6 border mb-10"
        style={{ background: bg, borderColor: border }}
      >
        {/* Group header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-2xl">{emoji}</span>
          <div>
            <h3 className="font-bold text-lg text-white">{title}</h3>
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
              {members.length} {members.length === 1 ? "человек" : members.length < 5 ? "человека" : "человек"}
            </p>
          </div>
          <div
            className="ml-auto h-0.5 flex-1 rounded"
            style={{ background: `linear-gradient(to right, ${color}55, transparent)` }}
          />
        </div>

        {/* Members grid */}
        <div className="flex flex-wrap gap-5 justify-start">
          {members.map((m, i) => (
            <PersonCard key={i} name={m.name} photo={m.photo} accentColor={color} />
          ))}
        </div>
      </div>
    </RevealSection>
  );
}

export default function TeachersSection() {
  return (
    <section id="teachers" className="py-24 px-6" style={{ background: "var(--navy)" }}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <RevealSection>
          <div className="text-center mb-16">
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
            <p className="mt-4 max-w-xl mx-auto text-base" style={{ color: "rgba(255,255,255,0.45)" }}>
              Люди, которые делают программу живой, интересной и незабываемой 🌟
            </p>
          </div>
        </RevealSection>

        {/* Старшие методисты — особый блок */}
        <RevealSection>
          <div
            className="rounded-3xl p-6 border mb-10"
            style={{
              background: "linear-gradient(135deg, rgba(201,168,76,0.10), rgba(201,168,76,0.04))",
              borderColor: "rgba(201,168,76,0.3)",
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">⭐</span>
              <div>
                <h3 className="font-bold text-lg text-white">Старшие методисты</h3>
                <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
                  {SENIOR_METHODISTS.length} человека — главные архитекторы программы
                </p>
              </div>
              <div
                className="ml-auto h-0.5 flex-1 rounded"
                style={{ background: "linear-gradient(to right, rgba(201,168,76,0.6), transparent)" }}
              />
            </div>
            <div className="flex flex-wrap gap-5 justify-start">
              {SENIOR_METHODISTS.map((m, i) => (
                <PersonCard key={i} name={m.name} photo={m.photo} accentColor="var(--gold)" />
              ))}
            </div>
          </div>
        </RevealSection>

        {/* Остальные группы */}
        {TEAM_GROUPS.map((group, i) => (
          <GroupBlock key={i} {...group} />
        ))}

        {/* Fun bottom note */}
        <RevealSection>
          <div
            className="rounded-2xl p-5 text-center border"
            style={{
              background: "rgba(255,255,255,0.03)",
              borderColor: "rgba(255,255,255,0.06)",
            }}
          >
            <p className="text-white/60 text-sm">
              🤝 Хотите добавить или изменить информацию о команде? Напишите нам!
            </p>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
