import { useState } from "react";
import { Check, ChevronLeft, ShieldCheck, Sparkles, Video } from "lucide-react";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

const detailsSchema = z.object({
  name: z.string().trim().min(2, "Укажите ваше имя").max(80, "Не более 80 символов"),
  phone: z
    .string()
    .trim()
    .regex(/^\+?[\d\s()\-]{10,20}$/, "Введите корректный номер телефона"),
  consent: z.literal(true, { errorMap: () => ({ message: "Необходимо согласие" }) }),
});

type Format = "online" | "clinic";

export function BookingDialog({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [format, setFormat] = useState<Format>("online");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const close = (nextOpen: boolean) => {
    onOpenChange(nextOpen);
    if (!nextOpen) window.setTimeout(() => setStep(1), 250);
  };

  const submit = () => {
    const result = detailsSchema.safeParse({ name, phone, consent });
    if (!result.success) {
      setErrors(Object.fromEntries(result.error.issues.map((issue) => [String(issue.path[0]), issue.message])));
      return;
    }
    setErrors({});
    setStep(3);
  };

  return (
    <Dialog open={open} onOpenChange={close}>
      <DialogContent className="max-h-[92vh] w-[calc(100%-1.5rem)] overflow-y-auto border-primary/30 bg-popover p-0 shadow-2xl sm:max-w-xl sm:rounded-none">
        <div className="h-1 bg-primary" />
        {step !== 3 && (
          <div className="flex gap-2 px-6 pt-6 sm:px-10">
            {[1, 2].map((item) => (
              <span key={item} className={cn("h-0.5 flex-1 bg-border", item <= step && "bg-primary")} />
            ))}
          </div>
        )}

        {step === 1 && (
          <div className="p-6 pt-5 sm:p-10 sm:pt-6">
            <DialogHeader>
              <span className="eyebrow">Шаг 1 из 2</span>
              <DialogTitle className="font-serif text-3xl font-medium sm:text-4xl">Выберите формат консультации</DialogTitle>
              <DialogDescription className="pt-2 leading-relaxed">Врач разберёт ваши задачи и предложит персональный протокол без обязательств.</DialogDescription>
            </DialogHeader>
            <div className="mt-7 grid gap-3">
              {([
                ["online", Video, "Онлайн 3D-моделирование", "Предварительная оценка результата и план коррекции — 30 минут"],
                ["clinic", Sparkles, "Приём в клинике — скидка 50%", "Очная диагностика качества кожи и мягких тканей"],
              ] as const).map(([value, Icon, title, copy]) => (
                <button
                  type="button"
                  key={value}
                  onClick={() => setFormat(value)}
                  className={cn("grid grid-cols-[auto_1fr_auto] items-start gap-4 border p-4 text-left transition-colors", format === value ? "border-primary bg-primary/8" : "border-border bg-surface-raised hover:border-primary/50")}
                >
                  <Icon className="mt-0.5 size-5 text-primary" aria-hidden="true" />
                  <span><strong className="block text-sm font-semibold">{title}</strong><span className="mt-1 block text-xs leading-relaxed text-muted-foreground">{copy}</span></span>
                  <span className={cn("mt-1 grid size-5 place-items-center rounded-full border", format === value ? "border-primary bg-primary text-primary-foreground" : "border-muted-foreground")}><Check className="size-3" /></span>
                </button>
              ))}
            </div>
            <Button variant="luxury" size="luxury" className="mt-6 w-full" onClick={() => setStep(2)}>Продолжить</Button>
          </div>
        )}

        {step === 2 && (
          <div className="p-6 pt-5 sm:p-10 sm:pt-6">
            <Button variant="ghost" size="sm" className="mb-4 -ml-3 text-muted-foreground" onClick={() => setStep(1)}><ChevronLeft /> Назад</Button>
            <DialogHeader>
              <span className="eyebrow">Шаг 2 из 2</span>
              <DialogTitle className="font-serif text-3xl font-medium sm:text-4xl">Как с вами связаться?</DialogTitle>
              <DialogDescription className="pt-2">Администратор позвонит, чтобы подобрать удобное время.</DialogDescription>
            </DialogHeader>
            <div className="mt-7 space-y-5">
              <label className="block text-sm font-medium">Имя
                <input value={name} onChange={(event) => setName(event.target.value)} maxLength={80} autoComplete="name" className="mt-2 h-12 w-full border border-input bg-surface-raised px-4 outline-none transition focus:border-primary focus:ring-1 focus:ring-primary" placeholder="Как к вам обращаться" />
                {errors.name && <span className="mt-1 block text-xs text-destructive">{errors.name}</span>}
              </label>
              <label className="block text-sm font-medium">Телефон
                <input value={phone} onChange={(event) => setPhone(event.target.value)} maxLength={20} autoComplete="tel" inputMode="tel" className="mt-2 h-12 w-full border border-input bg-surface-raised px-4 outline-none transition focus:border-primary focus:ring-1 focus:ring-primary" placeholder="+7 (999) 000-00-00" />
                {errors.phone && <span className="mt-1 block text-xs text-destructive">{errors.phone}</span>}
              </label>
              <label className="flex cursor-pointer items-start gap-3 text-xs leading-relaxed text-muted-foreground">
                <input type="checkbox" checked={consent} onChange={(event) => setConsent(event.target.checked)} className="mt-0.5 size-4 accent-primary" />
                <span>Согласна на обработку персональных данных и звонок клиники.</span>
              </label>
              {errors.consent && <span className="block text-xs text-destructive">{errors.consent}</span>}
            </div>
            <Button variant="luxury" size="luxury" className="mt-7 w-full" onClick={submit}>Записаться на консультацию</Button>
            <p className="mt-4 flex items-center justify-center gap-2 text-center text-xs text-muted-foreground"><ShieldCheck className="size-4 text-primary" /> Ваши данные защищены</p>
          </div>
        )}

        {step === 3 && (
          <div className="px-6 py-14 text-center sm:px-12 sm:py-16">
            <div className="mx-auto grid size-16 place-items-center rounded-full border border-primary bg-primary/10"><Check className="size-7 text-primary" /></div>
            <DialogHeader className="mt-6 text-center sm:text-center">
              <DialogTitle className="font-serif text-4xl font-medium">Ваша заявка принята</DialogTitle>
              <DialogDescription className="mx-auto max-w-sm pt-3 leading-relaxed">{name}, администратор свяжется с вами в ближайшее рабочее время и подберёт удобную запись.</DialogDescription>
            </DialogHeader>
            <Button variant="luxuryOutline" size="luxury" className="mt-8" onClick={() => close(false)}>Вернуться на сайт</Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}