import { BentoGrid, BentoItem } from '@/components/ui/bento-grid';
import { motion } from 'framer-motion';
import {
  Camera,
  FileText,
  AlertTriangle,
  Receipt,
  Scale,
  ShieldAlert,
} from 'lucide-react';

const problems: BentoItem[] = [
  {
    title: 'Monitoramento Invasivo',
    description: 'Câmeras, VPN, registro de cada clique. Quando isso vira violação de privacidade?',
    icon: <Camera className="w-5 h-5 text-amber-400" />,
    tags: ['Privacidade', 'Trabalho'],
    colSpan: 2,
    hasPersistentHover: true,
  },
  {
    title: 'Rescisão Prejudicial',
    description: 'Saiu do banco? Certifique que recebeu TUDO - aviso prévio, férias, 13º, FGTS.',
    icon: <FileText className="w-5 h-5 text-yellow-400" />,
    tags: ['Rescisão', 'Direitos'],
  },
  {
    title: 'Golpe de Falso Advogado',
    description: 'Golpistas se passam por advogados. Como identificar e se proteger?',
    icon: <AlertTriangle className="w-5 h-5 text-red-400" />,
    tags: ['Segurança', 'Fraude'],
  },
  {
    title: 'Honorários Confusos',
    description: 'Quem paga quando você perde? Gratuidade de justiça suspende condenação.',
    icon: <Receipt className="w-5 h-5 text-orange-400" />,
    tags: ['Honorários', 'Justiça'],
    colSpan: 2,
  },
  {
    title: 'Testemunha Compulsória',
    description: 'Pode recusar? Sim! Com justa causa. Aprenda seus direitos.',
    icon: <Scale className="w-5 h-5 text-purple-400" />,
    tags: ['Justiça', 'Direitos'],
    colSpan: 2,
  },
  {
    title: 'Direitos Ignorados',
    description: 'Muitos bancários não sabem que têm direitos específicos do setor.',
    icon: <ShieldAlert className="w-5 h-5 text-blue-400" />,
    tags: ['Direitos', 'Bancário'],
  },
];

export function ProblemsSection() {
  return (
    <section id="especialidades" className="relative w-full py-32 bg-black-dark overflow-hidden">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 mb-20 text-center"
      >
        <h2 className="text-5xl md:text-6xl font-bold text-white-pure mb-4">
          Problemas           <span 
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
            Reais
          </span>
        </h2>
        <p className="text-lg md:text-xl text-white-cream/70 max-w-2xl mx-auto">
          Cenários que acontecem frequentemente com profissionais do setor bancário
        </p>
      </motion.div>

      {/* Bento Grid Container */}
      <div className="relative max-w-7xl mx-auto px-6">
        <BentoGrid items={problems} />
      </div>
    </section>
  );
}