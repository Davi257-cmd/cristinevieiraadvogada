import { motion } from 'framer-motion';
import 'bootstrap-icons/font/bootstrap-icons.css';

export function CTASection() {
  return (
    <section id="contato" className="relative w-full py-40 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-gold-primary/20 via-gold-rose/10 to-black-dark" />

      {/* Animated Blobs */}
      <motion.div
        className="absolute top-20 left-10 w-96 h-96 rounded-full bg-gold-primary opacity-10 blur-3xl"
        animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
        transition={{ duration: 15, repeat: Infinity }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-bold text-white-pure"
        >
          Seu Banco Violou <span 
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
            Seus Direitos?
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl md:text-2xl text-white-cream/80 max-w-2xl mx-auto leading-relaxed"
        >
          Você tem direito a reparação. Agende uma consulta estratégica comigo agora.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-row gap-3 md:gap-6 justify-center pt-8"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: '0 30px 60px rgba(212, 175, 55, 0.4)',
            }}
            whileTap={{ scale: 0.95 }}
            className="px-4 md:px-10 py-2.5 md:py-5 rounded-full text-black-dark font-bold text-sm md:text-xl tracking-wide hover:shadow-2xl transition-all duration-300 relative flex items-center justify-center flex-1 md:flex-initial"
            style={{
              backgroundImage: 'url(/ouro-texto-botoes/fundo-ouro.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <span className="text-center whitespace-nowrap">Agende no WhatsApp</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 md:px-10 py-2.5 md:py-5 rounded-full border-2 font-semibold text-sm md:text-xl transition-all duration-300 relative flex items-center justify-center flex-1 md:flex-initial"
            style={{
              borderColor: 'rgba(212, 175, 55, 0.5)',
            }}
          >
            <span 
              className="relative z-10 text-center whitespace-nowrap inline-block"
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
              Envie um Email
            </span>
          </motion.button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-white-cream/60 text-base md:text-sm tracking-widest uppercase"
        >
          ✓ Primeira consulta inclui análise estratégica | ✓ Sigilo 100% garantido
        </motion.p>
      </div>
    </section>
  );
}