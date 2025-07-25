"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Camera,
  Users,
  Award,
  Clock,
  Mail,
  Phone,
  MapPin,
  Star,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CountUp from "react-countup";

function NumberAnimated({
  number,
  duration,
  label,
}: {
  number: number;
  duration: number;
  label: string;
}) {
  return (
    <div>
      <div className="text-center">
        <div className="text-4xl lg:text-5xl font-serif font-normal text-white mb-2">
          <CountUp start={0} end={number} duration={duration} suffix="+" />
        </div>
        <div className="text-gray-400 font-medium tracking-wide">{label}</div>
      </div>
    </div>
  );
}

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white font-sans">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full bg-black/90 backdrop-blur-xl border-b border-gray-800">
        <div className="container mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/logo.svg"
              alt="Corporate Image"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <span className="text-2xl font-serif font-medium tracking-wide text-white">
              Corporate Image
            </span>
          </Link>
          <nav className="hidden lg:flex items-center space-x-12">
            <Link
              href="#sobre"
              className="text-gray-300 hover:text-white transition-colors font-medium tracking-wide"
            >
              Sobre
            </Link>
            <Link
              href="#servicos"
              className="text-gray-300 hover:text-white transition-colors font-medium tracking-wide"
            >
              Serviços
            </Link>
            <Link
              href="#portfolio"
              className="text-gray-300 hover:text-white transition-colors font-medium tracking-wide"
            >
              Portfolio
            </Link>
            <Link
              href="#contato"
              className="text-gray-300 hover:text-white transition-colors font-medium tracking-wide"
            >
              Contato
            </Link>
          </nav>
          <Link
            href="#contato"
            className="bg-white text-black hover:bg-gray-100 font-semibold px-6 py-2 rounded-none"
          >
            Solicitar Orçamento
          </Link>
        </div>
      </header>

      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="absolute inset-0 bg-gray-400 bg-cover bg-center opacity-20"></div>
          <div className="container mx-auto px-6 lg:px-8 relative z-10 text-center">
            <div className="max-w-5xl mx-auto">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-normal mb-8 leading-tight tracking-tight animate-fade-in-up">
                <span
                  className="inline-block animate-scale-in"
                  style={{ animationDelay: "0.2s" }}
                >
                  Imagens que
                </span>
                <br />
                <span
                  className="font-serif italic text-gray-300 inline-block animate-scale-in"
                  style={{ animationDelay: "0.6s" }}
                >
                  Definem Corporações
                </span>
              </h1>
              <p
                className="text-xl md:text-2xl mb-12 text-gray-400 font-normal leading-relaxed max-w-3xl mx-auto animate-fade-in-up"
                style={{ animationDelay: "1s" }}
              >
                Fotografia corporativa de excelência para organizações que
                lideram mercados globais
              </p>
              <div
                className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up"
                style={{ animationDelay: "1.4s" }}
              >
                <Button
                  size="lg"
                  className="bg-white text-black hover:bg-gray-100 text-lg px-12 py-4 rounded-none font-semibold group"
                >
                  Explorar Portfolio
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce pb-10">
            <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-600 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gray-950 border-y border-gray-800">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {/* <CountUp start={0} end={750} duration={2} suffix="+" /> */}
              <NumberAnimated
                number={700}
                duration={5}
                label="Eventos Executados"
              />

              <NumberAnimated
                number={300}
                duration={5}
                label="Corporações Atendidas"
              />
              <NumberAnimated
                number={20}
                duration={5}
                label="Anos de Mercado"
              />
              <NumberAnimated
                number={5}
                duration={5}
                label="Estados Atendidos"
              />
            </div>
          </div>
        </section>

        {/* Sobre Section */}
        <section id="sobre" className="py-32 bg-black">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <div className="text-sm font-semibold text-gray-500 tracking-widest uppercase mb-6">
                  Sobre Nós
                </div>
                <h2 className="text-4xl md:text-5xl font-serif font-normal text-white mb-8 leading-tight">
                  Estabelecendo Novos
                  <br />
                  <span className="italic text-gray-300">Padrões Visuais</span>
                </h2>
                <p className="text-lg text-gray-400 mb-8 leading-relaxed font-normal">
                  Por mais de duas décadas, a Corporate Image tem sido sinônimo
                  de excelência em documentação visual corporativa. Nossa
                  metodologia combina técnica fotográfica avançada com profundo
                  entendimento dos objetivos estratégicos de cada organização.
                </p>
                <p className="text-lg text-gray-400 mb-12 leading-relaxed font-normal">
                  Atendemos exclusivamente corporações de grande porte,
                  capturando momentos decisivos que se tornam marcos na
                  trajetória das organizações mais influentes do cenário
                  empresarial brasileiro.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-white mr-4" />
                    <span className="text-gray-300 font-medium">
                      Cobertura nacional com foco em Brasília e região Sul
                    </span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-white mr-4" />
                    <span className="text-gray-300 font-medium">
                      Especialistas em documentação fotográfica corporativa
                    </span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/5] bg-gray-900 relative overflow-hidden">
                  <Image
                    src="/images/54640127194_9f1f907fab_o.jpg"
                    alt="Fotógrafo profissional"
                    width={640}
                    height={800}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Serviços Section */}
        <section id="servicos" className="py-32 bg-gray-950">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-20">
              <div className="text-sm font-semibold text-gray-500 tracking-widest uppercase mb-6">
                Serviços
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-normal text-white mb-8 leading-tight">
                Excelência em Cada
                <br />
                <span className="italic text-gray-300">Especialidade</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-black border border-gray-800 hover:border-gray-600 transition-all duration-300 group">
                <CardContent className="p-8">
                  <Users className="h-8 w-8 text-white mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-serif font-medium text-white mb-4 tracking-wide">
                    Conferências Executivas
                  </h3>
                  <p className="text-gray-400 leading-relaxed font-normal">
                    Documentação estratégica de eventos C-level, registrando
                    decisões que moldam o mercado brasileiro.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-black border border-gray-800 hover:border-gray-600 transition-all duration-300 group">
                <CardContent className="p-8">
                  <Award className="h-8 w-8 text-white mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-serif font-medium text-white mb-4 tracking-wide">
                    Cerimônias Corporativas
                  </h3>
                  <p className="text-gray-400 leading-relaxed font-normal">
                    Registro solene de marcos empresariais, premiações e
                    reconhecimentos institucionais de alto nível.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-black border border-gray-800 hover:border-gray-600 transition-all duration-300 group">
                <CardContent className="p-8">
                  <Camera className="h-8 w-8 text-white mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-serif font-medium text-white mb-4 tracking-wide">
                    Lançamentos Estratégicos
                  </h3>
                  <p className="text-gray-400 leading-relaxed font-normal">
                    Cobertura completa de apresentações de produtos e serviços
                    que redefinem setores inteiros.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-black border border-gray-800 hover:border-gray-600 transition-all duration-300 group">
                <CardContent className="p-8">
                  <Users className="h-8 w-8 text-white mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-serif font-medium text-white mb-4 tracking-wide">
                    Networking Executivo
                  </h3>
                  <p className="text-gray-400 leading-relaxed font-normal">
                    Captura discreta de conexões estratégicas que geram milhões
                    em oportunidades de negócios.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-black border border-gray-800 hover:border-gray-600 transition-all duration-300 group">
                <CardContent className="p-8">
                  <Clock className="h-8 w-8 text-white mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-serif font-medium text-white mb-4 tracking-wide">
                    Retratos Executivos
                  </h3>
                  <p className="text-gray-400 leading-relaxed font-normal">
                    Portraits que comunicam liderança, autoridade e visão
                    estratégica no mercado nacional.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-32 bg-black">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-20">
              <div className="text-sm font-semibold text-gray-500 tracking-widest uppercase mb-6">
                Portfolio
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-normal text-white mb-8 leading-tight">
                Trabalhos que
                <br />
                <span className="italic text-gray-300">Fazem História</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1">
              <div className="group relative aspect-square overflow-hidden bg-gray-900">
                <Image
                  src="/images/54646413186_792e8c4d22_o.jpg"
                  alt="Conferência Fortune Global"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center">
                    <h3 className="text-lg font-serif font-medium mb-2 tracking-wide">
                      80 anos CNC - Conferência Nacional de Corporações
                    </h3>
                    <p className="text-sm text-gray-300 font-normal">
                      Brasília, 2025
                    </p>
                  </div>
                </div>
              </div>
              <div className="group relative aspect-square overflow-hidden bg-gray-900">
                <Image
                  src="/images/MAR_0267.jpg"
                  alt="ANADEP Defensoria em Todos os Cantos"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center">
                    <h3 className="text-lg font-serif font-medium mb-2 tracking-wide">
                      ANADEP Defensoria em Todos os Cantos
                    </h3>
                    <p className="text-sm text-gray-300 font-normal">
                      Brasília, 2025
                    </p>
                  </div>
                </div>
              </div>
              <div className="group relative aspect-square overflow-hidden bg-gray-900">
                <Image
                  src="/images/MAR_3052.jpg"
                  alt="Ministerios das comunicações e EAF"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center">
                    <h3 className="text-lg font-serif font-medium mb-2 tracking-wide">
                      Ministerios das comunicações e EAF
                    </h3>
                    <p className="text-sm text-gray-300 font-normal">
                      Brasília, 2025
                    </p>
                  </div>
                </div>
              </div>
              <div className="group relative aspect-square overflow-hidden bg-gray-900">
                <Image
                  src="/images/MAR_8953.JPG"
                  alt="INFRA S.A"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center">
                    <h3 className="text-lg font-serif font-medium mb-2 tracking-wide">
                      INFRA S.A
                    </h3>
                    <p className="text-sm text-gray-300 font-normal">
                      Brasília, 2025
                    </p>
                  </div>
                </div>
              </div>
              <div className="group relative aspect-square overflow-hidden bg-gray-900">
                <Image
                  src="/images/MAR_3435.JPG"
                  alt="Reunião Estratégica"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center">
                    <h3 className="text-lg font-serif font-medium mb-2 tracking-wide">
                      EL PACCTO G20
                    </h3>
                    <p className="text-sm text-gray-300 font-normal">
                      Brasília, 2025
                    </p>
                  </div>
                </div>
              </div>
              <div className="group relative aspect-square overflow-hidden bg-gray-900">
                <Image
                  src="/images/MAR_5098.JPG"
                  alt="IBGE 3º Encontro Nacional de Servifores do IBGE"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center">
                    <h3 className="text-lg font-serif font-medium mb-2 tracking-wide">
                      IBGE 3º Encontro Nacional de Servifores do IBGE
                    </h3>
                    <p className="text-sm text-gray-300 font-normal">
                      Brasília, 2025
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-16">
              <Button
                size="lg"
                variant="ghost"
                className="border border-gray-600 text-white hover:bg-white hover:text-black px-12 py-4 rounded-none font-semibold group"
              >
                Portfolio Completo
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </section>

        {/* Depoimentos Section */}
        <section className="py-32 bg-gray-950">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-20">
              <div className="text-sm font-semibold text-gray-500 tracking-widest uppercase mb-6">
                Depoimentos
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-normal text-white mb-8 leading-tight">
                Confiança de
                <br />
                <span className="italic text-gray-300">Líderes Globais</span>
              </h2>
            </div>
            <div className="grid lg:grid-cols-3 gap-8">
              <Card className="bg-black border border-gray-800">
                <CardContent className="p-8">
                  <div className="flex mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 text-white fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-8 leading-relaxed font-normal text-lg">
                    "Profissionalismo incomparável. Cada imagem captura não
                    apenas o momento, mas a essência estratégica do nosso
                    evento."
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-black border border-gray-800">
                <CardContent className="p-8">
                  <div className="flex mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 text-white fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-8 leading-relaxed font-normal text-lg">
                    "Transformaram nossa conferência anual em um marco visual
                    institucional. Cada fotografia conta a história do nosso
                    crescimento e liderança no mercado brasileiro."
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-black border border-gray-800">
                <CardContent className="p-8">
                  <div className="flex mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 text-white fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-8 leading-relaxed font-normal text-lg">
                    "Parceiros estratégicos em todos os nossos lançamentos
                    nacionais. Qualidade técnica e visão corporativa que
                    estabelecem novos padrões de excelência."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contato Section */}
        <section id="contato" className="py-32 bg-black">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-20">
              <div className="text-sm font-semibold text-gray-500 tracking-widest uppercase mb-6">
                Contato
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-normal text-white mb-8 leading-tight">
                Vamos Construir
                <br />
                <span className="italic text-gray-300">História Juntos?</span>
              </h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-20">
              <div>
                <h3 className="text-2xl font-serif font-medium mb-12 tracking-wide text-white">
                  Informações de Contato
                </h3>
                <div className="space-y-8">
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-white mr-6 mt-1" />
                    <div>
                      <div className="font-medium text-white mb-1 tracking-wide">
                        Telefone Executivo
                      </div>
                      <div className="text-gray-400 font-normal">
                        +55 (61) 98148-0142
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-white mr-6 mt-1" />
                    <div>
                      <div className="font-medium text-white mb-1 tracking-wide">
                        Email
                      </div>
                      <div className="text-gray-400 font-normal">
                        mardoniofotografia@hotmail.com
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-white mr-6 mt-1" />
                    <div>
                      <div className="font-medium text-white mb-1 tracking-wide">
                        Sede Nacional
                      </div>
                      <div className="text-gray-400 font-normal">
                        Brasília, DF
                        <br />
                        Atendemos Brasília e região Sul do Brasil
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <section id="proposta">
                  <Card className="bg-gray-950 border border-gray-800">
                    <CardContent className="p-10">
                      <h3 className="text-2xl font-serif font-medium mb-8 tracking-wide text-white">
                        Solicitar Proposta
                      </h3>
                      <form className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium mb-3 text-gray-300 tracking-wide">
                              Nome Completo
                            </label>
                            <Input
                              className="bg-black border-gray-700 text-white rounded-none h-12 font-normal"
                              placeholder="Seu nome"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-3 text-gray-300 tracking-wide">
                              Empresa
                            </label>
                            <Input
                              className="bg-black border-gray-700 text-white rounded-none h-12 font-normal"
                              placeholder="Nome da empresa"
                            />
                          </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium mb-3 text-gray-300 tracking-wide">
                              Email Corporativo
                            </label>
                            <Input
                              type="email"
                              className="bg-black border-gray-700 text-white rounded-none h-12 font-normal"
                              placeholder="email@empresa.com"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-3 text-gray-300 tracking-wide">
                              Telefone
                            </label>
                            <Input
                              className="bg-black border-gray-700 text-white rounded-none h-12 font-normal"
                              placeholder="+55 (11) 99999-9999"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-3 text-gray-300 tracking-wide">
                            Tipo de Evento
                          </label>
                          <Input
                            className="bg-black border-gray-700 text-white rounded-none h-12 font-normal"
                            placeholder="Conferência, Lançamento, Premiação..."
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-3 text-gray-300 tracking-wide">
                            Data Prevista
                          </label>
                          <Input
                            type="date"
                            className="bg-black border-gray-700 text-white rounded-none h-12 font-normal"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-3 text-gray-300 tracking-wide">
                            Detalhes do Projeto
                          </label>
                          <Textarea
                            className="bg-black border-gray-700 text-white rounded-none font-normal"
                            placeholder="Descreva seu evento e expectativas..."
                            rows={4}
                          />
                        </div>
                        <Button className="w-full bg-white text-black hover:bg-gray-100 rounded-none h-12 font-semibold tracking-wide">
                          Enviar Solicitação
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </section>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-950 border-t border-gray-800 py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Image
                  src="/logo.svg"
                  alt="Corporate Image"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
                <span className="text-xl font-serif font-medium tracking-wide text-white">
                  Corporate Image
                </span>
              </div>
              <p className="text-gray-400 leading-relaxed font-normal">
                Estabelecendo novos padrões em fotografia corporativa através de
                excelência técnica e visão estratégica focada no mercado
                brasileiro.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-6 tracking-wide text-white">
                Serviços
              </h4>
              <ul className="space-y-3 text-gray-400 font-normal">
                <li>Conferências Executivas</li>
                <li>Cerimônias Corporativas</li>
                <li>Lançamentos Estratégicos</li>
                <li>Networking Executivo</li>
                <li>Retratos Executivos</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-6 tracking-wide text-white">
                Empresa
              </h4>
              <ul className="space-y-3 text-gray-400 font-normal">
                <li>Sobre Nós</li>
                <li>Portfolio</li>
                <li>Metodologia</li>
                <li>Carreiras</li>
                <li>Imprensa</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-6 tracking-wide text-white">
                Contato
              </h4>
              <ul className="space-y-3 text-gray-400 font-normal">
                <li>+55 (61) 98148-0142</li>
                <li>mardoniofotografia@hotmail.com</li>
                <li>Brasília, Brasil</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 font-normal">
            <p>
              &copy; {new Date().getFullYear()} Corporate Image. Todos os
              direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
