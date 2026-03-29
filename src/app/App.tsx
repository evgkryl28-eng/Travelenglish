import { Plane, Clock, CreditCard, Users, MapPin, Coffee, AlertCircle, Globe, Gift, CheckCircle } from 'lucide-react';

export default function App() {
  const scrollToRegistration = () => {
    const element = document.getElementById('registration');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const programItems = [
    {
      icon: <Plane className="w-6 h-6" />,
      title: "Аэропорт без стресса",
      description: "Регистрация, паспортный контроль, вопросы на таможне — всё на английском.",
      result: "Уверенность уже в первые часы за границей."
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "В отеле: заселение и помощь",
      description: "Как попросить сменить номер, вызвать уборку или спросить про Wi-Fi.",
      result: "Практика вежливых фраз и повседневной лексики."
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: "Кафе и рестораны",
      description: "Заказ еды, вопросы про аллергены, счёт и чаевые.",
      result: "Развитие гастрономического словаря и уверенности в общении."
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "На улице: ориентирование и просьбы",
      description: "Как спросить дорогу, вызвать такси или найти аптеку.",
      result: "Понимание устной речи и произношения в реальных ситуациях."
    },
    {
      icon: <AlertCircle className="w-6 h-6" />,
      title: "Экстренные случаи",
      description: "Потеря вещей, болезнь, помощь полиции — всё это на английском.",
      result: "Важные фразы, которые могут спасти отпуск."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Туризм и развлечения",
      description: "Покупка билетов, экскурсии, общение с гидами, музеи и парки.",
      result: "Погружение в культурный контекст через язык."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Дружба в путешествиях",
      description: "Как познакомиться с другими детьми или подростками за границей.",
      result: "Игровая практика диалогов и неформального общения."
    },
    {
      icon: <Gift className="w-6 h-6" />,
      title: "Дипломный проект: «Мой идеальный отпуск»",
      description: "Ребёнок планирует воображаемое путешествие и представляет его на английском.",
      result: "Развитие связной речи и творческого самовыражения."
    }
  ];

  const benefits = [
    "Акцент на практическую, живую речь, а не на грамматику ради грамматики",
    "Все ситуации — из реальной жизни путешественника",
    "Интерактивные задания: ролевые игры, аудиоситуации, мини-квесты",
    "Ребёнок выходит на уровень A2–B1 (Pre-Intermediate) за курс"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0e1a] via-[#131824] to-[#0a0e1a]">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#06d6a0]/10 via-transparent to-[#ff9f66]/10" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1621526326182-f6aa6145c5eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#06d6a0]/10 border border-[#06d6a0]/30 rounded-full mb-6">
              <Plane className="w-5 h-5 text-[#06d6a0]" />
              <span className="text-sm text-[#06d6a0]">Онлайн-курс</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-[#06d6a0] via-[#ffd166] to-[#ff9f66] bg-clip-text text-transparent">
              Английский для путешествий
            </h1>

            <p className="text-lg sm:text-xl text-[#8a93ac] mb-8 leading-relaxed">
              Мечтаете свободно общаться за границей — от заказа кофе до поиска утраченного чемодана?
              Этот курс научит вашего ребёнка реальному разговорному английскому, который пригодится
              в отпуске, поездках и будущих путешествиях!
            </p>

            <button
              onClick={scrollToRegistration}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#06d6a0] to-[#06d6a0]/80 text-[#0a0e1a] rounded-xl hover:shadow-[0_0_30px_rgba(6,214,160,0.5)] transition-all duration-300 transform hover:scale-105"
            >
              Записаться на курс
              <Plane className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl mb-4 bg-gradient-to-r from-[#ffd166] to-[#ff9f66] bg-clip-text text-transparent">
              Для кого курс
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-[#131824] border border-[#06d6a0]/20 rounded-2xl p-8 hover:border-[#06d6a0]/50 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-[#06d6a0] to-[#06d6a0]/60 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-[#0a0e1a]" />
              </div>
              <h3 className="text-xl mb-2 text-[#06d6a0]">Первая группа</h3>
              <p className="text-[#8a93ac] text-lg">4–5 класс</p>
            </div>

            <div className="bg-[#131824] border border-[#ff9f66]/20 rounded-2xl p-8 hover:border-[#ff9f66]/50 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-[#ff9f66] to-[#ff9f66]/60 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-[#0a0e1a]" />
              </div>
              <h3 className="text-xl mb-2 text-[#ff9f66]">Вторая группа</h3>
              <p className="text-[#8a93ac] text-lg">6–8 класс</p>
            </div>
          </div>
        </div>
      </section>

      {/* Program */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-[#131824]/50 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl mb-4 bg-gradient-to-r from-[#06d6a0] to-[#ffd166] bg-clip-text text-transparent">
              Программа курса
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {programItems.map((item, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-[#131824] to-[#1e2536] border border-white/10 rounded-2xl p-6 hover:border-[#06d6a0]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,214,160,0.15)]"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#06d6a0]/20 to-[#06d6a0]/10 rounded-xl flex items-center justify-center text-[#06d6a0] group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg mb-2 text-[#e8eaf0]">{item.title}</h3>
                    <p className="text-[#8a93ac] text-sm mb-3">{item.description}</p>
                    <div className="flex items-start gap-2">
                      <span className="text-[#06d6a0] text-xl mt-0.5">👉</span>
                      <p className="text-[#06d6a0] text-sm italic">{item.result}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Special */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl mb-4 bg-gradient-to-r from-[#ffd166] to-[#ff9f66] bg-clip-text text-transparent">
              Почему этот курс особенный?
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-[#131824] border border-[#ffd166]/20 rounded-xl p-6 hover:border-[#ffd166]/50 transition-all duration-300"
              >
                <CheckCircle className="w-6 h-6 text-[#ffd166] flex-shrink-0 mt-1" />
                <p className="text-[#e8eaf0]">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-[#131824]/50 to-transparent">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-[#131824] to-[#1e2536] border border-[#06d6a0]/20 rounded-2xl p-8">
            <h2 className="text-2xl sm:text-3xl mb-6 text-[#06d6a0]">
              Что потребуется
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-[#06d6a0] text-xl">•</span>
                <span className="text-[#e8eaf0]">Стационарный компьютер или ноутбук с наушниками и микрофоном</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#06d6a0] text-xl">•</span>
                <span className="text-[#e8eaf0]">Стабильный интернет и Zoom</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Schedule & Pricing */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Schedule */}
            <div className="bg-gradient-to-br from-[#131824] to-[#1e2536] border border-[#ff9f66]/20 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#ff9f66] to-[#ff9f66]/60 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-[#0a0e1a]" />
                </div>
                <h2 className="text-2xl text-[#ff9f66]">Расписание</h2>
              </div>

              <div className="space-y-4">
                <div className="bg-[#0a0e1a]/50 rounded-xl p-4 border border-[#ff9f66]/10">
                  <p className="text-[#e8eaf0]">Четверг, <span className="text-[#ff9f66]">15:00 (МСК)</span></p>
                  <p className="text-sm text-[#8a93ac] mt-1">группа 4–5 класс</p>
                </div>

                <div className="bg-[#0a0e1a]/50 rounded-xl p-4 border border-[#ff9f66]/10">
                  <p className="text-[#e8eaf0]">Пятница, <span className="text-[#ff9f66]">15:30 (МСК)</span></p>
                  <p className="text-sm text-[#8a93ac] mt-1">группа 6–8 класс</p>
                </div>
              </div>
            </div>

            {/* Pricing */}
            <div className="bg-gradient-to-br from-[#131824] to-[#1e2536] border border-[#ffd166]/20 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#ffd166] to-[#ffd166]/60 rounded-xl flex items-center justify-center">
                  <CreditCard className="w-6 h-6 text-[#0a0e1a]" />
                </div>
                <h2 className="text-2xl text-[#ffd166]">Стоимость</h2>
              </div>

              <div className="space-y-4">
                <div className="bg-[#0a0e1a]/50 rounded-xl p-4 border border-[#ffd166]/10">
                  <p className="text-sm text-[#8a93ac] mb-1">Полный курс (10 уроков)</p>
                  <p className="text-2xl text-[#e8eaf0]">12 000 <span className="text-[#ffd166]">руб</span></p>
                </div>

                <div className="bg-[#0a0e1a]/50 rounded-xl p-4 border border-[#ffd166]/10">
                  <p className="text-sm text-[#8a93ac] mb-1">Абонемент</p>
                  <p className="text-2xl text-[#e8eaf0]">1 300 <span className="text-[#ffd166]">руб</span> <span className="text-sm text-[#8a93ac]">/ урок</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="registration" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-[#131824]/80 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-[#06d6a0]/10 via-[#ffd166]/10 to-[#ff9f66]/10 border border-[#06d6a0]/30 rounded-3xl p-8 sm:p-12">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-[#ff9f66]/20 text-[#ff9f66] rounded-full text-sm mb-4">
                Набор открыт!
              </span>
              <h2 className="text-3xl sm:text-4xl mb-4 bg-gradient-to-r from-[#06d6a0] via-[#ffd166] to-[#ff9f66] bg-clip-text text-transparent">
                Места ограничены!
              </h2>
              <p className="text-[#e8eaf0] text-lg mb-2">
                Группы маленькие — максимум 6 детей, чтобы каждый получил внимание.
              </p>
              <p className="text-[#8a93ac] mb-8">
                Запишитесь сейчас — и следующее путешествие станет первым, где ваш ребёнок заговорит по-английски без страха!
              </p>
            </div>

            <button className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#06d6a0] via-[#ffd166] to-[#ff9f66] text-[#0a0e1a] rounded-2xl hover:shadow-[0_0_40px_rgba(6,214,160,0.6)] transition-all duration-300 transform hover:scale-105 text-lg">
              Записаться на курс
              <Plane className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[#8a93ac] text-sm">
            Английский для путешествий © 2026
          </p>
        </div>
      </footer>
    </div>
  );
}
