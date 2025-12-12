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
        title="Serviços"
        description="Soluções criativas e tecnológicas para transformar suas ideias em realidade digital"
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
        </Container>
      </section>
    </>
  );
}
