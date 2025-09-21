// app/about/page.jsx
import Link from "next/link";
import SectionHeader from "../components/SectionHeader.jsx";
import ValueCard from "../components/ValueCard.jsx";
import TeamCard from "../components/TeamCard.jsx";
import Timeline from "../components/Timeline.jsx";


export default function AboutPage() {
  const values = [
    { icon: "💡", title: "Innovation", text: "Nous cherchons des solutions simples et efficaces." },
    { icon: "✅", title: "Qualité", text: "Livrer du code propre et maintenable." },
    { icon: "🤝", title: "Confiance", text: "Transparence et respect avec nos clients." }
  ];

  const team = [
    { img: "/team1.jpg", name: "Amina", role: "Lead Dev" },
    { img: "/team2.jpg", name: "Karim", role: "Backend" },
    { img: "/team3.jpg", name: "Sofia", role: "Designer" },
    { img: "/team.jpg", name: "Soad", role: "Designer" },
    { img: "/team2.jpg", name: "hamid", role: "Designer" },
    { img: "/team1.jpg", name: "mourad", role: "Designer" }
  ];

  const timeline = [
    { year: "2018", title: "Début du projet", description: "Naissance de l'idée et premiers essais." },
    { year: "2020", title: "Première version", description: "Mise en ligne d'une V1 simple." },
    { year: "2024", title: "Refonte Next.js", description: "Migration vers Next.js et déploiement sur Vercel." }
  ];

  return (
    <main className="max-w-6xl mx-auto py-12 px-5">
      <SectionHeader
        eyebrow="À propos"
        title="Qui sommes-nous ?"
        description="Petite équipe passionnée par le web, nous construisons des expériences performantes et accessibles."
      />

      {/* Hero */}
      <section className="grid md:grid-cols-2 gap-8 items-center mb-12">
        <div>
          <h3 className="text-2xl font-bold mb-3">Notre mission</h3>
          <p className="text-slate-600 mb-4">
            Offrir des applications rapides, faciles à maintenir, et agréables à utiliser.
            Nous aimons les choses simples qui marchent bien.
          </p>
          <Link href="/contact" className="inline-block bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
            Nous contacter
          </Link>
        </div>
        <div>
          <img src="/about-hero.jpg" alt="Illustration" className="w-full rounded-lg shadow-md object-cover" />
        </div>
      </section>

      {/* Values */}
      <section className="mb-12">
        <SectionHeader title="Nos valeurs" description="Ce en quoi nous croyons et ce que nous livrons." />
        <div className="grid sm:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <ValueCard key={i} icon={v.icon} title={v.title}>
              {v.text}
            </ValueCard>
          ))}
        </div>
      </section>

      {/* Timeline & Team */}
      <section className="grid md:grid-cols-2 gap-10 mb-12">
        <div>
          <SectionHeader eyebrow="Histoire" title="Notre parcours" />
          <Timeline items={timeline} />
        </div>

        <div>
          <SectionHeader eyebrow="Équipe" title="Rencontrez l'équipe" />
          <div className="grid sm:grid-cols-2 gap-4">
            {team.map((m, i) => (
              <TeamCard key={i} {...m} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-8 bg-slate-50 dark:bg-slate-900 rounded-lg">
        <h3 className="text-xl font-semibold mb-3">Envie de collaborer ?</h3>
        <p className="text-slate-600 mb-4">Écris-nous un message et discutons de ton projet.</p>
        <Link href="/contact" className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700">
          Contactez-nous
        </Link>
      </section>
    </main>
  );
}
