import { useState, useRef, useCallback } from "react";
import Icon from "@/components/ui/icon";
import { SERVICES, CARD_PRIZES, RANDOM_ADVICE, SERVICES_TITLE, SERVICES_SUBTITLE, SIRIUS_LOGO_URL } from "./data";
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

function CardChip() {
  return (
    <div className="w-12 h-9 rounded-md overflow-hidden" style={{ background: "linear-gradient(135deg, #d4a843, #f0d06e, #c9a23a)" }}>
      <div className="w-full h-full grid grid-cols-3 grid-rows-3 gap-px p-0.5">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="rounded-sm" style={{ background: "rgba(180,140,40,0.6)", border: "0.5px solid rgba(255,220,100,0.4)" }} />
        ))}
      </div>
    </div>
  );
}

function ContactlessIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="rotate-90">
      <path d="M12 6C8.7 6 6 8.7 6 12" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
      <path d="M12 2C6.5 2 2 6.5 2 12" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
      <path d="M12 10C10.9 10 10 10.9 10 12" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    </svg>
  );
}

function WatermarkPattern() {
  const items = [];
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 12; col++) {
      items.push(
        <span
          key={`${row}-${col}`}
          className="absolute text-[8px] font-bold select-none pointer-events-none"
          style={{
            left: `${col * 9}%`,
            top: `${row * 14}%`,
            transform: "rotate(-25deg)",
            color: "rgba(255,255,255,0.04)",
            letterSpacing: "1px",
          }}
        >
          С55
        </span>
      );
    }
  }
  return <div className="absolute inset-0 overflow-hidden">{items}</div>;
}

function ScratchCard() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [revealed, setRevealed] = useState(false);
  const [prize, setPrize] = useState(
    () => CARD_PRIZES[Math.floor(Math.random() * CARD_PRIZES.length)]
  );
  const [key, setKey] = useState(0);
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

    const grad = ctx.createLinearGradient(0, 0, w, h);
    grad.addColorStop(0, "#1a1a4e");
    grad.addColorStop(0.5, "#2a1a5e");
    grad.addColorStop(1, "#1a2a6e");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);

    ctx.fillStyle = "rgba(201,168,76,0.15)";
    for (let x = -20; x < w + 20; x += 12) {
      for (let y = -20; y < h + 20; y += 12) {
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(-0.4);
        ctx.font = "6px Arial";
        ctx.fillText("С55", 0, 0);
        ctx.restore();
      }
    }

    ctx.fillStyle = "rgba(255,255,255,0.12)";
    ctx.beginPath();
    ctx.arc(w * 0.8, h * 0.3, 40, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(w * 0.2, h * 0.7, 30, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = "rgba(201,168,76,0.2)";
    ctx.lineWidth = 0.5;
    for (let i = 0; i < 6; i++) {
      ctx.beginPath();
      ctx.moveTo(0, (h / 6) * i);
      ctx.bezierCurveTo(w * 0.3, (h / 6) * i + 15, w * 0.7, (h / 6) * i - 15, w, (h / 6) * i);
      ctx.stroke();
    }

    ctx.fillStyle = "rgba(255,255,255,0.7)";
    ctx.font = "bold 16px Montserrat, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("✨ Сотри и узнай удачу! ✨", w / 2, h / 2 - 8);
    ctx.font = "11px Montserrat, sans-serif";
    ctx.fillStyle = "rgba(255,255,255,0.4)";
    ctx.fillText("Проведи пальцем или мышкой", w / 2, h / 2 + 14);
  }, [key]);

  const scratch = (e: React.MouseEvent | React.TouchEvent) => {
    const canvas = canvasRef.current;
    if (!canvas || revealed) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const pos = getPos(e, canvas);
    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(pos.x, pos.y, 22, 0, Math.PI * 2);
    ctx.fill();

    scratchedPixels.current += 1;
    if (scratchedPixels.current > 35) {
      setRevealed(true);
    }
  };

  const resetCard = () => {
    setRevealed(false);
    scratchedPixels.current = 0;
    setPrize(CARD_PRIZES[Math.floor(Math.random() * CARD_PRIZES.length)]);
    setKey((k) => k + 1);
  };

  return (
    <div
      className="rounded-2xl overflow-hidden relative"
      style={{
        background: "linear-gradient(135deg, #1a0a3e, #2d1b69, #0d1b4e)",
        boxShadow: "0 12px 50px rgba(45,27,105,0.4), 0 0 30px rgba(201,168,76,0.15), inset 0 1px 0 rgba(255,255,255,0.1)",
        border: "1px solid rgba(201,168,76,0.3)",
        aspectRatio: "1.586",
        maxWidth: "440px",
      }}
    >
      <WatermarkPattern />

      <div className="relative z-10 p-5 h-full flex flex-col justify-between" style={{ minHeight: "270px" }}>
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <img
              src={SIRIUS_LOGO_URL}
              alt="Сириус 55"
              className="h-10 rounded"
              style={{ filter: "brightness(1.1)" }}
            />
          </div>
          <div className="flex items-center gap-2">
            <ContactlessIcon />
            <span className="text-[10px] font-bold tracking-wider" style={{ color: "rgba(255,255,255,0.5)" }}>
              PREMIUM
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3 mt-3">
          <CardChip />
          <div className="flex-1" />
        </div>

        <div
          className="relative rounded-xl overflow-hidden my-3"
          style={{ height: "90px" }}
        >
          <div className="absolute inset-0 flex items-center justify-center p-4 text-center">
            <div className={`transition-all duration-500 ${revealed ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}>
              <p className="text-sm font-bold mb-2" style={{ color: "var(--gold)" }}>
                {prize}
              </p>
              <button
                onClick={resetCard}
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold transition-all hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, var(--gold), #e8c96b)",
                  color: "var(--navy)",
                }}
              >
                <Icon name="RotateCcw" size={12} />
                Попробовать снова
              </button>
            </div>
          </div>

          {!revealed && (
            <canvas
              key={key}
              ref={initCanvas}
              className="absolute inset-0 w-full h-full cursor-pointer"
              style={{ touchAction: "none" }}
              onMouseDown={() => { isDrawing.current = true; }}
              onMouseUp={() => { isDrawing.current = false; }}
              onMouseLeave={() => { isDrawing.current = false; }}
              onMouseMove={(e) => { if (isDrawing.current) scratch(e); }}
              onTouchStart={(e) => { e.preventDefault(); isDrawing.current = true; scratch(e); }}
              onTouchMove={(e) => { e.preventDefault(); scratch(e); }}
              onTouchEnd={() => { isDrawing.current = false; }}
            />
          )}
        </div>

        <div className="flex items-end justify-between">
          <div>
            <p className="font-mono text-base tracking-[3px] font-medium text-white/80">
              5536 •••• •••• 7788
            </p>
            <div className="flex items-center gap-4 mt-1.5">
              <div>
                <p className="text-[7px] uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.3)" }}>VALID THRU</p>
                <p className="text-xs font-mono text-white/60">03/28</p>
              </div>
              <div>
                <p className="text-[7px] uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.3)" }}>CARDHOLDER</p>
                <p className="text-xs font-mono text-white/60">SIRIUS 55 / STUDENT</p>
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="flex gap-0.5">
              <div className="w-6 h-6 rounded-full" style={{ background: "#eb001b", opacity: 0.8 }} />
              <div className="w-6 h-6 rounded-full -ml-2.5" style={{ background: "#f79e1b", opacity: 0.8 }} />
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute top-0 right-0 w-32 h-32 pointer-events-none"
        style={{
          background: "radial-gradient(circle at top right, rgba(220,50,80,0.15), transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-40 h-40 pointer-events-none"
        style={{
          background: "radial-gradient(circle at bottom left, rgba(201,168,76,0.1), transparent 70%)",
        }}
      />
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
              <Icon name="FlaskConical" size={14} className="inline mr-1 -mt-0.5" />
              {SERVICES_SUBTITLE}
            </p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-white mb-4">
              {SERVICES_TITLE}{" "}
              <span className="inline-block text-3xl">🔬</span>
            </h2>
            <span className="gold-line mx-auto block" />
            <p
              className="mt-4 max-w-2xl mx-auto text-base"
              style={{ color: "rgba(255,255,255,0.45)" }}
            >
              Хотите поддержать проект и получить что-то интересное? У нас есть
              услуги за символическую плату. Стирайте карту, получайте советы!
            </p>
          </div>
        </RevealSection>

        <RevealSection>
          <div className="flex justify-center mb-12">
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
              Генератор финансовой мудрости 🧠
            </h3>
            <p
              className="text-sm mb-4"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              Нажми кнопку и получи случайный финансовый совет. Бесплатно!
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
