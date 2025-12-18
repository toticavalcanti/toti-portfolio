import Container from './Container';
import SectionTitle from './SectionTitle';
import ServiceCard from './ServiceCard';
import { services } from '@/mockData';

export default function ServicesOverview() {
  return (
    <section className="py-24 bg-background-secondary">
      <Container>
        <SectionTitle
          title="Serviços"
          subtitle="Soluções criativas e tecnológicas para transformar suas ideias em realidade"
          centered
          className="mx-auto"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </Container>
    </section>
  );
}
