import Image from "next/image";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Heart, Smartphone, Video, BookOpen, Gift, XCircle, CheckCircle2 } from "lucide-react";

export default function SalesPage() {
  const checkoutUrl = "#"; // Replace with your checkout link

  const benefits = [
    {
      icon: <Smartphone className="h-8 w-8" />,
      text: "App personalizado para você!",
    },
    {
      icon: <Video className="h-8 w-8" />,
      text: "Vídeo mostrando CADA passo da receita",
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      text: "PDF detalhado da receita",
    },
    {
      icon: <Gift className="h-8 w-8" />,
      text: "SUPER BÔNUS: 150 receitas de recheios",
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

  const carouselImages = [
    { src: "https://i.imgur.com/XIJj4gO.png", alt: "Morango do Amor Exemplo 1" },
    { src: "https://i.imgur.com/pYLWKOQ.png", alt: "Morango do Amor Exemplo 2" },
    { src: "https://i.imgur.com/Gxt710S.png", alt: "Morango do Amor Exemplo 3" },
    { src: "https://i.imgur.com/ZVsombB.png", alt: "Morango do Amor Exemplo 4" },
  ];

  const offerItems = [
      { text: "Acesso Exclusivo ao APP", price: "De R$ 30" },
      { text: "PDF DETALHADO DE NOSSA RECEITA", price: "De R$ 20" },
      { text: "VÍDEO PASSO A PASSO DA RECEITA", price: "De R$ 27" },
      { text: "BÔNUS EXCLUSIVO: 150 Receitas de Recheios que não vão ao fogo", price: "De R$ 97" },
      { text: "Suporte Profissional", price: "" },
      { text: "Garantia Incondicional", price: "" },
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
              <a href="#cta">QUERO O MEU ACESSO POR R$9,90 AGORA</a>
            </Button>
          </div>
        </section>

        <section className="bg-card py-16 sm:py-24">
          <div className="container mx-auto max-w-3xl px-4">
            <h2 className="text-center font-headline text-3xl font-bold text-foreground sm:text-4xl">CHEGA DE:</h2>
            <Card className="mt-10 p-8 shadow-lg bg-background">
              <div className="mb-8">
                <Image src="https://i.imgur.com/9nc3Jw5.jpeg" alt="Morangos com calda" width={400} height={266} className="w-full max-w-sm mx-auto rounded-2xl shadow-xl" />
              </div>
              <ul className="space-y-5 text-lg text-foreground/90">
                <li className="flex items-start gap-4">
                  <XCircle className="mt-1 h-6 w-6 flex-shrink-0 text-destructive" />
                  <span>Ficar perdida sem saber por onde começar</span>
                </li>
                <li className="flex items-start gap-4">
                  <XCircle className="mt-1 h-6 w-6 flex-shrink-0 text-destructive" />
                  <span>Tentar fazer e sempre errar o ponto da calda</span>
                </li>
                <li className="flex items-start gap-4">
                  <XCircle className="mt-1 h-6 w-6 flex-shrink-0 text-destructive" />
                  <span>Gastar ingredientes e jogar tudo fora</span>
                </li>
                <li className="flex items-start gap-4">
                  <XCircle className="mt-1 h-6 w-6 flex-shrink-0 text-destructive" />
                  <span>Se sentir frustrada por ver todo mundo conseguindo, menos você</span>
                </li>
                <li className="flex items-start gap-4">
                  <XCircle className="mt-1 h-6 w-6 flex-shrink-0 text-destructive" />
                  <span>Ter medo de tentar de novo e se decepcionar</span>
                </li>
                <li className="flex items-start gap-4">
                  <XCircle className="mt-1 h-6 w-6 flex-shrink-0 text-destructive" />
                  <span>Só assistir vídeos e nunca conseguir repetir em casa</span>
                </li>
              </ul>
            </Card>
          </div>
        </section>

        <section className="container mx-auto max-w-5xl px-4 py-16 sm:py-24">
          <div className="grid items-center gap-12 md:grid-cols-2">
             <div className="order-2 md:order-1">
              <Card className="overflow-hidden rounded-2xl shadow-2xl shadow-primary/20">
                <Image src="https://i.imgur.com/AoRMTxa.png" alt="App Preview" width={600} height={800} className="w-full" data-ai-hint="app mockup" />
              </Card>
            </div>
            <div className="text-center md:text-left order-1 md:order-2">
              <h2 className="font-headline text-3xl font-bold text-foreground sm:text-4xl">Com o app "O Segredo do Morango do Amor Perfeito" você vai descobrir o que não te contam para fazer um doce impecável.</h2>
              <p className="mt-6 text-lg text-foreground/80">
                Com nosso app, você terá acesso à: PDF detalhado da receita, com todos os erros e práticas que você deve ter para fazer seu doce. Uma Mega Vídeo Aula, de cada passo da receita. E garantido hoje você ainda leva um SUPER BÔNUS: 150 receitas de recheios e brigadeiros que não vão ao fogo.
              </p>
              <p className="mt-4 text-2xl font-bold text-accent">Chega de desperdiçar seus ingredientes. Tenha sucesso na primeira tentativa ainda hoje!</p>
            </div>
          </div>
        </section>

        <section className="bg-card py-16 sm:py-24">
          <div className="container mx-auto max-w-4xl px-4">
            <h2 className="text-center font-headline text-3xl font-bold text-foreground sm:text-4xl">Tudo que você vai receber:</h2>
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
          <h2 className="font-headline text-3xl font-bold sm:text-4xl">Você vai fazer Morangos do Amor como esses:</h2>
          <p className="mt-4 text-lg text-foreground/80">Imagine entregar um doce digno de vitrine, com uma casquinha crocante e brilhante. Mesmo que você tenha ZERO experiência na cozinha,</p>
          <div className="mt-10 max-w-3xl mx-auto">
            <Carousel opts={{ loop: true }} className="w-full">
              <CarouselContent>
                {carouselImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <Card className="overflow-hidden rounded-xl">
                      <Image src={image.src} alt={image.alt} width={800} height={600} />
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="ml-12" />
              <CarouselNext className="mr-12" />
            </Carousel>
          </div>
          <p className="mt-8 text-xl font-bold font-headline">Com nosso método, QUALQUER UM pode fazer!</p>
          <p className="mt-4 text-xl text-foreground/80 font-headline">Agora imagine seus amigos dizendo: <span className="font-bold text-foreground">“Você que fez isso?”</span></p>
          <p className="mt-4 text-xl font-bold font-headline">Ou melhor… imagine vender e <span className="text-accent">lucrar</span> com ele.</p>
        </section>

        <section id="cta" className="bg-card py-16 sm:py-24">
          <div className="container mx-auto max-w-2xl px-4 text-center">
            <Card className="bg-background shadow-2xl shadow-primary/20 border-primary border-2">
                <CardHeader className="p-6">
                    <CardTitle className="font-headline text-2xl sm:text-3xl text-center">❤️ Recapitulando tudo que você vai receber 🍓</CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                    <div className="mb-6">
                        <Image src="https://i.imgur.com/AoRMTxa.png" alt="Offer summary" width={600} height={400} className="rounded-lg mx-auto" />
                    </div>

                    <ul className="space-y-4 text-left mb-6">
                        {offerItems.map((item, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="flex-1 font-semibold">{item.text}</span>
                                <span className="text-sm text-foreground/70 line-through">{item.price}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="text-center bg-primary/10 p-4 rounded-lg">
                        <p className="text-lg text-foreground/80">No total tudo deveria custar <span className="line-through">R$ 174,00</span></p>
                        <p className="text-lg mt-2">Mas hoje você vai ter acesso completo por:</p>
                        <p className="font-headline text-5xl font-bold text-accent my-2">R$ 9,90</p>
                    </div>

                    <div className="mt-8">
                        <Button asChild size="lg" className="h-auto w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-xl px-8 py-6 shadow-2xl shadow-accent/40 transition-transform duration-300 hover:scale-105">
                            <a href={checkoutUrl}>Quero fazer um Morango do Amor Perfeito!</a>
                        </Button>
                    </div>

                </CardContent>
            </Card>
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
