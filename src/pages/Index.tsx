import { useState, type FormEvent } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/fc5369c8-d3e8-4c62-ae1d-9b7a26b18849/files/0f588989-bb3e-4496-8f77-57734307cbfa.jpg";

const plans = [
  {
    name: "Базовый",
    price: "2 900",
    period: "/ мес",
    description: "Идеально для старта",
    features: [
      "8 групповых занятий",
      "Доступ к тренажёрному залу",
      "Раздевалка и душ",
      "Мобильное приложение",
    ],
    featured: false,
    cta: "Выбрать план",
  },
  {
    name: "Стандарт",
    price: "4 900",
    period: "/ мес",
    description: "Самый популярный выбор",
    features: [
      "Безлимитные групповые занятия",
      "Доступ к тренажёрному залу 24/7",
      "2 персональные тренировки",
      "Консультация нутрициолога",
      "Фитнес-тестирование",
    ],
    featured: true,
    cta: "Выбрать план",
  },
  {
    name: "Премиум",
    price: "8 900",
    period: "/ мес",
    description: "Максимальный результат",
    features: [
      "Всё из Стандарта",
      "8 персональных тренировок",
      "Персональный план питания",
      "Приоритетная запись",
      "Гостевые визиты (2/мес)",
      "Спа-зона и восстановление",
    ],
    featured: false,
    cta: "Выбрать план",
  },
];

const stats = [
  { value: "12+", label: "лет опыта" },
  { value: "3 200", label: "клиентов" },
  { value: "47", label: "тренеров" },
  { value: "98%", label: "довольных" },
];

export default function Index() {
  const [form, setForm] = useState({ name: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (form.name && form.phone) {
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#111111", color: "#F2F2F2" }}>

      {/* NAV */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5"
        style={{ background: "linear-gradient(to bottom, rgba(17,17,17,0.95), transparent)", backdropFilter: "blur(12px)" }}
      >
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full pulse-dot" style={{ backgroundColor: "#FF6B00" }} />
          <span className="font-heading text-xl font-bold tracking-widest text-white uppercase">Iron Forge</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm" style={{ color: "#888", fontFamily: "'Golos Text', sans-serif" }}>
          <a href="#plans" className="hover:text-white transition-colors">Тарифы</a>
          <a href="#signup" className="hover:text-white transition-colors">Записаться</a>
          <a href="#footer" className="hover:text-white transition-colors">Контакты</a>
        </div>
        <a href="#signup" className="btn-orange px-5 py-2 text-sm rounded" style={{ fontFamily: "'Oswald', sans-serif" }}>
          Пробное занятие
        </a>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={HERO_IMAGE}
            alt="Iron Forge Studio"
            className="w-full h-full object-cover"
            style={{ filter: "brightness(0.35)" }}
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(135deg, rgba(17,17,17,0.7) 0%, rgba(255,107,0,0.05) 50%, rgba(17,17,17,0.9) 100%)" }}
          />
          <div
            className="absolute bottom-0 left-0 right-0 h-40"
            style={{ background: "linear-gradient(to top, #111111, transparent)" }}
          />
        </div>

        <div className="relative z-10 container mx-auto px-8 pt-24">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6 animate-fade-in-up delay-100">
              <span className="orange-line" />
              <span className="text-xs tracking-[0.3em] uppercase" style={{ color: "#FF6B00", fontFamily: "'Golos Text', sans-serif" }}>
                Фитнес-студия в Москве
              </span>
            </div>
            <h1
              className="font-heading font-bold uppercase leading-none mb-6 animate-fade-in-up delay-200"
              style={{ fontSize: "clamp(3rem, 8vw, 7rem)", letterSpacing: "0.02em" }}
            >
              Стань<br />
              <span style={{ color: "#FF6B00" }}>сильнее</span><br />
              каждый день
            </h1>
            <p
              className="text-lg mb-10 max-w-lg animate-fade-in-up delay-300"
              style={{ color: "#AAA", fontFamily: "'Golos Text', sans-serif", lineHeight: 1.7 }}
            >
              Профессиональные тренеры, современное оборудование и атмосфера, которая мотивирует идти дальше своих границ.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-up delay-400">
              <a href="#signup" className="btn-orange px-8 py-4 text-base rounded inline-flex items-center gap-2">
                Записаться бесплатно
                <Icon name="ArrowRight" size={18} />
              </a>
              <a
                href="#plans"
                className="px-8 py-4 text-base rounded inline-flex items-center gap-2 transition-all hover:text-white"
                style={{ border: "1px solid #333", color: "#AAA", fontFamily: "'Golos Text', sans-serif" }}
              >
                Смотреть тарифы
              </a>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="absolute bottom-12 left-0 right-0 z-10 animate-fade-in-up delay-600">
          <div className="container mx-auto px-8">
            <div
              className="grid grid-cols-2 md:grid-cols-4 gap-px overflow-hidden rounded-xl"
              style={{ border: "1px solid #2D2D2D", background: "#2D2D2D" }}
            >
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col items-center py-5 px-4" style={{ background: "#1A1A1A" }}>
                  <span className="font-heading text-3xl font-bold" style={{ color: "#FF6B00" }}>{s.value}</span>
                  <span className="text-xs mt-1" style={{ color: "#666", fontFamily: "'Golos Text', sans-serif" }}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PLANS */}
      <section id="plans" className="py-24 px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="orange-line" />
              <span className="text-xs tracking-[0.3em] uppercase" style={{ color: "#FF6B00", fontFamily: "'Golos Text', sans-serif" }}>
                Наши тарифы
              </span>
              <span className="orange-line" />
            </div>
            <h2 className="font-heading font-bold text-5xl md:text-6xl uppercase mb-4">
              Выбери свой путь
            </h2>
            <p className="text-base max-w-md mx-auto" style={{ color: "#666", fontFamily: "'Golos Text', sans-serif" }}>
              Первое занятие — бесплатно для всех новых клиентов
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`card-plan rounded-2xl p-8 relative flex flex-col ${plan.featured ? "featured" : ""}`}
              >
                {plan.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="btn-orange text-xs px-4 py-1 rounded-full">
                      Популярный
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="font-heading text-2xl uppercase font-bold text-white mb-1">{plan.name}</h3>
                  <p className="text-sm" style={{ color: "#666", fontFamily: "'Golos Text', sans-serif" }}>{plan.description}</p>
                </div>

                <div className="flex items-baseline gap-1 mb-8">
                  <span className="font-heading text-5xl font-bold" style={{ color: plan.featured ? "#FF6B00" : "#F2F2F2" }}>
                    {plan.price}₽
                  </span>
                  <span className="text-sm" style={{ color: "#555", fontFamily: "'Golos Text', sans-serif" }}>{plan.period}</span>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <Icon name="Check" size={16} className="mt-0.5 flex-shrink-0" style={{ color: "#FF6B00" }} />
                      <span className="text-sm" style={{ color: "#AAA", fontFamily: "'Golos Text', sans-serif" }}>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#signup"
                  className={`text-center py-3 rounded-lg text-sm font-medium transition-all block ${plan.featured ? "btn-orange" : "hover:border-orange-500 hover:text-white"}`}
                  style={plan.featured ? {} : {
                    border: "1px solid #2D2D2D",
                    color: "#AAA",
                    fontFamily: "'Oswald', sans-serif",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SIGNUP FORM */}
      <section id="signup" className="py-24 px-8 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse at center, rgba(255,107,0,0.06) 0%, transparent 70%)" }}
        />
        <div className="container mx-auto relative z-10">
          <div className="max-w-xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="orange-line" />
                <span className="text-xs tracking-[0.3em] uppercase" style={{ color: "#FF6B00", fontFamily: "'Golos Text', sans-serif" }}>
                  Первый шаг
                </span>
                <span className="orange-line" />
              </div>
              <h2 className="font-heading font-bold text-5xl uppercase mb-4">
                Пробное занятие
              </h2>
              <p className="text-base" style={{ color: "#666", fontFamily: "'Golos Text', sans-serif" }}>
                Оставьте заявку — мы свяжемся в течение часа и подберём удобное время
              </p>
            </div>

            {!submitted ? (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl p-8 space-y-4"
                style={{ background: "#1A1A1A", border: "1px solid #2D2D2D" }}
              >
                <div>
                  <label
                    className="block text-xs uppercase tracking-widest mb-2"
                    style={{ color: "#555", fontFamily: "'Oswald', sans-serif" }}
                  >
                    Ваше имя
                  </label>
                  <input
                    type="text"
                    placeholder="Как вас зовут?"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-lg text-base outline-none transition-all"
                    style={{ background: "#141414", border: "1px solid #2D2D2D", color: "#F2F2F2", fontFamily: "'Golos Text', sans-serif" }}
                  />
                </div>
                <div>
                  <label
                    className="block text-xs uppercase tracking-widest mb-2"
                    style={{ color: "#555", fontFamily: "'Oswald', sans-serif" }}
                  >
                    Телефон
                  </label>
                  <input
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-lg text-base outline-none transition-all"
                    style={{ background: "#141414", border: "1px solid #2D2D2D", color: "#F2F2F2", fontFamily: "'Golos Text', sans-serif" }}
                  />
                </div>
                <button
                  type="submit"
                  className="btn-orange w-full py-4 text-base rounded-lg mt-2 flex items-center justify-center gap-2"
                >
                  Записаться на занятие
                  <Icon name="ArrowRight" size={18} />
                </button>
                <p className="text-center text-xs" style={{ color: "#444", fontFamily: "'Golos Text', sans-serif" }}>
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            ) : (
              <div
                className="rounded-2xl p-12 text-center animate-fade-in"
                style={{ background: "#1A1A1A", border: "1px solid #FF6B00" }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                  style={{ background: "rgba(255,107,0,0.15)" }}
                >
                  <Icon name="CheckCircle" size={32} style={{ color: "#FF6B00" }} />
                </div>
                <h3 className="font-heading text-3xl uppercase font-bold text-white mb-3">
                  Заявка принята!
                </h3>
                <p style={{ color: "#888", fontFamily: "'Golos Text', sans-serif" }}>
                  Мы позвоним вам в ближайшее время и подберём удобное время для пробного занятия.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="footer" className="py-12 px-8" style={{ borderTop: "1px solid #1E1E1E" }}>
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-10 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#FF6B00" }} />
                <span className="font-heading text-lg font-bold tracking-widest uppercase">Iron Forge</span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "#555", fontFamily: "'Golos Text', sans-serif" }}>
                Профессиональная фитнес-студия для тех, кто серьёзно относится к своему телу и здоровью.
              </p>
            </div>

            <div>
              <h4 className="font-heading text-sm uppercase tracking-widest mb-4" style={{ color: "#FF6B00" }}>
                Контакты
              </h4>
              <ul className="space-y-3">
                {[
                  { icon: "MapPin", text: "Москва, ул. Тверская, 15" },
                  { icon: "Phone", text: "+7 (495) 123-45-67" },
                  { icon: "Mail", text: "hello@ironforge.ru" },
                ].map((item) => (
                  <li key={item.text} className="flex items-center gap-3">
                    <Icon name={item.icon} size={14} style={{ color: "#FF6B00", flexShrink: 0 }} />
                    <span className="text-sm" style={{ color: "#666", fontFamily: "'Golos Text', sans-serif" }}>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-heading text-sm uppercase tracking-widest mb-4" style={{ color: "#FF6B00" }}>
                Режим работы
              </h4>
              <ul className="space-y-2">
                {[
                  { day: "Пн — Пт", time: "06:00 — 23:00" },
                  { day: "Суббота", time: "08:00 — 22:00" },
                  { day: "Воскресенье", time: "09:00 — 21:00" },
                ].map((item) => (
                  <li key={item.day} className="flex justify-between text-sm">
                    <span style={{ color: "#555", fontFamily: "'Golos Text', sans-serif" }}>{item.day}</span>
                    <span style={{ color: "#AAA", fontFamily: "'Golos Text', sans-serif" }}>{item.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div
            className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4"
            style={{ borderTop: "1px solid #1E1E1E" }}
          >
            <p className="text-xs" style={{ color: "#3A3A3A", fontFamily: "'Golos Text', sans-serif" }}>
              © 2026 Iron Forge. Все права защищены.
            </p>
            <div className="flex gap-4">
              {["inst", "vk", "yt"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-8 h-8 rounded flex items-center justify-center transition-all hover:scale-110"
                  style={{ background: "#1A1A1A", border: "1px solid #2D2D2D" }}
                >
                  <Icon name="ExternalLink" size={12} style={{ color: "#555" }} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}