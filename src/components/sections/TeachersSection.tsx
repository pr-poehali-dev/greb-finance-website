import Icon from "@/components/ui/icon";
import { TEACHERS } from "./data";
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
              👨‍🏫 Команда
            </p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-white mb-4">
              Наши преподаватели
            </h2>
            <span className="gold-line mx-auto block" />
            <p className="mt-4 max-w-xl mx-auto text-base" style={{ color: "rgba(255,255,255,0.48)" }}>
              Эти люди знают о деньгах больше, чем мы все вместе взятые 🧠
            </p>
          </div>
        </RevealSection>

        <div className="grid md:grid-cols-3 gap-8">
          {TEACHERS.map((teacher, i) => (
            <RevealSection key={i}>
              <div
                className="card-hover rounded-3xl overflow-hidden border flex flex-col"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  borderColor: "rgba(201,168,76,0.15)",
                }}
              >
                {/* Photo area */}
                <div
                  className="h-60 flex flex-col items-center justify-center relative gap-3"
                  style={{ background: "rgba(201,168,76,0.04)" }}
                >
                  {teacher.photo ? (
                    <img
                      src={teacher.photo}
                      alt={teacher.name}
                      className="w-28 h-28 rounded-full object-cover border-4"
                      style={{ borderColor: "var(--gold)" }}
                    />
                  ) : (
                    <div
                      className="w-28 h-28 rounded-full flex flex-col items-center justify-center border-2"
                      style={{
                        borderColor: "var(--gold)",
                        background: "rgba(201,168,76,0.08)",
                      }}
                    >
                      <span className="text-4xl">{teacher.emoji}</span>
                    </div>
                  )}
                  <p
                    className="text-[10px] tracking-[0.2em] uppercase"
                    style={{ color: "rgba(201,168,76,0.4)" }}
                  >
                    {teacher.photo ? "" : "Фото скоро"}
                  </p>

                  <div
                    className="absolute top-4 right-4 text-xs px-2 py-1 rounded-full font-semibold"
                    style={{
                      background: "rgba(201,168,76,0.15)",
                      color: "var(--gold)",
                    }}
                  >
                    ⭐ Эксперт
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-bold text-lg text-white mb-1">{teacher.name}</h3>
                  <p
                    className="text-xs font-semibold tracking-wide mb-3"
                    style={{ color: "var(--gold)" }}
                  >
                    {teacher.role}
                  </p>
                  <p
                    className="text-sm leading-relaxed flex-1"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                  >
                    {teacher.bio}
                  </p>
                  <div
                    className="mt-4 pt-4 border-t flex items-center gap-2"
                    style={{ borderColor: "rgba(255,255,255,0.06)" }}
                  >
                    <Icon name="User" size={12} style={{ color: "rgba(255,255,255,0.25)" }} />
                    <button
                      className="text-xs transition-colors hover:text-white"
                      style={{ color: "rgba(255,255,255,0.3)" }}
                    >
                      Подробнее →
                    </button>
                  </div>
                </div>
              </div>
            </RevealSection>
          ))}
        </div>

        {/* Fun note */}
        <RevealSection>
          <div
            className="mt-12 rounded-2xl p-6 text-center border"
            style={{
              background: "rgba(201,168,76,0.06)",
              borderColor: "rgba(201,168,76,0.15)",
            }}
          >
            <p className="text-2xl mb-2">🤝</p>
            <p className="text-white font-semibold">
              Хотите стать частью нашей команды преподавателей?
            </p>
            <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.4)" }}>
              Напишите нам — мы всегда рады новым знаниям и людям!
            </p>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
