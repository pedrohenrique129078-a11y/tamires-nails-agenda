import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Calendar,
  Clock,
  MapPin,
  Phone,
  Instagram,
  Scissors,
  Sparkles,
  Heart,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";
import heroImage from "../assets/hero-studio.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Tamires Correia | Manicure & Nail Designer" },
      { name: "description", content: "Agende seu horário com Tamires Correia. Manicure profissional com atendimento especializado em unhas decoradas, alongamento, esmaltação em gel e cuidados para suas mãos." },
      { property: "og:title", content: "Tamires Correia | Manicure & Nail Designer" },
      { property: "og:description", content: "Agende seu horário com Tamires Correia. Manicure profissional com atendimento especializado em unhas decoradas, alongamento e esmaltação em gel." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: heroImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroImage },
    ],
  }),
});

const services = [
  {
    icon: Sparkles,
    title: "Esmaltação em Gel",
    description: "Acabamento perfeito e duradouro com cores vibrantes e brilho intenso.",
    price: "R$ 55",
    duration: "50 min",
  },
  {
    icon: Scissors,
    title: "Alongamento de Unhas",
    description: "Técnicas modernas de fibra, tips e blindagem para unhas perfeitas.",
    price: "R$ 120",
    duration: "90 min",
  },
  {
    icon: Heart,
    title: "Manicure Tradicional",
    description: "Cuidado completo com cutículas, lixamento e esmaltação clássica.",
    price: "R$ 35",
    duration: "40 min",
  },
  {
    icon: Sparkles,
    title: "Nail Art & Decoradas",
    description: "Designs exclusivos e personalizados para cada ocasião e estilo.",
    price: "R$ 40+",
    duration: "60 min",
  },
];

const highlights = [
  "Ambiente higienizado e acolhedor",
  "Produtos de alta qualidade",
  "Atendimento personalizado",
  "Horários flexíveis",
];

const schedule = [
  { day: "Segunda", hours: "09h - 18h" },
  { day: "Terça", hours: "09h - 18h" },
  { day: "Quarta", hours: "09h - 18h" },
  { day: "Quinta", hours: "09h - 18h" },
  { day: "Sexta", hours: "09h - 19h" },
  { day: "Sábado", hours: "09h - 14h" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Sparkles className="h-4 w-4" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg font-semibold leading-none text-foreground">
                Tamires Correia
              </span>
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
                Nail Designer
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            <a href="#services" className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary">
              Serviços
            </a>
            <a href="#about" className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary">
              Sobre
            </a>
            <a href="#schedule" className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary">
              Agenda
            </a>
            <a href="#contact" className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary">
              Contato
            </a>
          </nav>

          <a
            href="https://wa.me/5500000000000?text=Ol%C3%A1%2C%20Tamires%21%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md"
          >
            <Calendar className="h-4 w-4" />
            <span className="hidden sm:inline">Agendar</span>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 pt-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Atendimento com hora marcada</span>
              </div>
              <h1 className="mt-6 font-serif text-4xl font-medium leading-[1.15] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Beleza e cuidado para suas{" "}
                <span className="text-primary">mãos</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Transforme suas unhas em verdadeiras obras de arte. Atendimento
                personalizado, produtos premium e um ambiente pensado para seu
                bem-estar.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="https://wa.me/5500000000000?text=Ol%C3%A1%2C%20Tamires%21%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-medium text-primary-foreground shadow-md transition-all hover:bg-primary/90 hover:shadow-lg"
                >
                  <MessageCircle className="h-5 w-5" />
                  Agendar pelo WhatsApp
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-base font-medium text-foreground transition-colors hover:bg-accent"
                >
                  Ver serviços
                </a>
              </div>
              <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>Higiene garantida</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>Produtos importados</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-primary/20 via-rose-200/30 to-transparent blur-2xl" />
              <div className="relative overflow-hidden rounded-2xl border border-border/50 shadow-2xl">
                <img
                  src={heroImage}
                  alt="Espaço elegante do estúdio de manicure Tamires Correia com tons rosa e dourado"
                  width={1344}
                  height={896}
                  className="aspect-[4/3] w-full object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-medium uppercase tracking-widest text-primary">
              Serviços
            </span>
            <h2 className="mt-3 font-serif text-3xl font-medium text-foreground sm:text-4xl">
              Cuidados especializados para suas unhas
            </h2>
            <p className="mt-4 text-muted-foreground">
              Escolha o serviço ideal e agende seu horário com praticidade.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-serif text-xl font-medium text-foreground">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                  <span className="font-serif text-lg font-semibold text-primary">
                    {service.price}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground">
                    <Clock className="h-3.5 w-3.5" />
                    {service.duration}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="border-y border-border/50 bg-secondary/30 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-primary/15 to-rose-100/50 blur-2xl" />
                <div className="relative grid gap-4 sm:grid-cols-2">
                  <div className="space-y-4">
                    <div className="rounded-2xl border border-border/50 bg-card p-6 shadow-sm">
                      <div className="font-serif text-4xl font-semibold text-primary">5+</div>
                      <div className="mt-1 text-sm text-muted-foreground">Anos de experiência</div>
                    </div>
                    <div className="rounded-2xl border border-border/50 bg-card p-6 shadow-sm">
                      <div className="font-serif text-4xl font-semibold text-primary">2k+</div>
                      <div className="mt-1 text-sm text-muted-foreground">Clientes atendidas</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="rounded-2xl border border-border/50 bg-card p-6 shadow-sm sm:mt-8">
                      <div className="font-serif text-4xl font-semibold text-primary">100%</div>
                      <div className="mt-1 text-sm text-muted-foreground">Dedicação em cada detalhe</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="text-sm font-medium uppercase tracking-widest text-primary">
                Sobre mim
              </span>
              <h2 className="mt-3 font-serif text-3xl font-medium text-foreground sm:text-4xl">
                Tamires Correia
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Sou manicure e nail designer apaixonada por realçar a beleza de cada cliente.
                Com anos de experiência e constante atualização em técnicas modernas, ofereço
                um atendimento exclusivo, do cuidado básico às unhas mais elaboradas.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Cada detalhe é pensado para que você se sinta confiante e especial, com unhas
                saudáveis, bonitas e alinhadas às últimas tendências.
              </p>
              <ul className="mt-8 space-y-3">
                {highlights.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-foreground">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                    </div>
                    <span className="text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="text-sm font-medium uppercase tracking-widest text-primary">
                Agenda
              </span>
              <h2 className="mt-3 font-serif text-3xl font-medium text-foreground sm:text-4xl">
                Horários disponíveis
              </h2>
              <p className="mt-4 max-w-md text-muted-foreground">
                Escolha o melhor dia e horário para você. Agende com antecedência e garanta
                seu atendimento exclusivo.
              </p>
              <a
                href="https://wa.me/5500000000000?text=Ol%C3%A1%2C%20Tamires%21%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-medium text-primary-foreground shadow-md transition-all hover:bg-primary/90 hover:shadow-lg"
              >
                <Calendar className="h-5 w-5" />
                Reservar horário
              </a>
            </div>

            <div className="rounded-2xl border border-border bg-card p-2 shadow-sm">
              <div className="divide-y divide-border rounded-xl bg-secondary/30 px-6 py-2">
                {schedule.map((item, index) => (
                  <div
                    key={item.day}
                    className={`flex items-center justify-between py-4 ${index === schedule.length - 1 ? "" : ""}`}
                  >
                    <span className="font-medium text-foreground">{item.day}</span>
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground">
                      <Clock className="h-4 w-4 text-primary" />
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / Footer */}
      <footer id="contact" className="border-t border-border/50 bg-rose-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-3">
            <div>
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Sparkles className="h-4 w-4" />
                </div>
                <div className="flex flex-col">
                  <span className="font-serif text-lg font-semibold leading-none text-foreground">
                    Tamires Correia
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
                    Nail Designer
                  </span>
                </div>
              </div>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
                Cuidado especializado para suas unhas em um ambiente acolhedor e elegante.
              </p>
            </div>

            <div>
              <h4 className="font-serif text-lg font-medium text-foreground">Contato</h4>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <a
                    href="https://wa.me/5500000000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
                  >
                    <Phone className="h-4 w-4" />
                    (00) 00000-0000
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/tamirescorreia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
                  >
                    <Instagram className="h-4 w-4" />
                    @tamirescorreia
                  </a>
                </li>
                <li className="inline-flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  Rua Exemplo, 123 - Centro
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-lg font-medium text-foreground">Horário de atendimento</h4>
              <p className="mt-4 text-sm text-muted-foreground">
                Segunda a sexta: 09h às 18h
                <br />
                Sábado: 09h às 14h
              </p>
              <a
                href="https://wa.me/5500000000000?text=Ol%C3%A1%2C%20Tamires%21%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 sm:w-auto"
              >
                <Calendar className="h-4 w-4" />
                Agendar agora
              </a>
            </div>
          </div>

          <div className="mt-12 border-t border-border/50 pt-8 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Tamires Correia. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
