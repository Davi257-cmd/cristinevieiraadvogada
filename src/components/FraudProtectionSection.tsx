import { AnimatedList } from '@/components/ui/animated-list';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {
  AlertTriangle,
  Link,
  MessageSquare,
  CheckCircle,
  Shield,
} from 'lucide-react';

interface FraudAlert {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const fraudAlerts: FraudAlert[] = [
  {
    title: 'Pedido de Adiantamento',
    description: 'Nunca pague antes de assinar contrato',
    icon: <AlertTriangle className="w-5 h-5" />,
    color: '#E74C3C',
  },
  {
    title: 'Links Suspeitos',
    description: 'Verificar URL e domínio com cuidado',
    icon: <Link className="w-5 h-5" />,
    color: '#E74C3C',
  },
  {
    title: 'Contato por WhatsApp',
    description: 'Desconfie de "urgências" de desconhecidos',
    icon: <MessageSquare className="w-5 h-5" />,
    color: '#F39C12',
  },
  {
    title: 'Confirme na OAB',
    description: 'Sempre cheque registro do profissional',
    icon: <CheckCircle className="w-5 h-5" />,
    color: '#27AE60',
  },
  {
    title: 'Sigilo Profissional',
    description: 'Advogado legítimo guarda seus dados',
    icon: <Shield className="w-5 h-5" />,
    color: '#F39C12',
  },
];

function FraudAlertItem({ title, description, icon, color }: FraudAlert) {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-full cursor-pointer overflow-hidden rounded-xl p-3 sm:p-4",
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        "bg-black-soft/50 backdrop-blur-md border border-white/10 hover:border-white/20 hover:bg-black-soft/70"
      )}
    >
      <div className="flex flex-row items-center gap-2 sm:gap-3">
        <div
          className="flex size-8 sm:size-10 items-center justify-center rounded-xl flex-shrink-0"
          style={{
            backgroundColor: `${color}20`,
          }}
        >
          <div style={{ color: color }} className="flex items-center justify-center">
            {icon}
          </div>
        </div>
        <div className="flex flex-col overflow-hidden flex-1 min-w-0">
          <figcaption className="text-sm sm:text-base font-medium text-white-pure whitespace-pre">
            {title}
          </figcaption>
          <p className="text-xs sm:text-sm font-normal text-white-cream/60 mt-0.5">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
}

export function FraudProtectionSection() {
  return (
    <section className="relative w-full py-20 sm:py-32 md:py-40 bg-gradient-to-b from-black-dark via-black-dark to-black-soft overflow-hidden">
      {/* Background Elements */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gold-rose opacity-5 blur-3xl"
        animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
        transition={{ duration: 15, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* LEFT: Educação Textual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6 md:space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white-pure leading-[1.1] sm:leading-tight">
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
                  Proteja-se
                </span> do Golpe do Falso Advogado
              </h2>
              <p className="text-lg md:text-xl text-white-cream/80 leading-relaxed">
                Golpistas se passam por advogados, entram em contato pelo WhatsApp ou email, e pedem
                dinheiro adiantado prometendo resolver um "processo urgente".
              </p>
            </div>

            <div className="space-y-4 bg-black-soft/50 p-8 rounded-2xl border border-gold-rose/20">
              <p 
                className="font-semibold text-lg flex items-center gap-2 bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'url(/ouro-texto-botoes/fundo-ouro.png)',
                  WebkitBackgroundClip: 'text',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  paddingBottom: '0.15em',
                  lineHeight: '1.3',
                }}
              >
                <AlertTriangle className="w-5 h-5" style={{ filter: 'url(/ouro-texto-botoes/fundo-ouro.png)' }} /> NÃO CAIA NESSA ARMADILHA
              </p>
              <ul className="space-y-3 text-white-cream/70 text-base md:text-lg">
                {[
                  'Desconfie de mensagens de urgência',
                  'Não faça pagamentos sem contrato',
                  'Sempre confira registro do profissional',
                  'Confirme inscrição na OAB',
                  'Procure um advogado confiável e verificável',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span 
                      className="font-bold mt-1 bg-clip-text text-transparent inline-block"
                      style={{
                        backgroundImage: 'url(/ouro-texto-botoes/fundo-ouro.png)',
                        WebkitBackgroundClip: 'text',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        paddingBottom: '0.15em',
                        lineHeight: '1.3',
                      }}
                    >
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 md:gap-3 px-4 md:px-8 py-2.5 md:py-4 rounded-full text-black-dark font-bold text-sm md:text-base tracking-wide hover:shadow-lg transition-all relative w-full md:w-auto"
              style={{
                backgroundImage: 'url(/ouro-texto-botoes/fundo-ouro.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                boxShadow: '0 10px 30px rgba(212, 175, 55, 0.4)',
              }}
            >
              <span 
                className="bi bi-chat-dots" 
                style={{ 
                  fontSize: '1.25rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  height: '1.2em',
                  verticalAlign: 'middle'
                }}
              ></span>
              <span className="text-center">Fale Comigo com Confiança</span>
            </motion.button>
          </motion.div>

          {/* RIGHT: Animated List de Alertas */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex items-center justify-center h-full w-full"
          >
            <div
              className={cn(
                "relative flex w-full flex-col overflow-hidden rounded-2xl",
                "h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px]"
              )}
            >
              <AnimatedList delay={600} className="p-2 sm:p-3">
                {fraudAlerts.map((alert, idx) => (
                  <FraudAlertItem key={idx} {...alert} />
                ))}
              </AnimatedList>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}