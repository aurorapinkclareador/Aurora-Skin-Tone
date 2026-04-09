import { useEffect, useRef, useState } from "react";
import { Star, CheckCircle2, ShieldCheck, Clock, Check, ArrowRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

import img1 from '@assets/before_after_1.webp';
import img2 from '@assets/before_after_3.webp';
import img3 from '@assets/before_after_2.webp';
import img4 from '@assets/story.webp';
import img5 from '@assets/product.webp';
import img6 from '@assets/hero.webp';
import avatarAna from '@assets/avatar_ana.webp';
import avatarJuliana from '@assets/avatar_juliana.webp';
import avatarBeatriz from '@assets/avatar_beatriz.webp';

function FadeIn({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); observer.disconnect(); }
    }, { threshold: 0.1 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.55s ease ${delay}ms, transform 0.55s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function useCountdown() {
  const getInitial = () => {
    const saved = sessionStorage.getItem('aurora_timer');
    if (saved) {
      const { end } = JSON.parse(saved);
      const remaining = Math.floor((end - Date.now()) / 1000);
      if (remaining > 0) return remaining;
    }
    const seconds = Math.floor(Math.random() * 601) + 1200; // 20–30 min
    sessionStorage.setItem('aurora_timer', JSON.stringify({ end: Date.now() + seconds * 1000 }));
    return seconds;
  };

  const [secs, setSecs] = useState<number>(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const initial = getInitial();
    setSecs(initial);
    setReady(true);
    const interval = setInterval(() => {
      setSecs(prev => {
        if (prev <= 1) {
          const reset = 900 + Math.floor(Math.random() * 300); // 15–20 min reset
          sessionStorage.setItem('aurora_timer', JSON.stringify({ end: Date.now() + reset * 1000 }));
          return reset;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const h = String(Math.floor(secs / 3600)).padStart(2, '0');
  const m = String(Math.floor((secs % 3600) / 60)).padStart(2, '0');
  const s = String(secs % 60).padStart(2, '0');
  return { h, m, s, ready };
}

export default function Home() {
  const [showSticky, setShowSticky] = useState(false);
  const { h, m, s, ready } = useCountdown();

  const scrollToOffers = () => {
    document.getElementById('ofertas')?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => setShowSticky(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#ffe8f2] font-sans selection:bg-[#c2185b] selection:text-white pb-20 md:pb-0">

      {/* Sticky bottom CTA — mobile only */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[#c2185b] px-4 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.15)] transition-transform duration-300 ${showSticky ? "translate-y-0" : "translate-y-full"}`}
      >
        <button
          onClick={scrollToOffers}
          className="w-full py-3.5 rounded-xl font-bold text-base text-white flex items-center justify-center gap-2"
        >
          Ver Ofertas e Garantir o Meu <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* 0. Top Trust Bar */}
      <div className="trust-bar shadow-sm relative z-40">
        Pagamento na entrega para todo o estado de São Paulo
      </div>
      <div className="bg-white border-b border-[#c2185b]/10">
        <p className="text-center py-2.5 text-sm md:text-base font-medium text-[#c2185b]">
          Entrega rápida para São Paulo – em muitos casos em até <span className="font-bold">24 horas</span>.
        </p>
      </div>

      {/* 1. Hero */}
      <section className="relative pt-12 pb-20 px-4 sm:px-6 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-block py-1 px-4 rounded-full bg-[#c2185b]/10 text-[#c2185b] font-semibold text-sm mb-6 border border-[#c2185b]/20">
            Descoberta Recente no Cuidado da Pele
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#c2185b] leading-tight mb-6">
            Aurora Pink: o cuidado diário que pode ajudar a suavizar manchas escuras e devolver uma aparência mais uniforme à pele
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Uma alternativa prática de uso em casa, desenvolvida especialmente para áreas da pele com escurecimento, recuperando a sua confiança no espelho.
          </p>
          <button
            onClick={scrollToOffers}
            className="w-full sm:w-auto px-8 py-5 rounded-2xl font-bold text-lg bg-[#c2185b] text-white shadow-[0_8px_30px_rgb(194,24,91,0.4)] hover:shadow-[0_8px_40px_rgb(194,24,91,0.6)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 mx-auto"
          >
            Quero Suavizar Manchas Escuras <ArrowRight className="w-5 h-5" />
          </button>
          <div className="flex items-center justify-center gap-2 mt-4 text-sm text-[#c2185b] font-medium">
            <ShieldCheck className="w-4 h-4" /> Pagamento Seguro na Entrega
          </div>

          {/* Social proof bar */}
          <div className="flex items-center justify-center gap-4 mt-8 flex-wrap">
            <div className="flex items-center gap-2.5 bg-white/80 border border-[#c2185b]/15 rounded-full px-5 py-2.5 shadow-sm">
              <div className="flex -space-x-2">
                {[avatarAna, avatarJuliana, avatarBeatriz].map((av, idx) => (
                  <img key={idx} src={av} alt="cliente" className="w-7 h-7 rounded-full object-cover border-2 border-white shrink-0" loading="lazy" />
                ))}
              </div>
              <span className="text-sm font-bold text-foreground/80"><span className="text-[#c2185b]">+3.200</span> clientes satisfeitas</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/80 border border-[#c2185b]/15 rounded-full px-5 py-2.5 shadow-sm">
              {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-current text-yellow-400" />)}
              <span className="text-sm font-bold text-foreground/80 ml-1">4.9/5</span>
            </div>
          </div>

          <div className="mt-16 max-w-lg mx-auto relative">
            <div className="absolute inset-0 bg-gradient-to-t from-[#ffe8f2] via-transparent to-transparent z-10 pointer-events-none" />
            <img
              src={img6}
              alt="Aurora Pink"
              className="w-full h-auto drop-shadow-2xl relative z-0"
              loading="eager"
              fetchpriority="high"
            />
          </div>
        </div>
      </section>

      {/* 2. Emotional Problem Section */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Você já sentiu que a sua pele perdeu aquela aparência uniforme?</h2>
            <p className="text-lg text-foreground/70">Muitas pessoas passam por essas frustrações diariamente:</p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              "Olhar no espelho e perceber manchas escuras cada vez mais visíveis.",
              "Insegurança constante ao mostrar a pele em momentos de lazer ou intimidade.",
              "Frustração profunda com produtos cosméticos que prometem muito e não funcionam.",
              "Gastar muito dinheiro em soluções temporárias que não trazem o resultado esperado."
            ].map((text, i) => (
              <FadeIn key={i} delay={i * 80} className="flex items-start gap-4 p-6 bg-[#ffe8f2]/50 rounded-2xl border border-[#ffe8f2]">
                <span className="text-2xl shrink-0 mt-0.5">❌</span>
                <p className="text-foreground/80 font-medium leading-relaxed">{text}</p>
              </FadeIn>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={scrollToOffers}
              className="text-[#c2185b] font-bold text-lg underline underline-offset-4 hover:text-[#a0134a] transition-colors"
            >
              Existe uma forma mais simples de cuidar disso. Descubra como ↓
            </button>
          </div>
        </div>
      </section>

      {/* 3. Story / Discovery & 4. Product Introduction */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <img src={img4} alt="Uso prático do Aurora Pink" className="rounded-3xl shadow-2xl w-full object-cover aspect-[4/5]" loading="lazy" />
          </FadeIn>
          <FadeIn delay={150}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">O Segredo do Cuidado Diário que Transforma</h2>
            <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
              Muitas pessoas descobriram a importância de cuidar da pele de forma contínua. Não se trata de mágica, mas de uma <strong>rotina consistente</strong> que respeita o seu corpo.
            </p>
            <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
              Foi assim que nasceu o <strong>Aurora Pink</strong>: um creme desenvolvido com a missão de ser um cuidado diário, simples e prático. Com uso contínuo, ele ajuda a suavizar manchas escuras na pele, sem a necessidade de rotinas complexas ou tratamentos inacessíveis.
            </p>
            <div className="space-y-4 mb-8">
              {[
                "Uso simples e prático em casa",
                "Aplicação direta em áreas da pele com manchas ou escurecimento",
                "Perfeito para incluir na rotina antes de dormir"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#c2185b]" />
                  <span className="font-semibold text-foreground/90">{item}</span>
                </div>
              ))}
            </div>
            <button
              onClick={scrollToOffers}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl font-bold text-lg bg-[#c2185b] text-white shadow-lg shadow-[#c2185b]/30 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
            >
              Conhecer a Rotina Aurora Pink
            </button>
          </FadeIn>
        </div>
      </section>

      {/* 5. Product Mechanism */}
      <section className="py-20 px-4 sm:px-6 bg-gradient-to-b from-white to-[#ffe8f2]/50">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Por que as manchas escuras aparecem?</h2>
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-[#c2185b]/10 text-left md:text-center">
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                Algumas áreas da pele, devido ao atrito constante, depilação ou fatores naturais, produzem mais pigmentação do que outras. Isso é absolutamente normal, mas sabemos que pode incomodar.
              </p>
              <p className="text-xl font-medium text-[#c2185b] leading-relaxed">
                O Aurora Pink auxilia diretamente no cuidado contínuo dessas áreas. Com a aplicação diária, os ativos trabalham para promover uma aparência mais uniforme, suavizando o escurecimento de forma gradual.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 6. Before and After */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Resultados que Devolvem a Confiança</h2>
            <p className="text-lg text-foreground/70">O uso contínuo do Aurora Pink faz a diferença.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[img1, img2, img3].map((img, i) => (
              <FadeIn key={i} delay={i * 120} className="relative rounded-2xl overflow-hidden shadow-xl group border-4 border-white">
                <img src={img} alt="Antes e Depois do uso de Aurora Pink" className="w-full h-auto object-cover" loading="lazy" />
                <div className="absolute top-4 left-4 bg-black/60 text-white px-3 py-1 rounded-md text-xs font-bold tracking-wider">ANTES</div>
                <div className="absolute bottom-4 right-4 bg-[#c2185b] text-white px-4 py-1.5 rounded-md text-sm font-bold tracking-wider shadow-lg">DEPOIS</div>
              </FadeIn>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={scrollToOffers}
              className="w-full sm:w-auto px-10 py-5 rounded-2xl font-bold text-xl bg-[#c2185b] text-white shadow-[0_8px_30px_rgb(194,24,91,0.4)] hover:shadow-[0_8px_40px_rgb(194,24,91,0.6)] hover:-translate-y-1 transition-all duration-300"
            >
              Quero Resultados Assim
            </button>
          </div>
        </div>
      </section>

      {/* 7. Benefits & 9. Value Anchoring */}
      <section className="py-20 px-4 sm:px-6 bg-[#c2185b] text-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Muito mais do que apenas um creme</h2>
            <ul className="space-y-5">
              {[
                "Ajuda a suavizar manchas escuras na pele",
                "Contribui para uma aparência muito mais uniforme",
                "Pode devolver a aparência saudável à pele",
                "Aumenta a confiança ao olhar no espelho",
                "Mais segurança no dia a dia e nas suas roupas",
                "Rotina simples, rápida e prazerosa de autocuidado",
                "Alternativa totalmente acessível a tratamentos caros"
              ].map((benefit, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="bg-white/20 p-1.5 rounded-full shrink-0">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-lg text-white/90 leading-snug">{benefit}</span>
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={150} className="bg-white text-foreground rounded-3xl p-8 shadow-2xl relative">
            <div className="absolute -top-4 -right-4 bg-yellow-400 text-yellow-900 font-bold px-4 py-1 rounded-full shadow-lg transform rotate-3">
              Melhor Custo-Benefício
            </div>
            <h3 className="text-2xl font-bold mb-6 text-[#c2185b]">A Conta é Simples:</h3>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center pb-4 border-b border-gray-100 gap-2">
                <span className="text-gray-500">Tratamentos estéticos em clínicas</span>
                <span className="font-bold text-red-500 text-lg shrink-0">R$ 1.500+</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-gray-100 gap-2">
                <span className="text-gray-500">Produtos importados temporários</span>
                <span className="font-bold text-red-500 text-lg shrink-0">R$ 500+</span>
              </div>
              <div className="flex justify-between items-center pt-2 gap-2">
                <span className="font-bold text-xl text-[#c2185b]">Aurora Pink (Hoje)</span>
                <span className="font-black text-green-600 text-2xl shrink-0">R$ 187</span>
              </div>
            </div>
            <button
              onClick={scrollToOffers}
              className="w-full py-4 rounded-xl font-bold text-lg bg-[#c2185b] text-white shadow-lg shadow-[#c2185b]/30 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
            >
              Garantir Meu Tratamento Acessível
            </button>
          </FadeIn>
        </div>
      </section>

      {/* 8. Testimonials */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Quem mora em São Paulo já testou e aprovou</h2>
            <p className="text-lg text-foreground/70">Histórias reais de quem devolveu a uniformidade à pele com Aurora Pink.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Ana Oliveira",
                avatar: avatarAna,
                age: "34 anos",
                city: "Moema, São Paulo - SP",
                highlight: "Usei por 3 semanas antes do casamento da minha prima",
                text: "Eu tinha manchas escuras que me incomodavam faz tempo. Comecei a usar o Aurora Pink toda noite, antes de dormir. Na terceira semana, olhei no espelho e vi uma diferença real. No casamento, usei um vestido sem manga pela primeira vez em anos. Isso não tem preço."
              },
              {
                name: "Juliana Mendes",
                avatar: avatarJuliana,
                age: "29 anos",
                city: "Cambuí, Campinas - SP",
                highlight: "Voltei a usar roupas de academia sem me esconder",
                text: "Parei de ir às aulas de ginástica que eu amava porque não queria expor minha pele. Comecei o Aurora Pink sem muita expectativa. Depois de um mês de uso diário, voltei para a academia, de legging curta, sem aquela ansiedade de antes. Minha autoestima voltou junto."
              },
              {
                name: "Beatriz Costa",
                avatar: avatarBeatriz,
                age: "42 anos",
                city: "Centro, São Bernardo do Campo - SP",
                highlight: "Produto chegou em menos de 24h, sem pagar nada na hora",
                text: "Pedi na segunda à tarde e na terça de manhã estava na minha porta. Paguei só na entrega, o que me deu muito mais segurança. Uso toda manhã depois do banho, são literalmente 30 segundos. Em cinco semanas a pele ficou visivelmente mais uniforme. Vale cada centavo."
              }
            ].map((t, i) => (
              <FadeIn key={i} delay={i * 100} className="bg-white p-7 rounded-3xl shadow-lg border border-[#ffe8f2] flex flex-col justify-between">
                <div>
                  <div className="flex gap-1 mb-3">
                    {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-current text-yellow-400" />)}
                  </div>
                  <p className="text-[#c2185b] font-semibold text-sm mb-3 italic">"{t.highlight}"</p>
                  <p className="text-foreground/75 text-sm mb-5 leading-relaxed">{t.text}</p>
                </div>
                <div className="flex items-center gap-3 pt-4 border-t border-[#ffe8f2]">
                  <img src={t.avatar} alt={t.name} className="w-11 h-11 rounded-full object-cover border-2 border-[#c2185b]/20 shrink-0" loading="lazy" />
                  <div>
                    <p className="font-bold text-[#c2185b]">{t.name}</p>
                    <p className="text-xs text-foreground/55">{t.age} • {t.city}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 12. Urgency + Countdown Timer */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 -mb-10 relative z-20">
        <div className="bg-[#ff2b2b] text-white rounded-2xl p-6 shadow-xl">
          <div className="flex items-center gap-4 mb-4">
            <Clock className="w-8 h-8 shrink-0" />
            <div>
              <h4 className="font-bold text-xl text-white">Atenção: Oferta por Tempo Limitado</h4>
              <p className="text-white/90 text-sm mt-0.5">Após esse prazo, o preço retorna ao valor original.</p>
            </div>
          </div>
          {ready && (
            <div className="flex items-center justify-center gap-3">
              {[{ v: h, l: "Horas" }, { v: m, l: "Min" }, { v: s, l: "Seg" }].map(({ v, l }, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="bg-white/20 rounded-xl px-4 py-3 min-w-[64px] text-center">
                    <span className="text-4xl font-black tabular-nums">{v}</span>
                  </div>
                  <span className="text-xs font-semibold text-white/80 mt-1 uppercase tracking-wider">{l}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* 10. Offer Section */}
      <section id="ofertas" className="pt-32 pb-20 px-4 sm:px-6 bg-gradient-to-b from-[#ffe8f2] to-white scroll-mt-10">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Escolha o Melhor Tratamento para Você</h2>
          <p className="text-xl text-foreground/80">Lembre-se: o <strong>uso contínuo</strong> é o que gera os melhores resultados.</p>
        </div>

        <div className="flex flex-col lg:flex-row justify-center gap-8 max-w-5xl mx-auto items-center lg:items-stretch">

          {/* Oferta Essencial */}
          <div className="w-full lg:w-1/2 max-w-md bg-white rounded-3xl p-8 shadow-xl border-2 border-transparent flex flex-col">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-foreground mb-2">Oferta Essencial</h3>
              <p className="text-lg text-foreground/60">1 Unidade Aurora Pink</p>
            </div>
            <div className="flex justify-center mb-6 h-48">
              <img src={img5} alt="1 Unidade Aurora Pink" className="h-full object-contain" loading="lazy" />
            </div>
            <div className="text-center mb-8 flex-grow">
              <p className="text-gray-400 line-through text-lg">De R$ 277,00</p>
              <div className="flex items-end justify-center gap-2 mt-2">
                <span className="text-2xl font-bold text-[#c2185b]">Por</span>
                <span className="text-5xl font-black text-[#c2185b]">R$ 187</span>
              </div>
              <p className="text-sm font-bold text-[#c2185b] mt-3">O melhor custo-benefício do mercado</p>
              <p className="text-sm text-green-600 font-bold mt-2">✓ Pagamento na Entrega (SP)</p>
            </div>
            <a
              href="https://entrega.logzz.com.br/pay/memr8ydd3/ocjfr-1-unidade"
              onClick={() => (window as any).fbq?.('track', 'InitiateCheckout', { content_name: 'Aurora Pink 1 Unidade', currency: 'BRL', value: 187.00, num_items: 1 })}
              className="block w-full py-5 rounded-2xl font-bold text-lg bg-gray-900 text-white text-center shadow-lg hover:bg-black hover:shadow-xl transition-all duration-300"
            >
              Comprar 1 Unidade
            </a>
          </div>

          {/* Mais Vendida */}
          <div className="w-full lg:w-1/2 max-w-md bg-white rounded-3xl p-8 shadow-2xl border-4 border-[#c2185b] flex flex-col relative lg:scale-105 z-10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#c2185b] text-white px-6 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg flex items-center gap-2">
              <Star className="w-4 h-4 fill-current" /> MAIS VENDIDA
            </div>
            <div className="text-center mb-6 mt-4">
              <h3 className="text-3xl font-bold text-[#c2185b] mb-2">Tratamento Completo</h3>
              <p className="text-xl font-bold text-foreground/80">2 Unidades Aurora Pink</p>
              <p className="text-sm text-[#c2185b] font-semibold mt-2">Recomendado para uso contínuo</p>
            </div>
            <div className="flex justify-center mb-6 h-48 relative">
              <img src={img5} alt="Aurora Pink" className="h-full object-contain -mr-8 z-10" loading="lazy" />
              <img src={img5} alt="Aurora Pink" className="h-full object-contain" loading="lazy" />
            </div>
            <div className="text-center mb-8 flex-grow">
              <p className="text-gray-400 line-through text-xl">De R$ 347,00</p>
              <div className="flex items-end justify-center gap-2 mt-2">
                <span className="text-2xl font-bold text-[#c2185b]">Por</span>
                <span className="text-6xl font-black text-[#c2185b]">R$ 247</span>
              </div>
              <p className="text-sm font-bold text-[#c2185b] mt-3">R$123,50 por unidade — Economia máxima</p>
              <p className="text-green-600 font-bold mt-2 flex items-center justify-center gap-1">
                <CheckCircle2 className="w-4 h-4" /> Pagamento na Entrega (SP)
              </p>
            </div>
            <a
              href="https://entrega.logzz.com.br/pay/memr8ydd3/2-unidades-r24700"
              onClick={() => (window as any).fbq?.('track', 'InitiateCheckout', { content_name: 'Aurora Pink 2 Unidades', currency: 'BRL', value: 247.00, num_items: 2 })}
              className="block w-full py-5 rounded-2xl font-bold text-xl bg-[#c2185b] text-white text-center shadow-[0_8px_30px_rgb(194,24,91,0.4)] hover:shadow-[0_8px_40px_rgb(194,24,91,0.6)] hover:-translate-y-1 transition-all duration-300"
            >
              Comprar 2 Unidades
            </a>
          </div>
        </div>
      </section>

      {/* 11. FAQ */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Dúvidas Frequentes</h2>
            <p className="text-lg text-foreground/70">Tudo o que você precisa saber antes de fazer seu pedido.</p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg">Aurora Pink funciona para todos os tipos de pele?</AccordionTrigger>
              <AccordionContent className="text-base">Foi desenvolvido para diferentes tipos de pele. Os resultados podem variar de pessoa para pessoa, respeitando as características únicas do seu corpo.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg">Em quanto tempo posso perceber melhora?</AccordionTrigger>
              <AccordionContent className="text-base">Algumas pessoas percebem mudanças graduais ao longo do uso contínuo. A consistência é o fator mais importante para o resultado.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg">Como aplicar?</AccordionTrigger>
              <AccordionContent className="text-base">Aplique uma pequena quantidade nas áreas com manchas ou escurecimento e massageie suavemente até absorver. Ideal para uso diário, preferencialmente à noite.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg">Posso usar todos os dias?</AccordionTrigger>
              <AccordionContent className="text-base">Sim, o uso diário faz parte da rotina recomendada. É justamente a consistência que garante os melhores resultados ao longo do tempo.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-lg">Como funciona o pagamento na entrega?</AccordionTrigger>
              <AccordionContent className="text-base">Clientes de São Paulo pagam apenas quando recebem o produto em mãos. Sem riscos, sem cobranças antecipadas.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger className="text-lg">Qual o prazo de entrega?</AccordionTrigger>
              <AccordionContent className="text-base">Para clientes de São Paulo, a entrega pode ocorrer em até 24 horas dependendo da região. Pedidos são processados com máxima prioridade.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* 13. Final CTA */}
      <section className="py-20 px-4 sm:px-6 bg-[#ffe8f2] text-center border-t border-[#c2185b]/10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#c2185b]">A decisão que muda o seu despertar.</h2>
          <div className="text-left mb-10 space-y-5">
            <p className="text-lg text-foreground/80 leading-relaxed">
              Continuar adiando esse cuidado tem um preço que não está na etiqueta: é o custo de mais meses se escondendo atrás de filtros e camadas de maquiagem.
            </p>
            <div className="space-y-3">
              <p className="text-lg font-semibold text-foreground/90"><span className="text-[#c2185b] font-bold">O Ontem:</span> Você já tentou de tudo e a frustração continuou.</p>
              <p className="text-lg font-semibold text-foreground/90"><span className="text-[#c2185b] font-bold">O Hoje:</span> Você tem a chance de interromper esse ciclo com o Aurora Pink.</p>
              <p className="text-lg font-semibold text-foreground/90"><span className="text-[#c2185b] font-bold">O Amanhã:</span> Acordar, olhar no espelho e finalmente sorrir para o que vê.</p>
            </div>
            <p className="text-xl font-bold text-[#c2185b] text-center pt-2">Não é apenas um clareador. É a sua liberdade de volta.</p>
          </div>
          <button
            onClick={scrollToOffers}
            className="w-full sm:w-auto px-10 py-6 rounded-2xl font-bold text-xl bg-[#c2185b] text-white shadow-[0_8px_30px_rgb(194,24,91,0.4)] hover:shadow-[0_8px_40px_rgb(194,24,91,0.6)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 mx-auto"
          >
            Quero experimentar o Aurora Pink agora <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </section>

      <footer className="bg-white py-8 text-center text-sm text-foreground/50 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="font-bold text-[#c2185b] mb-2 text-lg">Aurora Pink</p>
          <p>© {new Date().getFullYear()} Todos os direitos reservados.</p>
          <p className="mt-2">Este produto não é um medicamento. Os resultados podem variar de pessoa para pessoa.</p>
        </div>
      </footer>
    </div>
  );
}
