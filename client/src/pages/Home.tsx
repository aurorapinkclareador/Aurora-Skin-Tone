import { motion } from "framer-motion";
import { Star, CheckCircle2, ShieldCheck, Clock, Check, ArrowRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

// Assets import mapping
import img1 from '@assets/1771444174461_(1)_(1)_1772907989128.png';
import img2 from '@assets/9e6410937fcccfa055cfa50775157e41_(1)_1772907989228.jpg';
import img3 from '@assets/5eef4124b14af4c7c6c76c3e12494139_(1)_1772907989264.jpg';
import img4 from '@assets/1b8a1241_(1)_(1)_1772907989338.jpg';
import img5 from '@assets/AURORA_-_Ft_08_(1)_(2)_1772907989390.png';
import img6 from '@assets/AURORA_-_Ft_15_(2)_1772908021801.png';

export default function Home() {
  const scrollToOffers = () => {
    document.getElementById('ofertas')?.scrollIntoView({ behavior: 'smooth' });
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen bg-[#ffe8f2] font-sans selection:bg-[#c2185b] selection:text-white">
      {/* 0. Top Trust Bar */}
      <div className="trust-bar shadow-sm relative z-50">
        Pagamento na entrega para quem mora em São Paulo
      </div>
      <div className="bg-white/60 backdrop-blur-md border-b border-[#c2185b]/10">
        <p className="text-center py-2.5 text-sm md:text-base font-medium text-[#c2185b]">
          Entrega rápida para São Paulo – em muitos casos em até <span className="font-bold">24 horas</span>.
        </p>
      </div>

      {/* 1. Powerful Hook Headline (Hero) */}
      <section className="relative pt-12 pb-20 px-4 sm:px-6 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-gradient-to-br from-[#c2185b]/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-gradient-to-tl from-[#c2185b]/20 to-transparent rounded-full blur-3xl" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
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
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-16 max-w-lg mx-auto relative"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#ffe8f2] via-transparent to-transparent z-10" />
            <img src={img6} alt="Aurora Pink" className="w-full h-auto drop-shadow-2xl relative z-0" />
          </motion.div>
        </div>
      </section>

      {/* 2. Emotional Problem Section */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Você já sentiu que a sua pele perdeu aquela aparência uniforme?</h2>
            <p className="text-lg text-foreground/70">Muitas pessoas passam por essas frustrações diariamente:</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              "Olhar no espelho e perceber manchas escuras cada vez mais visíveis.",
              "Insegurança constante ao mostrar a pele em momentos de lazer ou intimidade.",
              "Frustração profunda com produtos cosméticos que prometem muito e não funcionam.",
              "Gastar muito dinheiro em soluções temporárias que não trazem o resultado esperado."
            ].map((text, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 p-6 bg-[#ffe8f2]/50 rounded-2xl border border-[#ffe8f2]"
              >
                <span className="text-2xl shrink-0 mt-0.5">❌</span>
                <p className="text-foreground/80 font-medium leading-relaxed">{text}</p>
              </motion.div>
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
      <section className="py-20 px-4 sm:px-6 relative overflow-hidden">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <img src={img4} alt="Uso prático do Aurora Pink" className="rounded-3xl shadow-2xl w-full object-cover aspect-[4/5]" />
          </motion.div>
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
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
              className="w-full sm:w-auto px-8 py-4 rounded-2xl font-bold text-lg bg-[#c2185b] text-white shadow-lg shadow-[#c2185b]/30 hover:shadow-xl hover:shadow-[#c2185b]/40 hover:-translate-y-0.5 transition-all duration-300"
            >
              Conhecer a Rotina Aurora Pink
            </button>
          </motion.div>
        </div>
      </section>

      {/* 5. Product Mechanism */}
      <section className="py-20 px-4 sm:px-6 bg-gradient-to-b from-white to-[#ffe8f2]/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Por que as manchas escuras aparecem?</h2>
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-[#c2185b]/10 text-left md:text-center">
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                Algumas áreas da pele, devido ao atrito constante, depilação ou fatores naturais, produzem mais pigmentação do que outras. Isso é absolutamente normal, mas sabemos que pode incomodar.
              </p>
              <p className="text-xl font-medium text-[#c2185b] leading-relaxed">
                O Aurora Pink auxilia diretamente no cuidado contínuo dessas áreas. Com a aplicação diária, os ativos trabalham para promover uma aparência mais uniforme, suavizando o escurecimento de forma gradual.
              </p>
            </div>
          </motion.div>
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
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative rounded-2xl overflow-hidden shadow-xl group border-4 border-white"
              >
                <img src={img} alt="Antes e Depois do uso de Aurora Pink" className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-md text-xs font-bold tracking-wider">ANTES</div>
                <div className="absolute bottom-4 right-4 bg-[#c2185b] text-white px-4 py-1.5 rounded-md text-sm font-bold tracking-wider shadow-lg">DEPOIS</div>
              </motion.div>
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

      {/* 7. Strong Benefits Section & 9. Value Anchoring */}
      <section className="py-20 px-4 sm:px-6 bg-[#c2185b] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        <div className="max-w-5xl mx-auto relative z-10 grid md:grid-cols-2 gap-12 items-center">
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
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
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white text-foreground rounded-3xl p-8 shadow-2xl relative"
          >
            <div className="absolute -top-4 -right-4 bg-yellow-400 text-yellow-900 font-bold px-4 py-1 rounded-full shadow-lg transform rotate-3">
              Melhor Custo-Benefício
            </div>
            <h3 className="text-2xl font-bold mb-6 text-[#c2185b]">A Conta é Simples:</h3>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                <span className="text-gray-500">Tratamentos estéticos em clínicas</span>
                <span className="font-bold text-red-500 text-lg">R$ 1.500+</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                <span className="text-gray-500">Produtos importados temporários</span>
                <span className="font-bold text-red-500 text-lg">R$ 500+</span>
              </div>
              <div className="flex justify-between items-center pt-2">
                <span className="font-bold text-xl text-[#c2185b]">Aurora Pink (Hoje)</span>
                <span className="font-black text-green-600 text-2xl">A partir de R$ 187</span>
              </div>
            </div>
            <button 
              onClick={scrollToOffers}
              className="w-full py-4 rounded-xl font-bold text-lg bg-[#c2185b] text-white shadow-lg shadow-[#c2185b]/30 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
            >
              Garantir Meu Tratamento Acessível
            </button>
          </motion.div>

        </div>
      </section>

      {/* 8. Social Proof (Testimonials) */}
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
                age: "34 anos",
                city: "São Paulo - SP",
                text: "A melhora na aparência da pele foi incrível. Achei que seria mais um produto que ficaria no armário, mas é muito fácil de usar e estou super satisfeita com os resultados."
              },
              {
                name: "Juliana Mendes",
                age: "29 anos",
                city: "Campinas - SP",
                text: "Sempre tive insegurança com algumas áreas da pele com escurecimento. Usar vestidos regata era um problema. O Aurora Pink devolveu minha confiança!"
              },
              {
                name: "Beatriz Costa",
                age: "42 anos",
                city: "São Bernardo do Campo - SP",
                text: "Finalmente uma rotina simples de autocuidado que realmente ajuda. Faço a aplicação à noite antes de dormir e a textura da pele mudou completamente."
              }
            ].map((testimonial, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-lg border border-[#ffe8f2] flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-1 mb-4">
                    {[1,2,3,4,5].map(star => <Star key={star} className="w-5 h-5 fill-current text-yellow-400 border-yellow-400" />)}
                  </div>
                  <p className="text-foreground/80 italic mb-6 leading-relaxed">"{testimonial.text}"</p>
                </div>
                <div>
                  <p className="font-bold text-lg text-[#c2185b]">{testimonial.name}</p>
                  <p className="text-sm text-foreground/60">{testimonial.age} • {testimonial.city}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. Urgency Warning Before Offers */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 -mb-10 relative z-20">
        <div className="bg-[#ff2b2b] text-white rounded-2xl p-6 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <Clock className="w-10 h-10 shrink-0" />
            <div>
              <h4 className="font-bold text-xl">Atenção: Alta Procura Recente</h4>
              <p className="text-white/90 text-sm mt-1">Nossos lotes são limitados. Garanta o seu hoje para envio rápido.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 10. Offer Section (THE ONLY PLACE WITH ACTUAL EXTERNAL LINKS) */}
      <section id="ofertas" className="pt-32 pb-20 px-4 sm:px-6 bg-gradient-to-b from-[#ffe8f2] to-white relative scroll-mt-10">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Escolha o Melhor Tratamento para Você</h2>
          <p className="text-xl text-foreground/80">Lembre-se: o <strong>uso contínuo</strong> é o que gera os melhores resultados.</p>
        </div>

        <div className="flex flex-col lg:flex-row justify-center gap-8 max-w-5xl mx-auto items-center lg:items-stretch">
          
          {/* Oferta Essencial */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="w-full lg:w-1/2 max-w-md bg-white rounded-3xl p-8 shadow-xl border-2 border-transparent flex flex-col relative"
          >
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-foreground mb-2">Oferta Essencial</h3>
              <p className="text-lg text-foreground/60">1 Unidade Aurora Pink</p>
            </div>
            
            <div className="flex justify-center mb-6 h-48">
              <img src={img5} alt="1 Unidade Aurora Pink" className="h-full object-contain" />
            </div>

            <div className="text-center mb-8 flex-grow">
              <p className="text-gray-400 line-through text-lg">De R$ 277,00</p>
              <div className="flex items-end justify-center gap-2 mt-2">
                <span className="text-2xl font-bold text-[#c2185b]">Por</span>
                <span className="text-5xl font-black text-[#c2185b]">R$ 187</span>
              </div>
              <p className="text-sm text-green-600 font-bold mt-4">✓ Pagamento na Entrega (SP)</p>
            </div>

            <a 
              href="https://entrega.logzz.com.br/pay/memr8ydd3/ocjfr-1-unidade" 
              className="block w-full py-5 rounded-2xl font-bold text-lg bg-gray-900 text-white text-center shadow-lg hover:bg-black hover:shadow-xl transition-all duration-300"
            >
              Comprar 1 Unidade
            </a>
          </motion.div>

          {/* Mais Vendida */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="w-full lg:w-1/2 max-w-md bg-white rounded-3xl p-8 shadow-2xl border-4 border-[#c2185b] flex flex-col relative transform lg:scale-105 z-10"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#c2185b] text-white px-6 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg flex items-center gap-2">
              <Star className="w-4 h-4 fill-current" /> MAIS VENDIDA
            </div>

            <div className="text-center mb-6 mt-4">
              <h3 className="text-3xl font-bold text-[#c2185b] mb-2">Tratamento Completo</h3>
              <p className="text-xl font-bold text-foreground/80">2 Unidades Aurora Pink</p>
              <p className="text-sm text-[#c2185b] font-semibold mt-2">Recomendado para uso contínuo</p>
            </div>
            
            <div className="flex justify-center mb-6 h-48 relative">
              <img src={img5} alt="Aurora Pink" className="h-full object-contain -mr-8 z-10" />
              <img src={img5} alt="Aurora Pink" className="h-full object-contain" />
            </div>

            <div className="text-center mb-8 flex-grow">
              <p className="text-gray-400 line-through text-xl">De R$ 347,00</p>
              <div className="flex items-end justify-center gap-2 mt-2">
                <span className="text-2xl font-bold text-[#c2185b]">Por</span>
                <span className="text-6xl font-black text-[#c2185b]">R$ 247</span>
              </div>
              <p className="text-green-600 font-bold mt-4 flex items-center justify-center gap-1">
                <CheckCircle2 className="w-4 h-4" /> Pagamento na Entrega (SP)
              </p>
            </div>

            <a 
              href="https://entrega.logzz.com.br/pay/memr8ydd3/2-unidades-r24700" 
              className="block w-full py-5 rounded-2xl font-bold text-xl bg-[#c2185b] text-white text-center shadow-[0_8px_30px_rgb(194,24,91,0.4)] hover:shadow-[0_8px_40px_rgb(194,24,91,0.6)] hover:-translate-y-1 transition-all duration-300 animate-pulse"
              style={{ animationDuration: '2s' }}
            >
              Comprar 2 Unidades
            </a>
          </motion.div>

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
              <AccordionContent className="text-base">
                Foi desenvolvido para diferentes tipos de pele. Os resultados podem variar de pessoa para pessoa, respeitando as características únicas do seu corpo.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg">Em quanto tempo posso perceber melhora?</AccordionTrigger>
              <AccordionContent className="text-base">
                Algumas pessoas percebem mudanças graduais ao longo do uso contínuo. A constância é fundamental para o sucesso do cuidado diário.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg">Como aplicar?</AccordionTrigger>
              <AccordionContent className="text-base">
                Aplicar uma pequena quantidade nas áreas da pele com manchas ou escurecimento e massagear suavemente até a completa absorção.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg">Posso usar todos os dias?</AccordionTrigger>
              <AccordionContent className="text-base">
                Sim, absolutamente. O uso diário faz parte da rotina recomendada para que os ativos ajam de forma eficaz.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-lg">Como funciona o pagamento na entrega?</AccordionTrigger>
              <AccordionContent className="text-base">
                Comodidade e segurança total: clientes que residem em São Paulo pagam o valor do pedido diretamente ao entregador, apenas quando recebem o produto em mãos.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-6">
              <AccordionTrigger className="text-lg">Qual o prazo de entrega?</AccordionTrigger>
              <AccordionContent className="text-base">
                Para clientes de São Paulo, a entrega é prioritária e pode ocorrer em até 24 horas dependendo da sua região específica.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* 13. Final CTA & Footer */}
      <section className="py-20 px-4 sm:px-6 bg-[#ffe8f2] text-center border-t border-[#c2185b]/10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#c2185b]">Sua pele merece esse cuidado diário.</h2>
          <p className="text-xl text-foreground/80 mb-10">Não adie mais o resgate da sua confiança. Dê o primeiro passo hoje.</p>
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
          <p className="mt-2 text-xs">Este produto não se destina a diagnosticar, tratar, curar ou prevenir qualquer doença. Os resultados podem variar de pessoa para pessoa.</p>
        </div>
      </footer>

    </div>
  );
}
