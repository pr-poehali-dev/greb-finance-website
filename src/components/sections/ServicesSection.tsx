import { useState, useRef, useCallback } from "react";
import Icon from "@/components/ui/icon";
import { SERVICES, CARD_PRIZES, RANDOM_ADVICE } from "./data";
import { useScrollReveal } from "./hooks";
import { useNavigate } from "react-router-dom";

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

function ScratchCard() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [revealed, setRevealed] = useState(false);
  const [prize] = useState(
    () => CARD_PRIZES[Math.floor(Math.random() * CARD_PRIZES.length)]
  );
  const isDrawing = useRef(false);
  const scratchedPixels = useRef(0);

  const getPos = (
    e: React.MouseEvent | React.TouchEvent,
    canvas: HTMLCanvasElement
  ) => {
    const rect = canvas.getBoundingClientRect();
    if ("touches" in e) {
      return {
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top,
      };
    }
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  };

  const initCanvas = useCallback((canvas: HTMLCanvasElement | null) => {
    if (!canvas) return;
    canvasRef.current = canvas;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const w = canvas.offsetWidth;
    const h = canvas.offsetHeight;
    canvas.width = w;
    canvas.height = h;

    ctx.fillStyle = "#1a2a4a";
    ctx.fillRect(0, 0, w, h);

    ctx.fillStyle = "rgba(201,168,76,0.3)";
    for (let x = 0; x < w; x += 8) {
      for (let y = 0; y < h; y += 40) {
        ctx.fillRect(x, y, 4, 20);
      }
    }

    ctx.fillStyle = "rgba(255,255,255,0.7)";
    ctx.font = "bold 14px Montserrat, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("Сотри и узнай свою удачу!", w / 2, h / 2);
  }, []);

  const scratch = (e: React.MouseEvent | React.TouchEvent) => {
    const canvas = canvasRef.current;
    if (!canvas || revealed) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const pos = getPos(e, canvas);
    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(pos.x, pos.y, 20, 0, Math.PI * 2);
    ctx.fill();

    scratchedPixels.current += 1;
    if (scratchedPixels.current > 40) {
      setRevealed(true);
    }
  };

  return (
    <div
      className="rounded-3xl overflow-hidden border"
      style={{
        background: "linear-gradient(135deg, #0d1b3e, #1a3060)",
        borderColor: "rgba(201,168,76,0.4)",
        boxShadow: "0 8px 40px rgba(201,168,76,0.15)",
      }}
    >
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="font-cormorant text-xl font-bold text-white">
              СИРИУС 55
            </p>
            <p
              className="text-xs"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              Секретная финансовая карта
            </p>
          </div>
          <Icon name="CreditCard" size={28} style={{ color: "var(--gold)" }} />
        </div>

        <div
          className="relative rounded-2xl overflow-hidden"
          style={{ height: "120px" }}
        >
          <div className="absolute inset-0 flex items-center justify-center p-4 text-center">
            <p
              className={`text-sm font-bold transition-all duration-500 ${
                revealed ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
              style={{ color: "var(--gold)" }}
            >
              {prize}
            </p>
          </div>

          {!revealed && (
            <canvas
              ref={initCanvas}
              className="absolute inset-0 w-full h-full cursor-pointer"
              style={{ touchAction: "none" }}
              onMouseDown={() => {
                isDrawing.current = true;
              }}
              onMouseUp={() => {
                isDrawing.current = false;
              }}
              onMouseMove={(e) => {
                if (isDrawing.current) scratch(e);
              }}
              onTouchStart={(e) => {
                e.preventDefault();
                isDrawing.current = true;
                scratch(e);
              }}
              onTouchMove={(e) => {
                e.preventDefault();
                scratch(e);
              }}
              onTouchEnd={() => {
                isDrawing.current = false;
              }}
            />
          )}
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex gap-1">
            {[...Array(4)].map((_, i) => (
              <span
                key={i}
                className="text-xs tracking-widest"
                style={{ color: "rgba(255,255,255,0.25)" }}
              >
                ****
              </span>
            ))}
          </div>
          <p className="text-xs font-bold" style={{ color: "var(--gold)" }}>
            250 руб.
          </p>
        </div>
      </div>
    </div>
  );
}

function ServiceCard({
  id,
  title,
  description,
  price,
  icon,
  featured,
}: {
  id: string;
  title: string;
  description: string;
  price: number;
  icon: string;
  featured?: boolean;
}) {
  const navigate = useNavigate();

  return (
    <div
      className={`rounded-3xl border p-6 flex flex-col transition-all duration-300 hover:-translate-y-2 ${
        featured ? "md:col-span-2 lg:col-span-1" : ""
      }`}
      style={{
        background: featured
          ? "linear-gradient(135deg, rgba(201,168,76,0.08), rgba(201,168,76,0.02))"
          : "rgba(255,255,255,0.03)",
        borderColor: featured
          ? "rgba(201,168,76,0.3)"
          : "rgba(255,255,255,0.08)",
        boxShadow: featured
          ? "0 8px 40px rgba(201,168,76,0.1)"
          : "0 4px 20px rgba(0,0,0,0.15)",
      }}
    >
      <div className="flex items-start justify-between mb-4">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center"
          style={{
            background: featured
              ? "rgba(201,168,76,0.15)"
              : "rgba(255,255,255,0.06)",
          }}
        >
          <Icon
            name={icon}
            size={22}
            style={{ color: featured ? "var(--gold)" : "rgba(255,255,255,0.6)" }}
          />
        </div>
        {featured && (
          <span
            className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full"
            style={{ background: "var(--gold)", color: "var(--navy)" }}
          >
            ТОП
          </span>
        )}
      </div>

      <h3 className="font-bold text-base text-white mb-2">{title}</h3>
      <p
        className="text-sm leading-relaxed flex-1 mb-4"
        style={{ color: "rgba(255,255,255,0.45)" }}
      >
        {description}
      </p>

      <div className="flex items-center justify-between">
        <span className="font-bold text-lg" style={{ color: "var(--gold)" }}>
          {price} руб.
        </span>
        <button
          className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-bold transition-all hover:scale-105"
          style={{
            background: featured
              ? "linear-gradient(135deg, var(--gold), #e8c96b)"
              : "rgba(255,255,255,0.08)",
            color: featured ? "var(--navy)" : "white",
            border: featured ? "none" : "1px solid rgba(255,255,255,0.15)",
          }}
          onClick={() => navigate(`/pay/${id}`)}
        >
          <Icon name="ShoppingCart" size={14} />
          Купить
        </button>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  const [advice, setAdvice] = useState("");

  const getRandomAdvice = () => {
    const newAdvice =
      RANDOM_ADVICE[Math.floor(Math.random() * RANDOM_ADVICE.length)];
    setAdvice(newAdvice);
  };

  return (
    <section
      id="services"
      className="py-24 px-6"
      style={{ background: "var(--navy)" }}
    >
      <div className="max-w-7xl mx-auto">
        <RevealSection>
          <div className="text-center mb-6">
            <p
              className="text-xs font-bold tracking-[0.3em] uppercase mb-3"
              style={{ color: "var(--gold)" }}
            >
              <Icon name="Gift" size={14} className="inline mr-1 -mt-0.5" />
              Поддержи проект и улыбнись
            </p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-white mb-4">
              Забавные услуги
            </h2>
            <span className="gold-line mx-auto block" />
            <p
              className="mt-4 max-w-2xl mx-auto text-base"
              style={{ color: "rgba(255,255,255,0.45)" }}
            >
              Хотите поддержать проект и получить что-то интересное? У нас есть
              услуги за символическую плату (100–300 рублей).
            </p>
          </div>
        </RevealSection>

        <RevealSection>
          <div className="max-w-md mx-auto mb-12">
            <ScratchCard />
          </div>
        </RevealSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {SERVICES.map((service) => (
            <RevealSection key={service.id}>
              <ServiceCard {...service} />
            </RevealSection>
          ))}
        </div>

        <RevealSection>
          <div
            className="rounded-3xl p-8 text-center border"
            style={{
              background: "rgba(201,168,76,0.06)",
              borderColor: "rgba(201,168,76,0.2)",
            }}
          >
            <Icon
              name="Lightbulb"
              size={32}
              className="mx-auto mb-3"
              style={{ color: "var(--gold)" }}
            />
            <h3 className="font-bold text-white text-lg mb-2">
              Генератор советов
            </h3>
            <p
              className="text-sm mb-4"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              Нажми кнопку и получи случайный финансовый совет
            </p>

            {advice && (
              <div
                className="mb-4 p-4 rounded-2xl transition-all"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(201,168,76,0.2)",
                }}
              >
                <p
                  className="text-base font-medium italic"
                  style={{ color: "var(--gold)" }}
                >
                  «{advice}»
                </p>
              </div>
            )}

            <button
              onClick={getRandomAdvice}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all hover:scale-105"
              style={{
                background: "linear-gradient(135deg, var(--gold), #e8c96b)",
                color: "var(--navy)",
              }}
            >
              <Icon name="Sparkles" size={16} />
              Хочу совет
            </button>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
