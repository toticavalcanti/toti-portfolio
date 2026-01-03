import Container from './Container';
import SectionTitle from './SectionTitle';
import ServiceCard from './ServiceCard';
import { services } from '@/mockData';

export default function ServicesOverview() {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-28">
      <Container>
        <SectionTitle
          title="Serviços & Soluções"
          subtitle="Sistemas, automação, audiovisual, música, personagens digitais e design."
          centered
          className="mx-auto"
        />

        {/* Como Eu Trabalho - AI-Powered Workflow */}
        <div className="max-w-3xl mx-auto mb-12 p-6 sm:p-8 rounded-xl bg-background-secondary border border-border">
          <h3 className="text-xl font-bold mb-4 text-center">Como Eu Trabalho</h3>
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">01</div>
              <div className="font-semibold mb-1">Atendimento Inteligente</div>
              <div className="text-sm text-foreground-secondary">
                IA entende sua demanda e gera proposta inicial automaticamente
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">02</div>
              <div className="font-semibold mb-1">Proposta Detalhada</div>
              <div className="text-sm text-foreground-secondary">
                Escopo, prazo e investimento refinados em até 48h
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">03</div>
              <div className="font-semibold mb-1">Execução</div>
              <div className="text-sm text-foreground-secondary">
                Entregas iterativas + suporte contínuo
              </div>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-border text-center text-sm text-foreground-secondary">
            <p>💡 Conversa pessoal apenas quando necessário para alinhar detalhes finais (máx. 15min)</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 lg:gap-16 mt-8 sm:mt-10 md:mt-12">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </Container>
    </section>
  );
}
