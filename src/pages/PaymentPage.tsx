import { useParams, useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { SERVICES, PAYMENT_CARD, PAYMENT_BANK, CONTACTS } from "@/components/sections/data";

export default function PaymentPage() {
  const { serviceId } = useParams();
  const navigate = useNavigate();

  const service = SERVICES.find((s) => s.id === serviceId);

  if (!service) {
    return (
      <div
        className="min-h-screen flex flex-col items-center justify-center px-6"
        style={{ background: "var(--navy)" }}
      >
        <Icon name="AlertCircle" size={48} style={{ color: "var(--gold)" }} />
        <h1 className="font-cormorant text-3xl font-bold text-white mt-4 mb-2">
          Услуга не найдена
        </h1>
        <p
          className="text-sm mb-6"
          style={{ color: "rgba(255,255,255,0.5)" }}
        >
          Возможно, вы перешли по неверной ссылке
        </p>
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all hover:scale-105"
          style={{
            background: "linear-gradient(135deg, var(--gold), #e8c96b)",
            color: "var(--navy)",
          }}
        >
          <Icon name="ArrowLeft" size={16} />
          На главную
        </button>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen py-20 px-6 font-montserrat"
      style={{ background: "var(--navy)" }}
    >
      <div className="max-w-lg mx-auto">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-sm mb-8 transition-colors hover:text-white"
          style={{ color: "rgba(255,255,255,0.5)" }}
        >
          <Icon name="ArrowLeft" size={16} />
          Вернуться на главную
        </button>

        <div
          className="rounded-3xl border overflow-hidden"
          style={{
            background: "rgba(255,255,255,0.04)",
            borderColor: "rgba(201,168,76,0.25)",
          }}
        >
          <div
            className="p-6 border-b"
            style={{
              background: "linear-gradient(135deg, rgba(201,168,76,0.1), rgba(201,168,76,0.03))",
              borderColor: "rgba(201,168,76,0.15)",
            }}
          >
            <div className="flex items-start gap-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(201,168,76,0.15)" }}
              >
                <Icon
                  name={service.icon}
                  size={22}
                  style={{ color: "var(--gold)" }}
                />
              </div>
              <div>
                <h1 className="font-bold text-xl text-white mb-1">
                  {service.title}
                </h1>
                <p
                  className="text-sm"
                  style={{ color: "rgba(255,255,255,0.45)" }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div
              className="rounded-2xl p-5 mb-6 text-center"
              style={{
                background: "rgba(201,168,76,0.08)",
                border: "1px solid rgba(201,168,76,0.2)",
              }}
            >
              <p
                className="text-xs uppercase tracking-wider mb-1"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                К оплате
              </p>
              <p
                className="font-bold text-4xl"
                style={{ color: "var(--gold)" }}
              >
                {service.price} руб.
              </p>
            </div>

            <div className="flex flex-col gap-4 mb-6">
              <h2 className="font-bold text-white text-base">
                <Icon name="CreditCard" size={16} className="inline mr-2 -mt-0.5" style={{ color: "var(--gold)" }} />
                Инструкция по оплате
              </h2>

              <div className="flex flex-col gap-3">
                <div
                  className="flex items-start gap-3 p-4 rounded-2xl"
                  style={{ background: "rgba(255,255,255,0.04)" }}
                >
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold"
                    style={{ background: "var(--gold)", color: "var(--navy)" }}
                  >
                    1
                  </div>
                  <div>
                    <p className="text-sm text-white font-medium mb-1">
                      Переведите {service.price} руб. на карту {PAYMENT_BANK}
                    </p>
                    <div
                      className="flex items-center gap-2 px-3 py-2 rounded-xl mt-2"
                      style={{
                        background: "rgba(201,168,76,0.08)",
                        border: "1px solid rgba(201,168,76,0.2)",
                      }}
                    >
                      <span
                        className="font-mono font-bold text-lg tracking-widest"
                        style={{ color: "var(--gold)" }}
                      >
                        {PAYMENT_CARD}
                      </span>
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(
                            PAYMENT_CARD.replace(/\s/g, "")
                          );
                        }}
                        className="ml-auto p-1.5 rounded-lg transition-all hover:bg-white/10"
                        title="Копировать"
                      >
                        <Icon
                          name="Copy"
                          size={16}
                          style={{ color: "rgba(255,255,255,0.5)" }}
                        />
                      </button>
                    </div>
                  </div>
                </div>

                <div
                  className="flex items-start gap-3 p-4 rounded-2xl"
                  style={{ background: "rgba(255,255,255,0.04)" }}
                >
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold"
                    style={{ background: "var(--gold)", color: "var(--navy)" }}
                  >
                    2
                  </div>
                  <div>
                    <p className="text-sm text-white font-medium">
                      В комментарии к переводу укажите:
                    </p>
                    <p
                      className="text-sm mt-1 font-mono"
                      style={{ color: "var(--gold)" }}
                    >
                      «Услуга: {service.title}» и ваш Telegram
                    </p>
                  </div>
                </div>

                <div
                  className="flex items-start gap-3 p-4 rounded-2xl"
                  style={{ background: "rgba(255,255,255,0.04)" }}
                >
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold"
                    style={{ background: "var(--gold)", color: "var(--navy)" }}
                  >
                    3
                  </div>
                  <p className="text-sm text-white font-medium">
                    Мы пришлём результат в течение дня
                  </p>
                </div>
              </div>
            </div>

            <a
              href={CONTACTS.telegram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-full font-bold text-sm transition-all hover:scale-105"
              style={{
                background: "linear-gradient(135deg, var(--gold), #e8c96b)",
                color: "var(--navy)",
              }}
            >
              <Icon name="Send" size={16} />
              Я перевёл — написать в Telegram
            </a>

            <p
              className="text-center text-xs mt-4"
              style={{ color: "rgba(255,255,255,0.3)" }}
            >
              Если возникнут вопросы — напишите нам в Telegram или WhatsApp
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
