import { motion } from 'framer-motion';
import SocialIcons from './SocialIcons';
import { config } from '../config';


const GlassCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}
      className="glass-card rounded-2xl p-10 w-[90%] max-w-[400px] relative z-10"
    >
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-white text-5xl md:text-6xl  text-center mb-3 text-glow text-satoshi-medium"
      >
        {config.title} {config.emoji}
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="text-white/70 text-xl text-center mb-8"
      >
        {config.subtitle}
      </motion.p>

      {/* Social Icons */}
      <SocialIcons />

      {/* View Count */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        className="absolute bottom-6 left-6 flex items-center gap-2 text-white/50 text-sm"
      >
        {/* <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          />
        </svg> */}
        {/* <span>{config.viewCount}</span> */}
      </motion.div>
    </motion.div>
  );
};

export default GlassCard;
