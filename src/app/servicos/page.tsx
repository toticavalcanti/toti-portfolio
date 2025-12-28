import PageHeader from '@/components/PageHeader';
import Container from '@/components/Container';
import ServiceCard from '@/components/ServiceCard';
import Button from '@/components/Button';
import { services } from '@/mockData';
import Link from 'next/link';
import { Check, ArrowRight } from 'lucide-react';

export default function ServicosPage() {
  return (
    <>
      <PageHeader
        title="Serviços & Soluções"
        description="Software, IA, audiovisual, música, personagens digitais e design visual. Base técnica aplicada a diferentes domínios."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Serviços' },
        ]}
      />

      <section className="py-16">
        <Container>
          <div className="grid gap-12">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Service Info */}
                <div>
                  <ServiceCard service={service} />
                </div>

                {/* Details */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-primary">
                      Para quem é?
                    </h3>
                    <ul className="space-y-2">
                      {service.whoItsFor.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-foreground-secondary"
                        >
                          <Check size={20} className="text-success mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-4 text-primary">
                      Benefícios
                    </h3>
                    <ul className="space-y-2">
                      {service.benefits.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-foreground-secondary"
                        >
                          <Check size={20} className="text-success mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button asChild>
                    <Link href="/contato">
                      Solicitar Orçamento <ArrowRight size={20} className="ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* FAQ de Precificação */}
          <section className="mt-24 pt-16 border-t border-border">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Perguntas Frequentes sobre Precificação
            </h2>
            
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-background-secondary rounded-lg p-6">
                <h3 className="text-lg font-bold mb-2">
                  Por que preço por minuto/quantidade ao invés de pacotes fechados?
                </h3>
                <p className="text-foreground-secondary">
                  Transparência total. Você paga exatamente pelo que usa. Um clipe de 3 minutos 
                  não deve custar o mesmo que um de 5 minutos. Cada projeto é único, e o preço 
                  reflete o trabalho real necessário, não categorias arbitrárias.
                </p>
              </div>

              <div className="bg-background-secondary rounded-lg p-6">
                <h3 className="text-lg font-bold mb-2">
                  Como funciona o orçamento personalizado?
                </h3>
                <p className="text-foreground-secondary">
                  1. Você preenche o formulário ou entra em contato via WhatsApp<br />
                  2. Analisamos seu pedido em até 24h úteis<br />
                  3. Marcamos uma conversa rápida (15-30min) para alinhar detalhes<br />
                  4. Enviamos proposta formal com escopo e valores<br />
                  5. Ajustamos se necessário e fechamos o projeto
                </p>
              </div>

              <div className="bg-background-secondary rounded-lg p-6">
                <h3 className="text-lg font-bold mb-2">
                  Posso parcelar o pagamento?
                </h3>
                <p className="text-foreground-secondary">
                  Sim! Projetos acima de R$ 5.000 podem ser parcelados em até 3x sem juros 
                  via transferência bancária ou Pix. Para valores maiores (R$ 20.000+), 
                  podemos negociar pagamento por milestone: 30% início, 40% entrega intermediária, 
                  30% entrega final.
                </p>
              </div>

              <div className="bg-background-secondary rounded-lg p-6">
                <h3 className="text-lg font-bold mb-2">
                  Trabalho com todos os estilos musicais?
                </h3>
                <p className="text-foreground-secondary">
                  SIM! Produção musical: MPB, Samba, Forró, Pop, Rock, Jazz, Blues, Eletrônico, 
                  Árabe, Indiano, Africano, Orquestral, Experimental... qualquer estilo ou 
                  instrumentação. O preço varia pela complexidade do trabalho, não pelo estilo.
                </p>
              </div>

              <div className="bg-background-secondary rounded-lg p-6">
                <h3 className="text-lg font-bold mb-2">
                  Como funciona para Pocket Shows: preciso contratar equipamento separado?
                </h3>
                <p className="text-foreground-secondary">
                  Depende. Se o local do evento já tem equipamento de som adequado (caixas P.A., 
                  mesa, microfones), você paga apenas o cachê artístico. Se não tem, posso 
                  providenciar todo o equipamento + técnico, com custo adicional claro e 
                  transparente conforme tamanho do público.
                </p>
              </div>

              <div className="bg-background-secondary rounded-lg p-6">
                <h3 className="text-lg font-bold mb-2">
                  Tem garantia de satisfação?
                </h3>
                <p className="text-foreground-secondary">
                  Todos os projetos incluem rodadas de revisão (quantidade varia por serviço). 
                  Se não ficar satisfeito após as revisões inclusas, podemos negociar ajustes 
                  extras ou reembolso parcial conforme trabalho já realizado.
                </p>
              </div>

              <div className="bg-background-secondary rounded-lg p-6">
                <h3 className="text-lg font-bold mb-2">
                  Quanto tempo demora para começar o projeto?
                </h3>
                <p className="text-foreground-secondary">
                  Depende da minha agenda atual, mas geralmente:<br />
                  • Projetos pequenos (até R$ 10K): Início em 1-2 semanas<br />
                  • Projetos médios (R$ 10-30K): Início em 2-4 semanas<br />
                  • Projetos grandes (R$ 30K+): Planejamento prévio, início em 4-6 semanas<br />
                  Urgências podem ser aceleradas com taxa de express (+30%).
                </p>
              </div>
            </div>
          </section>
        </Container>
      </section>
    </>
  );
}
