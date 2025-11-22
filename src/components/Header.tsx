import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setScrolled(currentScrollY > 50);
      
      // Hide header when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navItems = ['Especialidades', 'Sobre', 'Depoimentos', 'Contato'];

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{
        y: isVisible ? 0 : -100,
        backdropFilter: scrolled ? 'blur(20px)' : 'blur(0px)',
        backgroundColor: scrolled ? 'rgba(10, 10, 10, 0.7)' : 'rgba(10, 10, 10, 0)',
        boxShadow: scrolled ? '0 10px 40px rgba(212, 175, 55, 0.1)' : 'none',
      }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-gold-rose/20"
      style={{
        width: '90%',
        justifySelf: 'center',
        marginTop: '25px',
        borderRadius: '20px',
        backgroundImage: scrolled
          ? 'linear-gradient(135deg, rgba(212, 175, 55, 0.05), rgba(230, 184, 162, 0.05))'
          : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-primary to-gold-rose flex items-center justify-center">
            <span 
              className="text-black-dark font-bold text-xl"
              style={{
                fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              }}
            >
              C
            </span>
          </div>
          <h1 className="text-white-pure font-bold text-xl">
            Cristine             <span 
              className="relative inline-block bg-clip-text text-transparent"
              style={{
                backgroundImage: 'url(/ouro-texto-botoes/fundo-ouro.png)',
                WebkitBackgroundClip: 'text',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                paddingBottom: '0.15em',
                lineHeight: '1.3',
              }}
            >
              Vieira
            </span>
          </h1>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-12">
          {navItems.map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-white-cream hover:text-gold-primary transition-colors duration-300 text-base tracking-wide"
              whileHover={{ y: -2 }}
            >
              {item}
            </motion.a>
          ))}
        </nav>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:flex items-center gap-2 px-6 py-2.5 rounded-full text-black-dark font-semibold text-sm tracking-wide hover:shadow-lg transition-all duration-300 relative overflow-hidden"
          style={{
            backgroundImage: 'url(/ouro-texto-botoes/fundo-ouro.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            boxShadow: '0 10px 30px rgba(212, 175, 55, 0.4)',
          }}
        >
            <span 
              className="bi bi-whatsapp" 
              style={{ 
                fontSize: '1.125rem',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                height: '1.2em',
                verticalAlign: 'middle'
              }}
            ></span>
            Agende Agora
          </motion.button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden w-8 h-8 flex flex-col justify-center gap-1.5"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <motion.div
            animate={{ rotate: mobileMenuOpen ? 45 : 0, y: mobileMenuOpen ? 8 : 0 }}
            className="w-6 h-0.5 bg-gold-primary rounded-full"
          />
          <motion.div
            animate={{ opacity: mobileMenuOpen ? 0 : 1 }}
            className="w-6 h-0.5 bg-gold-rose rounded-full"
          />
          <motion.div
            animate={{ rotate: mobileMenuOpen ? -45 : 0, y: mobileMenuOpen ? -8 : 0 }}
            className="w-6 h-0.5 bg-white-pure rounded-full"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: mobileMenuOpen ? 'auto' : 0,
          opacity: mobileMenuOpen ? 1 : 0,
        }}
        className="md:hidden overflow-hidden bg-black-rich/95 backdrop-blur-xl border-t border-gold-rose/20"
      >
        <nav className="flex flex-col py-6 px-6 gap-4">
          {navItems.map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="text-white-cream hover:text-gold-primary transition-colors text-lg py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </motion.a>
          ))}
          <motion.button
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-4 px-6 py-3 rounded-full text-black-dark font-semibold text-base w-full relative overflow-hidden flex items-center justify-center gap-2"
            style={{
              backgroundImage: 'url(/ouro-texto-botoes/fundo-ouro.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <span 
              className="bi bi-whatsapp" 
              style={{ 
                fontSize: '1.125rem',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                height: '1.2em',
                verticalAlign: 'middle'
              }}
            ></span>
            Agende Agora
          </motion.button>
        </nav>
      </motion.div>
    </motion.header>
  );
}