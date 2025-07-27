import Image from "next/image";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Heart, Smartphone, Video, BookOpen, Gift, XCircle, CheckCircle2 } from "lucide-react";

export default function SalesPage() {
  const checkoutUrl = "#"; // Replace with your checkout link

  const benefits = [
    {
      icon: <Smartphone className="h-8 w-8" />,
      text: "App com interface intuitiva",
    },
    {
      icon: <Video className="h-8 w-8" />,
      text: "Vídeo mostrando o ponto exato da calda",
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      text: "PDF completo com dicas e erros comuns",
    },
    {
      icon: <Gift className="h-8 w-8" />,
      text: "BÔNUS: 150 receitas de recheios",
    },
  ];

  const faqItems = [
    {
      question: "É só uma receita?",
      answer: "Não! É um método completo. Você recebe o app com o passo a passo em vídeo, um PDF detalhado com dicas e os erros mais comuns para evitar, e o bônus exclusivo de 150 receitas de recheios frios e brigadeiros sem fogo."
    },
    {
      question: "Funciona mesmo sem experiência?",
      answer: "Sim! O método foi desenhado para iniciantes. As instruções visuais e o passo a passo detalhado garantem que até quem nunca cozinhou consiga acertar de primeira."
    },
    {
      question: "O que acontece após a compra?",
      answer: "O acesso é imediato. Assim que o pagamento for confirmado, você receberá um e-mail com todas as instruções para acessar o app e baixar seu material."
    }
  ];

  return (
    <div className="flex min-h-screen flex-col bg-background font-body text-foreground">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 max-w-screen-lg items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Heart className="h-7 w-7 text-primary" />
            <span className="font-bold font-headline text-xl">Morango do Amor Pro</span>
          </div>
          <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold shadow-lg">
            <a href="#cta">Quero o Acesso</a>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        <section className="container mx-auto max-w-4xl px-4 py-16 text-center sm:py-24">
          <h1 className="font-headline text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Você vai fazer o Morango do Amor Perfeito ainda hoje – <span className="text-primary">mesmo que nunca tenha acertado um doce na vida.</span>
          </h1>
          <div className="mt-4">
            <Image src="https://i.imgur.com/erXA2Pr.gif" alt="Demonstração do Morango do Amor" width={300} height={300} className="mx-auto rounded-lg" unoptimized />
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-foreground/80 sm:text-xl">
            Aprenda de uma vez por todas com nosso app: com imagens, vídeo e explicações claras – sem enrolação.
          </p>
          <div className="mt-10">
            <Button asChild size="lg" className="h-auto w-full max-w-md bg-accent hover:bg-accent/90 text-accent-foreground font-bold uppercase tracking-wider text-lg px-10 py-6 shadow-2xl shadow-accent/40 transition-transform duration-300 hover:scale-105">
              <a href={checkoutUrl}>QUERO O MEU ACESSO POR R$9,90 AGORA</a>
            </Button>
          </div>
          <div className="mt-12 mx-auto max-w-4xl">
            <Card className="overflow-hidden rounded-2xl border-4 border-white shadow-2xl shadow-primary/20">
              <Image src="https://placehold.co/1200x600.png" alt="Morango do Amor Perfeito" width={1200} height={600} className="w-full" data-ai-hint="strawberry chocolate" priority />
            </Card>
          </div>
        </section>

        <section className="bg-card py-16 sm:py-24">
          <div className="container mx-auto max-w-3xl px-4">
            <h2 className="text-center font-headline text-3xl font-bold text-foreground sm:text-4xl">Você já se frustrou ao tentar...</h2>
            <Card className="mt-10 p-8 shadow-lg bg-background">
              <ul className="space-y-5 text-lg text-foreground/90">
                <li className="flex items-start gap-4">
                  <XCircle className="mt-1 h-6 w-6 flex-shrink-0 text-destructive" />
                  <span>Seguir vídeos no TikTok que <strong>pulam etapas cruciais?</strong></span>
                </li>
                <li className="flex items-start gap-4">
                  <XCircle className="mt-1 h-6 w-6 flex-shrink-0 text-destructive" />
                  <span>Fazer a calda e ela <strong>grudar, queimar ou nunca dar o ponto?</strong></span>
                </li>
                <li className="flex items-start gap-4">
                  <XCircle className="mt-1 h-6 w-6 flex-shrink-0 text-destructive" />
                  <span>Repetir a receita e o doce continuar <strong>melando e pegajoso?</strong></span>
                </li>
              </ul>
              <p className="mt-8 text-center text-xl font-semibold font-headline">Então essa página é para você.</p>
            </Card>
          </div>
        </section>

        <section className="container mx-auto max-w-5xl px-4 py-16 sm:py-24">
          <div className="grid items-center gap-12 md:grid-cols-2">
             <div className="order-2 md:order-1">
              <Card className="overflow-hidden rounded-2xl shadow-2xl shadow-primary/20">
                <Image src="https://placehold.co/600x800.png" alt="App Preview" width={600} height={800} className="w-full" data-ai-hint="app mockup" />
              </Card>
            </div>
            <div className="text-center md:text-left order-1 md:order-2">
              <h2 className="font-headline text-3xl font-bold text-foreground sm:text-4xl">O Segredo que Mudou Tudo</h2>
              <p className="mt-6 text-lg text-foreground/80">
                Com o App “Segredo do Morango do Amor”, você segue um passo a passo à prova de erros com vídeo, PDF e instruções visuais para nunca mais falhar.
              </p>
              <p className="mt-4 text-2xl font-bold text-accent">Chega de desperdiçar ingredientes. Tenha sucesso na primeira tentativa por apenas R$9,90.</p>
            </div>
          </div>
        </section>

        <section className="bg-card py-16 sm:py-24">
          <div className="container mx-auto max-w-4xl px-4">
            <h2 className="text-center font-headline text-3xl font-bold text-foreground sm:text-4xl">O que você recebe imediatamente</h2>
            <Card className="mt-12 p-8 shadow-lg bg-background">
              <ul className="space-y-6">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-5 text-lg">
                    <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-primary/20 text-primary flex-shrink-0">
                      {benefit.icon}
                    </div>
                    <span className="font-semibold">{benefit.text}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </section>

        <section className="container mx-auto max-w-5xl px-4 py-16 text-center sm:py-24">
          <h2 className="font-headline text-3xl font-bold sm:text-4xl">Na prática, é sobre isso...</h2>
          <p className="mt-4 text-lg text-foreground/80">Imagine entregar um doce digno de vitrine, com uma casquinha crocante e brilhante.</p>
          <div className="mt-10 max-w-3xl mx-auto">
            <Carousel opts={{ loop: true }} className="w-full">
              <CarouselContent>
                <CarouselItem><Card className="overflow-hidden rounded-xl"><Image src="https://placehold.co/800x600.png" alt="Doce perfeito para festas" width={800} height={600} data-ai-hint="dessert party" /></Card></CarouselItem>
                <CarouselItem><Card className="overflow-hidden rounded-xl"><Image src="https://placehold.co/800x600.png" alt="Doce para presentear" width={800} height={600} data-ai-hint="dessert giftbox" /></Card></CarouselItem>
                <CarouselItem><Card className="overflow-hidden rounded-xl"><Image src="https://placehold.co/800x600.png" alt="Doce perfeito" width={800} height={600} data-ai-hint="perfect dessert" /></Card></CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="ml-12" />
              <CarouselNext className="mr-12" />
            </Carousel>
          </div>
          <p className="mt-8 text-xl text-foreground/80 font-headline">Agora imagine seus amigos dizendo: <span className="font-bold text-foreground">“Você que fez isso?”</span></p>
          <p className="mt-4 text-xl font-bold font-headline">Ou melhor… imagine vender e <span className="text-accent">lucrar</span> com ele.</p>
        </section>

        <section id="cta" className="bg-card py-16 sm:py-24">
          <div className="container mx-auto max-w-3xl px-4 text-center">
            <h2 className="font-headline text-3xl font-bold text-foreground sm:text-4xl">Pronta para acertar de vez?</h2>
            <div className="mt-8">
              <Button asChild size="lg" className="h-auto w-full max-w-lg bg-accent hover:bg-accent/90 text-accent-foreground font-bold uppercase tracking-wider text-xl px-10 py-7 shadow-2xl shadow-accent/40 transition-transform duration-300 hover:scale-105">
                <a href={checkoutUrl}>QUERO O MEU ACESSO POR R$9,90 AGORA</a>
              </Button>
            </div>
            <div className="mt-8 flex items-center justify-center gap-4 rounded-xl border-2 border-green-500 bg-green-50 p-4 max-w-md mx-auto">
              <CheckCircle2 className="h-10 w-10 text-green-600 flex-shrink-0" />
              <div>
                <p className="font-semibold text-green-800 text-left">Garantia incondicional de 7 dias.</p>
                <p className="text-sm text-green-700 text-left">Se não amar o método ou não tiver resultados, seu dinheiro de volta. Simples assim.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto max-w-3xl px-4 py-16 sm:py-24">
          <h2 className="text-center font-headline text-3xl font-bold text-foreground sm:text-4xl">Ainda tem dúvidas?</h2>
          <Accordion type="single" collapsible className="mt-10 w-full">
            {faqItems.map((item, index) => (
              <AccordionItem value={`item-${index+1}`} key={index} className="border-border bg-card px-4 rounded-lg mb-2 shadow-sm">
                <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline">{item.question}</AccordionTrigger>
                <AccordionContent className="text-base text-foreground/80 pb-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </main>

      <footer className="border-t border-border/40 bg-card">
        <div className="container mx-auto max-w-4xl px-4 py-12 text-center">
          <h3 className="text-xl font-bold font-headline">Não Perca Esta Oportunidade Única</h3>
          <p className="mt-4 text-lg text-foreground/80">Essa oferta de R$9,90 é por tempo limitado e pode sair do ar a qualquer momento. Garanta o seu acesso e domine o Morango do Amor Perfeito de uma vez por todas.</p>
          <div className="mt-8">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-10 py-5 h-auto shadow-lg transition-transform duration-300 hover:scale-105">
              <a href={checkoutUrl}>Garantir Acesso Agora</a>
            </Button>
          </div>
          <p className="text-xs mt-8 text-foreground/50">Morango do Amor Pro &copy; 2024. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
