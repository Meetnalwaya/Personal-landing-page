import { motion } from 'framer-motion';
import { config } from '../config';

const SocialIcons = () => {
  return (
    <div className="flex gap-4 justify-center items-center shadow-cyan-500/50">
      {config.socials.map((social, index) => (
        <motion.a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
          className="text-white/80 hover:text-white transition-all duration-300 icon-glow"
          aria-label={social.name}
        >
          {social.icon}
        </motion.a>
      ))}
    </div>
  );
};

export default SocialIcons;
