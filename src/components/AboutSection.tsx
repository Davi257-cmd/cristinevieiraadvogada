import { motion } from 'framer-motion';

export function AboutSection() {
  return (
    <section id="sobre" className="relative w-full py-32 bg-gradient-to-b from-black-dark to-black-soft overflow-hidden">
      {/* Background Elements */}
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-gold-primary opacity-5 blur-3xl"
        animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
        transition={{ duration: 18, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-rose/10 border border-gold-rose/30"
                whileHover={{ x: 5 }}
              >
                <span className="text-gold-rose text-sm tracking-widest uppercase">
                  Sobre Mim
                </span>
              </motion.div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white-pure leading-tight">
                Cristine Vieira:{' '}
                <span 
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
                  Sua Aliada Legal
                </span>
              </h2>
            </div>

            <div className="space-y-6 text-white-cream/80 text-sm sm:text-base md:text-lg leading-relaxed">
              <p>
                Com mais de                 <span 
                  className="font-semibold bg-clip-text text-transparent inline-block"
                  style={{
                    backgroundImage: 'url(/ouro-texto-botoes/fundo-ouro.png)',
                    WebkitBackgroundClip: 'text',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    paddingBottom: '0.15em',
                    lineHeight: '1.3',
                  }}
                >
                  5 anos de experiência
                </span> em Direito
                Trabalhista, especializei-me em defender trabalhadores do setor bancário contra violações
                trabalhistas, monitoramento excessivo e rescisões prejudiciais.
              </p>

              <p>
                Minha missão é                 <span 
                  className="font-semibold bg-clip-text text-transparent inline-block"
                  style={{
                    backgroundImage: 'url(/ouro-texto-botoes/fundo-ouro.png)',
                    WebkitBackgroundClip: 'text',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    paddingBottom: '0.15em',
                    lineHeight: '1.3',
                  }}
                >
                  empoderar bancários
                </span> com
                conhecimento claro sobre seus direitos, oferecendo consultoria transparente, defesa estratégica e
                resultados concretos.
              </p>

              <p>
                Produzo                 <span 
                  className="font-semibold bg-clip-text text-transparent inline-block"
                  style={{
                    backgroundImage: 'url(/ouro-texto-botoes/fundo-ouro.png)',
                    WebkitBackgroundClip: 'text',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    paddingBottom: '0.15em',
                    lineHeight: '1.3',
                  }}
                >
                  conteúdo educativo semanal
                </span> no
                Instagram, alcançando mais de 1.200 profissionais que confiam em mim para informações confiáveis e
                atualizadas sobre direito trabalhista bancário.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6">
              {[
                { number: '180+', label: 'Posts Educativos' },
                { number: '1.2k', label: 'Seguidores' },
                { number: '100%', label: 'Dedicação' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="space-y-1 sm:space-y-2 bg-black-soft/50 p-2 sm:p-3 md:p-4 rounded-xl border border-gold-rose/20"
                >
                  <p 
                    className="text-base sm:text-xl md:text-2xl lg:text-3xl font-bold inline-block"
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
                    {stat.number}
                  </p>
                  <p className="text-white-cream/60 text-[10px] sm:text-xs md:text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden border-2 border-gold-primary/50 shadow-2xl">
              <img
                src="/cristine-adv/cristine -bio.png"
                alt="Cristine Vieira - Sobre"
                className="aspect-[3/4] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black-dark/60 via-transparent to-transparent" />

              {/* Floating Badge */}
              <motion.div
                className="absolute bottom-8 left-8 right-8 p-6 rounded-2xl bg-black-soft/90 backdrop-blur-md border border-gold-primary/50"
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <p className="text-gold-primary font-semibold text-lg mb-2">
                  @cristinevieiraadv
                </p>
                <p className="text-white-cream text-sm">
                  Advogada Especialista em Direito Trabalhista Bancário
                </p>
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <motion.div
              className="absolute -z-10 -top-6 -right-6 w-72 h-72 rounded-full bg-gold-rose/20 blur-3xl"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 8, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}