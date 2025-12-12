import Link from 'next/link';
import Container from './Container';
import { Github, Linkedin, Youtube, Instagram, Code2 } from 'lucide-react';
import { socialLinks } from '@/mockData';

const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  Github,
  Linkedin,
  Youtube,
  Instagram,
};

const footerLinks = [
  {
    title: 'Navegação',
    links: [
      { label: 'Home', href: '/' },
      { label: 'Portfólio', href: '/portfolio' },
      { label: 'Serviços', href: '/servicos' },
      { label: 'Sobre', href: '/sobre' },
    ],
  },
  {
    title: 'Projetos',
    links: [
      { label: 'Clipes Musicais', href: '/portfolio?category=clipe' },
      { label: 'Personagens', href: '/portfolio?category=personagem' },
      { label: 'Aplicações', href: '/portfolio?category=app' },
      { label: 'Experimentos', href: '/portfolio?category=experimento' },
    ],
  },
  {
    title: 'Contato',
    links: [
      { label: 'Fale Comigo', href: '/contato' },
      { label: 'WhatsApp', href: 'https://wa.me/5511999999999' },
      { label: 'Email', href: 'mailto:contato@codigofluente.studio' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-background-secondary border-t border-border">
      <Container>
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform">
                <Code2 size={24} className="text-white" />
              </div>
              <span className="text-xl font-bold">
                Código <span className="gradient-text">Fluente</span>
              </span>
            </Link>
            <p className="text-foreground-secondary mb-6 max-w-sm">
              Estúdio criativo especializado em inteligência artificial, produção
              musical e desenvolvimento full-stack.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = iconMap[social.icon];
                return Icon ? (
                  <Link
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-background-tertiary border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-all"
                    aria-label={social.platform}
                  >
                    <Icon size={20} />
                  </Link>
                ) : null;
              })}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-foreground-secondary hover:text-primary transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border text-center text-sm text-foreground-secondary">
          <p>
            © {new Date().getFullYear()} Código Fluente Studio. Todos os direitos
            reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
}
