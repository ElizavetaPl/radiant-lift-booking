import { createFileRoute } from "@tanstack/react-router";
import { LandingPage } from "@/components/LandingPage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SMAS-лифтинг и сияние кожи — LUMIÈRE" },
      { name: "description", content: "SMAS-лифтинг и биоревитализация за один визит без реабилитации. Специальная цена 45 000 ₽." },
      { property: "og:title", content: "Лифтинг и сияние кожи за один визит" },
      { property: "og:description", content: "Естественное омоложение без операции и реабилитации. Запишитесь на бесплатную консультацию." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return <LandingPage />;
}
