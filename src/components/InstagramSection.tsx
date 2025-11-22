import { motion } from 'framer-motion';
import { InfiniteScrollGallery } from '@/components/ui/infinite-scroll-gallery';
import 'bootstrap-icons/font/bootstrap-icons.css';

export function InstagramSection() {
  // Imagens do Instagram
  const instagramImages = [
    '/instagram/557853373_122106421695023458_5159015404171464145_n..jpg',
    '/instagram/instagram_photo_20251122_175224.jpg',
    '/instagram/instagram_photo_20251122_175240.jpg',
  ];

  // Vídeos do Instagram
  const instagramVideos = [
    '/instagram/AQMKGKPMSnjuNuDpMD3G3YkWu9276EWQ3MZ8vVzlZYeP6wLI3MTMlXIH2q9ASc_TDFZNOfQaFyeKp6kBXzYMTgj6aq3Moa0F.mp4',
    '/instagram/AQPT7j8dnbv9QmlAFCWGyeih9N_M_o3t7sc_JpK_Q_dnVhgZgmfVP2oFVYx2KWLmXdCPnA35ZdQvHZnfhj8ghwVP72ZYBlh8.mp4',
    '/instagram/instagram_video_20251122_175234.mp4',
  ];

  return (
    <section className="relative w-full py-32 bg-gradient-to-b from-black-soft to-black-dark overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 mb-16 text-center"
      >
        <h2 className="text-5xl md:text-6xl font-bold text-white-pure mb-4">
          Conteúdo           <span 
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
            Semanal
          </span>
        </h2>
        <p className="text-lg md:text-xl text-white-cream/70 mb-8">
          Acompanhe meus últimos posts educativos no Instagram
        </p>

        <motion.a
          href="https://instagram.com/cristinevieiraadv"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 font-semibold text-base md:text-lg transition-all relative"
          style={{
            borderColor: 'rgba(212, 175, 55, 0.5)',
          }}
        >
          <span 
            className="bi bi-instagram" 
            style={{
              backgroundImage: 'url(/ouro-texto-botoes/fundo-ouro.png)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              color: 'transparent',
              fontSize: '1.25rem',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              height: '1.2em',
              verticalAlign: 'middle'
            }}
          ></span>
          <span 
            className="relative z-10 inline-block"
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
            Siga @cristinevieiraadv
          </span>
          <motion.span 
            className="bi bi-arrow-right"
            animate={{ x: [0, 4, 0] }} 
            transition={{ duration: 1.5, repeat: Infinity }}
            style={{
              backgroundImage: 'url(/ouro-texto-botoes/fundo-ouro.png)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              color: 'transparent',
              fontSize: '1.25rem',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              height: '1.2em',
              verticalAlign: 'middle'
            }}
          ></motion.span>
        </motion.a>
      </motion.div>

      {/* Infinite Scroll Gallery */}
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <InfiniteScrollGallery 
            images={instagramImages} 
            videos={instagramVideos}
          />
        </motion.div>
      </div>
    </section>
  );
}