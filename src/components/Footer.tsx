import { motion } from 'framer-motion';

export function Footer() {
  return (
    <footer className="relative w-full bg-black-dark border-t border-gold-rose/20 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center">
                <img 
                  src="/favicon/logo-favicon.png" 
                  alt="Cristine Vieira" 
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-white-pure">Cristine Vieira</h3>
            </div>
            <p className="text-white-cream/60 text-sm">Advocacia Trabalhista Bancária</p>
          </motion.div>

          {/* Links */}
          {[
            { 
              title: 'Menu', 
              links: [
                { name: 'Especialidades', href: '#especialidades' },
                { name: 'Sobre', href: '#sobre' },
                { name: 'Depoimentos', href: '#depoimentos' }
              ] 
            },
            { 
              title: 'Suporte', 
              links: [
                { name: 'FAQ', href: '#' },
                { name: 'Contato', href: '#contato' },
                { name: 'Política de Privacidade', href: '#' }
              ] 
            },
            { 
              title: 'Social', 
              links: [
                { icon: 'bi-instagram', href: 'https://instagram.com/cristinevieiraadv', name: '' },
                { icon: 'bi-linkedin', href: '#', name: '' },
                { icon: 'bi-whatsapp', href: '#', name: '' }
              ] 
            },
          ].map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (i + 1) * 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h4 className="font-semibold text-white-pure">{section.title}</h4>
              <ul className={`${section.title === 'Social' ? 'flex flex-row gap-4 items-center justify-start' : 'space-y-2'}`}>
                {section.links.map((link, j) => (
                  <li key={j} className={section.title === 'Social' ? 'flex items-center justify-center' : ''}>
                    <a
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className={`text-white-cream/60 hover:text-gold-primary transition-colors ${section.title === 'Social' ? 'text-2xl flex items-center justify-center w-10 h-10' : 'text-sm'}`}
                      aria-label={link.icon ? link.icon.replace('bi-', '') : link.name}
                    >
                      {link.icon ? (
                        <i 
                          className={`bi ${link.icon}`} 
                          style={{ 
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '100%',
                            height: '100%',
                            lineHeight: '1'
                          }}
                        ></i>
                      ) : (
                        link.name
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gold-rose/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-white-cream/60 text-sm">
            © 2025 Cristine Vieira. Todos os direitos reservados.
          </p>
          <p className="text-gold-rose/60 text-xs tracking-widest uppercase">
            Desenvolvido com excelência
          </p>
        </motion.div>
      </div>
    </footer>
  );
}