import { Marquee } from '@/components/ui/marquee';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface Review {
  name: string;
  username: string;
  body: string;
  img: string;
}

const reviews: Review[] = [
  {
    name: 'João Silva',
    username: '@joaosilva',
    body: 'Achei que tinha perdido meus direitos. Cristine identificou erros no FGTS e recuperei R$ 15.000. Gratidão total!',
    img: 'https://avatar.vercel.sh/joaosilva',
  },
  {
    name: 'Maria Santos',
    username: '@mariasantos',
    body: 'Meu banco estava me monitorando além do permitido. Com a ajuda dela, consegui pedir reparação.',
    img: 'https://avatar.vercel.sh/mariasantos',
  },
  {
    name: 'Pedro Oliveira',
    username: '@pedrooliveira',
    body: 'Consulta transparente, sem custos ocultos. Recomendo muito a Cristine para todo bancário.',
    img: 'https://avatar.vercel.sh/pedrooliveira',
  },
  {
    name: 'Ana Costa',
    username: '@anacosta',
    body: 'Profissionalismo excepcional. Me ajudou a entender meus direitos e tomar as melhores decisões.',
    img: 'https://avatar.vercel.sh/anacosta',
  },
  {
    name: 'Carlos Mendes',
    username: '@carlosmendes',
    body: 'Processo rápido e eficiente. Recuperei valores que nem sabia que tinha direito. Excelente trabalho!',
    img: 'https://avatar.vercel.sh/carlosmendes',
  },
  {
    name: 'Fernanda Lima',
    username: '@fernandalima',
    body: 'Atendimento humanizado e profissional. Cristine realmente entende as necessidades dos bancários.',
    img: 'https://avatar.vercel.sh/fernandalima',
  },
  {
    name: 'Roberto Alves',
    username: '@robertoalves',
    body: 'Experiência incrível! Ela me orientou sobre direitos que eu desconhecia completamente. Muito grato!',
    img: 'https://avatar.vercel.sh/robertoalves',
  },
  {
    name: 'Juliana Ferreira',
    username: '@julianaferreira',
    body: 'Profissional competente e dedicada. Me ajudou a resolver questões trabalhistas complexas.',
    img: 'https://avatar.vercel.sh/julianaferreira',
  },
  {
    name: 'Marcos Ribeiro',
    username: '@marcosribeiro',
    body: 'Recomendo sem hesitação. Cristine é extremamente profissional e conhece profundamente o direito bancário.',
    img: 'https://avatar.vercel.sh/marcosribeiro',
  },
  {
    name: 'Patricia Souza',
    username: '@patriciasouza',
    body: 'Atendimento excepcional! Ela explicou tudo de forma clara e me ajudou a recuperar valores devidos.',
    img: 'https://avatar.vercel.sh/patriciasouza',
  },
  {
    name: 'Ricardo Martins',
    username: '@ricardomartins',
    body: 'Processo muito bem conduzido. Cristine demonstrou grande conhecimento e dedicação ao meu caso.',
    img: 'https://avatar.vercel.sh/ricardomartins',
  },
  {
    name: 'Camila Rodrigues',
    username: '@camilarodrigues',
    body: 'Gratidão imensa! Com a ajuda dela, consegui entender e exercer meus direitos trabalhistas.',
    img: 'https://avatar.vercel.sh/camilarodrigues',
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        'relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4',
        'border-white/10 bg-black-soft/50 backdrop-blur-md hover:bg-black-soft/70 hover:border-gold-primary/30',
        'transition-all duration-200'
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm md:text-base font-medium text-white-pure">
            {name}
          </figcaption>
          <p className="text-xs md:text-sm font-medium text-white-cream/60">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm md:text-base text-white-cream/80 leading-relaxed">{body}</blockquote>
    </figure>
  );
};

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="relative w-full py-16 sm:py-24 md:py-32 bg-black-dark overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 mb-8 sm:mb-12 md:mb-20 text-center"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white-pure mb-3 sm:mb-4 leading-[1.1] sm:leading-tight">
          Vozes <span className="relative inline-block">
            <span 
              className="bg-clip-text text-transparent inline-block"
              style={{
                backgroundImage: 'url(/ouro-texto-botoes/fundo-ouro.png)',
                WebkitBackgroundClip: 'text',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                paddingBottom: '0.15em',
                lineHeight: '1.3',
              }}
            >
              Reais
            </span>
          </span>
        </h2>
        <p className="text-lg md:text-xl text-white-cream/70 max-w-2xl mx-auto">
          O que dizem os bancários que confiaram em mim
        </p>
      </motion.div>

      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden max-w-7xl mx-auto px-6">
        <Marquee pauseOnHover className="[--duration:50s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:50s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <div className="from-black-dark pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
        <div className="from-black-dark pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
      </div>
    </section>
  );
}