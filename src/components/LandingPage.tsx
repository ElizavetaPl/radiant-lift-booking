import { useState } from "react";
import { ArrowDown, ArrowRight, Award, Check, Clock3, FileCheck2, Heart, Menu, ShieldCheck, Sparkles, Star, X, type LucideIcon } from "lucide-react";

import beforeAfterImage from "@/assets/before-after.jpg";
import heroImage from "@/assets/hero-lifting.jpg";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { BookingDialog } from "@/components/BookingDialog";

const concerns = [
  ["01", "Контур теряет чёткость", "Появились брыли, второй подбородок, ткани словно «сползают» вниз."],
  ["02", "Лицо выглядит уставшим", "Тусклый тон, выраженные носогубные складки и мелкая сетка морщин."],
  ["03", "Страшно потерять себя", "Не хотите объёмов, замороженной мимики и заметных следов вмешательства."],
];

const guarantees: Array<[LucideIcon, string, string]> = [
  [Clock3, "Без реабилитации", "Возвращайтесь к привычному ритму сразу после визита."],
  [ShieldCheck, "Оригинальные препараты", "Сертифицированная упаковка вскрывается при вас."],
  [FileCheck2, "Медицинский договор", "Прозрачный протокол и официальная ответственность клиники."],
  [Heart, "Живая мимика", "Вы выглядите свежее, оставаясь безошибочно собой."],
];

const faqs = [
  ["Это больно?", "Перед процедурой наносится анестезирующий крем. Во время SMAS-лифтинга возможны локальные ощущения тепла и покалывания — врач регулирует параметры под вашу чувствительность."],
  ["Когда я увижу результат?", "Первый эффект подтяжки и сияния заметен после визита. Результат SMAS-лифтинга нарастает в течение 2–3 месяцев по мере обновления коллагенового каркаса."],
  ["Нужна ли реабилитация?", "Нет. Возможны кратковременное покраснение или лёгкая чувствительность кожи, которые обычно проходят в течение нескольких часов."],
  ["Насколько безопасно сочетать две процедуры?", "Протокол составляется врачом после очной диагностики и с учётом противопоказаний. Методики работают на разных уровнях и дополняют друг друга."],
  ["Кому процедура не подходит?", "Окончательное решение принимает врач. Среди ограничений — беременность и лактация, острые воспалительные процессы, некоторые аутоиммунные и онкологические заболевания."],
];

export function LandingPage() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const openBooking = () => { setMobileOpen(false); setBookingOpen(true); };

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-40 border-b border-border bg-background/90 backdrop-blur-xl">
        <div className="mx-auto grid h-16 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center px-5 sm:h-20 sm:px-8 lg:grid-cols-[1fr_auto_1fr]">
          <a href="#top" className="min-w-0 font-serif text-xl font-semibold tracking-[0.12em] sm:text-2xl">LUMIÈRE</a>
          <nav className="hidden items-center gap-8 text-xs text-muted-foreground lg:flex">
            <a href="#protocol" className="transition hover:text-foreground">О протоколе</a>
            <a href="#results" className="transition hover:text-foreground">Результат</a>
            <a href="#faq" className="transition hover:text-foreground">Вопросы</a>
          </nav>
          <div className="flex items-center justify-end gap-2">
            <span className="hidden items-center gap-2 text-xs text-muted-foreground sm:flex"><Award className="size-4 text-primary" /> Лицензированная клиника</span>
            <Button variant="luxury" size="sm" className="hidden xl:inline-flex" onClick={openBooking}>Записаться со скидкой</Button>
            <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Открыть меню" onClick={() => setMobileOpen((value) => !value)}>{mobileOpen ? <X /> : <Menu />}</Button>
          </div>
        </div>
        {mobileOpen && <nav className="border-t border-border bg-background px-5 py-5 lg:hidden"><div className="grid gap-4 text-sm"><a href="#protocol" onClick={() => setMobileOpen(false)}>О протоколе</a><a href="#results" onClick={() => setMobileOpen(false)}>Результат</a><a href="#faq" onClick={() => setMobileOpen(false)}>Вопросы</a><Button variant="luxury" size="luxury" onClick={openBooking}>Записаться со скидкой</Button></div></nav>}
      </header>

      <section id="top" className="relative min-h-[760px] pt-16 sm:min-h-[820px] sm:pt-20">
        <img src={heroImage} width={1536} height={1280} alt="Женщина с естественным сиянием кожи после процедуры" className="absolute inset-0 h-full w-full object-cover object-[67%_center]" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        <div className="relative mx-auto flex min-h-[700px] max-w-7xl items-center px-5 py-16 sm:min-h-[740px] sm:px-8">
          <div className="max-w-3xl">
            <p className="eyebrow mb-6">Авторский комбинированный протокол</p>
            <h1 className="max-w-3xl font-serif text-5xl font-medium leading-[0.94] sm:text-7xl lg:text-[5.7rem]">Лифтинг и сияние кожи за один визит</h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/80 sm:text-lg">Без операции, реабилитации и эффекта «перекачанного лица». Ультразвуковой SMAS-лифтинг укрепляет глубокий каркас, а премиальная биоревитализация возвращает коже качество и свет.</p>
            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <Button variant="luxury" size="luxury" onClick={openBooking}>Получить консультацию <ArrowRight /></Button>
              <p className="max-w-[240px] text-xs leading-relaxed text-muted-foreground">Бесплатно · 30 минут<br />Без обязательств</p>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-xs text-foreground/75"><span className="flex items-center gap-2"><Check className="size-4 text-primary" /> Медицинский договор</span><span className="flex items-center gap-2"><Check className="size-4 text-primary" /> Сертифицированные препараты</span></div>
          </div>
        </div>
        <a href="#concerns" aria-label="Перейти к следующему разделу" className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-muted-foreground transition hover:text-primary sm:block"><ArrowDown /></a>
      </section>

      <section id="concerns" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div><p className="eyebrow">Знакомые ощущения</p><h2 className="mt-4 font-serif text-5xl leading-none sm:text-6xl">Узнаёте себя?</h2><p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">Возрастные изменения не требуют менять лицо. Им нужен точный, своевременный ответ.</p></div>
          <div className="grid gap-px bg-border sm:grid-cols-3">
            {concerns.map(([number, title, copy]) => <article key={number} className="group min-h-64 bg-background p-6 transition-colors hover:bg-surface-raised sm:p-7"><span className="font-serif text-2xl text-primary">{number}</span><h3 className="mt-16 font-serif text-2xl leading-tight">{title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{copy}</p></article>)}
          </div>
        </div>
      </section>

      <section id="protocol" className="bg-surface-raised py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid items-end gap-7 border-b border-border pb-10 lg:grid-cols-2"><div><p className="eyebrow">Два уровня воздействия</p><h2 className="mt-4 font-serif text-5xl leading-none sm:text-6xl">Один продуманный протокол</h2></div><p className="max-w-lg text-sm leading-relaxed text-muted-foreground lg:justify-self-end">Не маскируем признаки возраста объёмом. Работаем с причиной — ослаблением глубокого каркаса — и одновременно восстанавливаем ресурс кожи.</p></div>
          <div className="grid gap-10 py-12 lg:grid-cols-2 lg:gap-20">
            <article className="grid grid-cols-[auto_1fr] gap-5"><span className="font-serif text-5xl text-primary">01</span><div><h3 className="font-serif text-3xl">SMAS-лифтинг</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">Сфокусированный ультразвук воздействует на мышечно-апоневротический слой. Ткани уплотняются, овал становится чётче, запускается обновление коллагена.</p><p className="mt-5 text-xs font-semibold uppercase text-champagne-soft">Глубина · 4,5 / 3,0 / 1,5 мм</p></div></article>
            <article className="grid grid-cols-[auto_1fr] gap-5"><span className="font-serif text-5xl text-primary">02</span><div><h3 className="font-serif text-3xl">Биоревитализация</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">Премиальный препарат насыщает дерму влагой и активными компонентами. Кожа приобретает плотность, ровный тон и естественное сияние.</p><p className="mt-5 text-xs font-semibold uppercase text-champagne-soft">Качество · Увлажнение · Свет</p></div></article>
          </div>
          <div className="relative h-64 overflow-hidden sm:h-96"><img src={beforeAfterImage} width={1536} height={1024} loading="lazy" alt="Сравнение до и после процедуры лифтинга и биоревитализации" className="h-full w-full object-cover" /></div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="text-center"><p className="eyebrow">Основа доверия</p><h2 className="mt-4 font-serif text-5xl sm:text-6xl">Красота без компромиссов</h2></div>
        <div className="mt-14 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">{guarantees.map(([Icon, title, copy]) => <article key={title} className="bg-background p-7"><Icon className="size-6 text-primary" /><h3 className="mt-8 font-serif text-2xl">{title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{copy}</p></article>)}</div>
      </section>

      <section id="results" className="border-y border-border bg-surface-raised py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="text-center"><p className="eyebrow">Истории пациенток</p><h2 className="mt-4 font-serif text-5xl sm:text-6xl">Результат, который замечают</h2></div>
          <div className="mt-14 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Елена", age: 43, city: "Москва", quote: "Коллеги спрашивали, где я так хорошо отдохнула. А я просто снова увидела в зеркале себя — только свежую и спокойную.", note: "Через 6 недель после процедуры" },
              { name: "Анна", age: 39, city: "Санкт-Петербург", quote: "Боялась, что лицо будет замороженным. Но мимика осталась живой, а овал — чётким. Это именно тот результат, который я хотела.", note: "Через 2 месяца после процедуры" },
              { name: "Марина", age: 47, city: "Казань", quote: "Процедура заняла чуть больше часа, а выгляжу так, будто выспалась несколько лет. Даже муж заметил разницу.", note: "Через 3 недели после процедуры" },
            ].map((item) => (
              <article key={item.name} className="bg-background p-7 sm:p-8">
                <div className="flex gap-1 text-primary" aria-label="Оценка 5 из 5"><Star className="size-4 fill-current" /><Star className="size-4 fill-current" /><Star className="size-4 fill-current" /><Star className="size-4 fill-current" /><Star className="size-4 fill-current" /></div>
                <blockquote className="mt-6 font-serif text-2xl leading-tight">«{item.quote}»</blockquote>
                <footer className="mt-8 text-sm leading-relaxed text-muted-foreground">
                  <p className="font-medium text-foreground">{item.name} · {item.age} года · {item.city}</p>
                  <p className="mt-1">— {item.note}. Результат индивидуален.</p>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid overflow-hidden border border-primary/40 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="p-7 sm:p-12 lg:p-16"><p className="eyebrow">Специальное предложение</p><h2 className="mt-4 max-w-xl font-serif text-5xl leading-none sm:text-6xl">Безоперационный лифтинг + сияние</h2><p className="mt-6 max-w-lg text-sm leading-relaxed text-muted-foreground">Персональная разметка, SMAS-лифтинг полного лица и биоревитализация премиальным препаратом за один визит.</p><ul className="mt-8 grid gap-3 text-sm sm:grid-cols-2"><li className="flex gap-2"><Check className="size-4 text-primary" /> До 120 минут</li><li className="flex gap-2"><Check className="size-4 text-primary" /> Без периода восстановления</li></ul></div>
          <div className="flex flex-col justify-between border-t border-primary/40 bg-primary/8 p-7 sm:p-12 lg:border-l lg:border-t-0"><div><span className="inline-flex border border-primary/40 px-3 py-1 text-xs uppercase text-primary">Осталось 7 мест по акции</span><p className="mt-8 text-sm text-muted-foreground line-through">60 000 ₽</p><p className="font-serif text-6xl text-primary sm:text-7xl">45 000 ₽</p><p className="mt-3 text-xs leading-relaxed text-muted-foreground">Стоимость фиксируется после консультации.</p></div><Button variant="luxury" size="luxury" className="mt-10 w-full" onClick={openBooking}>Зафиксировать цену <ArrowRight /></Button></div>
        </div>
      </section>

      <section id="faq" className="bg-surface-raised py-20 sm:py-28"><div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20"><div><p className="eyebrow">Без недосказанности</p><h2 className="mt-4 font-serif text-5xl sm:text-6xl">Частые вопросы</h2></div><Accordion type="single" collapsible className="border-t border-border">{faqs.map(([question, answer], index) => <AccordionItem key={question} value={`item-${index}`}><AccordionTrigger className="py-6 text-base hover:no-underline sm:text-lg"><span className="pr-5 font-medium">{question}</span></AccordionTrigger><AccordionContent className="max-w-2xl pb-6 text-sm leading-relaxed text-muted-foreground">{answer}</AccordionContent></AccordionItem>)}</Accordion></div></section>

      <section className="px-5 py-20 text-center sm:px-8 sm:py-28"><Sparkles className="mx-auto size-7 text-primary" /><h2 className="mx-auto mt-6 max-w-3xl font-serif text-5xl leading-none sm:text-7xl">Увидьте возможный результат до процедуры</h2><p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">На бесплатной консультации врач оценит анатомию лица и объяснит, какой эффект реалистичен именно для вас.</p><Button variant="luxury" size="luxury" className="mt-8" onClick={openBooking}>Записаться на консультацию <ArrowRight /></Button></section>

      <footer className="border-t border-border px-5 py-12 sm:px-8"><div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3"><div><p className="font-serif text-2xl tracking-[0.12em]">LUMIÈRE</p><p className="mt-3 text-xs text-muted-foreground">Клиника эстетической медицины</p></div><div className="text-sm"><p>+7 (000) 000-00-00</p><p className="mt-2 text-muted-foreground">Москва, адрес клиники</p></div><div className="text-xs leading-relaxed text-muted-foreground md:text-right"><a href="#privacy" className="underline underline-offset-4">Политика конфиденциальности</a><p className="mt-3">Имеются противопоказания. Необходима консультация специалиста. Информация на сайте не является публичной офертой.</p></div></div></footer>

      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-primary/30 bg-background/95 p-3 backdrop-blur sm:hidden"><Button variant="luxury" size="luxury" className="w-full" onClick={openBooking}>Получить консультацию</Button></div>
      <BookingDialog open={bookingOpen} onOpenChange={setBookingOpen} />
    </main>
  );
}