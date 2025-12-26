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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 lg:gap-16 mt-8 sm:mt-10 md:mt-12">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </Container>
    </section>
  );
}
