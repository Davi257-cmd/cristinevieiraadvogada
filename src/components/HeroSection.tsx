import { motion } from 'framer-motion';
import { CheckCircle, Shield } from 'lucide-react';
import 'bootstrap-icons/font/bootstrap-icons.css';

export function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-black">
      <div className="relative w-full grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Left: Text Content with Dark Background */}
        <div className="relative bg-black flex items-center z-10 order-2 lg:order-1">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-20 space-y-4 sm:space-y-6 md:space-y-8 w-full text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block"
            >
              <span 
                className="text-xs sm:text-sm tracking-widest uppercase font-semibold inline-block"
                style={{
                  backgroundImage: 'url(/ouro-texto-botoes/fundo-ouro.png)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  color: 'transparent',
                  paddingBottom: '0.15em',
                  lineHeight: '1.3',
                }}
              >
                DIREITO TRABALHISTA
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white-pure leading-[1.1] sm:leading-tight"
              style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}
            >
              Garanta seus{' '}
              <span 
                className="relative inline-block"
                style={{
                  backgroundImage: 'url(/ouro-texto-botoes/fundo-ouro.png)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  color: 'transparent',
                  paddingBottom: '0.1em',
                  lineHeight: '1.2',
                }}
              >
                direitos trabalhistas
              </span>{' '}
              agora
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl text-white-cream/70 leading-relaxed max-w-xl mx-auto lg:mx-0"
              style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}
            >
              Defenda seus direitos, receba o que é seu por direito com quem realmente entende de direito trabalhista
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="pt-4 flex justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 sm:px-8 py-2.5 sm:py-4 rounded-lg font-semibold text-xs sm:text-base transition-all duration-300 relative flex items-center justify-center gap-2 sm:gap-3 w-full sm:w-auto"
                style={{
                  backgroundImage: 'url(/ouro-texto-botoes/fundo-ouro.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <span 
                  className="bi bi-whatsapp" 
                  style={{ 
                    color: '#000000', 
                    display: 'inline-flex', 
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.25rem',
                    lineHeight: '1',
                    flexShrink: 0,
                    fontFamily: 'bootstrap-icons',
                    fontWeight: 'normal',
                    fontStyle: 'normal',
                    height: '1.2em',
                    verticalAlign: 'middle'
                  }}
                  aria-hidden="true"
                ></span>
                <span className="whitespace-nowrap text-center" style={{ color: '#000000', fontWeight: '600' }}>REALIZAR CONSULTA</span>
              </motion.button>
            </motion.div>

          </div>

          {/* Desktop Floating Badges - Only visible on desktop */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="hidden lg:block absolute top-1/3 z-30"
            style={{ right: '-800px' }}
          >
            <motion.div
              className="px-4 py-3 rounded-lg bg-black-soft/90 backdrop-blur-md border border-white/10 shadow-xl"
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-gold-primary" />
                <span className="text-white text-sm font-medium">ESTRATÉGIA</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Desktop Badge PROTEÇÃO - Outside left container to be above fade */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="hidden lg:block absolute top-2/5 z-[100] mt-20"
          style={{ right: '-225px' }}
        >
          <motion.div
            className="px-4 py-3 rounded-lg bg-black-soft/90 backdrop-blur-md border border-white/10 shadow-xl"
            animate={{ y: [5, -5, 5] }}
            transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
          >
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-gold-primary" />
              <span className="text-white text-sm font-medium">PROTEÇÃO</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right: Image with Fade/Blur */}
        <div className="relative h-[75vh] lg:h-screen lg:min-h-screen overflow-hidden order-1 lg:order-2">
          {/* Mobile Image */}
          <img
            src="/cristine-adv/cristine-com-fade.png"
            alt="Cristine Vieira"
            className="lg:hidden w-full h-full object-cover"
            style={{ filter: 'none' }}
          />
          {/* Desktop Image */}
          <img
            src="/cristine-adv/cristine-primeira -secao.png"
            alt="Cristine Vieira"
            className="hidden lg:block w-full h-full object-cover"
            style={{ filter: 'none' }}
          />
          
          {/* Mobile Badges - Floating at top of image */}
          {/* Badge ESTRATÉGIA */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="absolute z-30 lg:hidden"
            style={{ top: '150px', left: '12px', right: '12px' }}
          >
            <motion.div
              className="px-2.5 py-1.5 rounded-md bg-black-soft/90 backdrop-blur-md border border-white/10 shadow-xl w-fit"
              animate={{ y: [-3, 3, -3] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-3 h-3 text-gold-primary" />
                <span className="text-white text-xs font-medium">ESTRATÉGIA</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Badge PROTEÇÃO */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="absolute z-30 lg:hidden"
            style={{ top: '290px', left: '260px', right: '12px' }}
          >
            <motion.div
              className="px-2.5 py-1.5 rounded-md bg-black-soft/90 backdrop-blur-md border border-white/10 shadow-xl w-fit"
              animate={{ y: [3, -3, 3] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            >
              <div className="flex items-center gap-1.5">
                <Shield className="w-3 h-3 text-gold-primary" />
                <span className="text-white text-xs font-medium">PROTEÇÃO</span>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Desktop Fade Overlay - Smooth gradient from left, revealing image on right */}
          <div 
            className="hidden lg:block absolute inset-0 pointer-events-none z-10"
            style={{
              background: 'linear-gradient(to right, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 1%, rgba(0, 0, 0, 0.95) 5%, rgba(0, 0, 0, 0.85) 20%, rgba(0, 0, 0, 0.7) 35%, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0.3) 65%, rgba(0, 0, 0, 0.1) 80%, transparent 95%)',
            }}
          />
          
          {/* Mobile Fade Overlay - Smooth gradient from bottom, revealing image on top */}
          <div 
            className="lg:hidden absolute inset-0 pointer-events-none z-10"
            style={{
              background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.6) 25%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.2) 75%, transparent 100%)',
            }}
          />
        </div>
      </div>
    </section>
  );
}