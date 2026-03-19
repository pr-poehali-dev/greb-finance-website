import { SENIOR_METHODISTS } from "./data";
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
  role,
  photo,
  index,
}: {
  name: string;
  role: string;
  photo: string;
  index: number;
}) {
  return (
    <div
      className="flex flex-col items-center gap-3 group"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div
        className="relative overflow-hidden rounded-2xl transition-all duration-400 group-hover:scale-105 group-hover:-translate-y-2"
        style={{
          boxShadow: "0 6px 30px rgba(0,0,0,0.4)",
        }}
      >
        <img
          src={photo}
          alt={name}
          className="w-36 h-48 md:w-44 md:h-56 object-cover object-top"
          style={{ display: "block" }}
        />
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-25 transition-opacity duration-300"
          style={{ background: "var(--gold)" }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-12"
          style={{
            background: "linear-gradient(to top, rgba(201,168,76,0.25), transparent)",
          }}
        />
      </div>
      <div className="text-center">
        <p className="text-sm font-bold text-white leading-snug max-w-[160px]">{name}</p>
        <p
          className="text-xs mt-1 font-medium"
          style={{ color: "var(--gold)" }}
        >
          {role}
        </p>
      </div>
    </div>
  );
}

export default function TeachersSection() {
  return (
    <section id="teachers" className="py-24 px-6" style={{ background: "var(--navy)" }}>
      <div className="max-w-7xl mx-auto">

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

        <RevealSection>
          <div className="flex flex-wrap gap-6 justify-center">
            {SENIOR_METHODISTS.map((m, i) => (
              <PersonCard
                key={i}
                name={m.name}
                role={m.role}
                photo={m.photo}
                index={i}
              />
            ))}
          </div>
        </RevealSection>

      </div>
    </section>
  );
}
