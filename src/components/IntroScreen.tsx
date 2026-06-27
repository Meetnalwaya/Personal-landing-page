import { motion } from 'framer-motion';

interface IntroScreenProps {
  onEnter: () => void;
}

const IntroScreen = ({ onEnter }: IntroScreenProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 w-screen h-screen flex items-center justify-center cursor-pointer bg-black"
      onClick={onEnter}
    >
      {/* Heavy blurred dark background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 heavy-blur" />
      
      {/* Noise overlay */}
      {/* <div className="noise-overlay" /> */}
      
      
      {/* Click to enter text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="relative z-10"
      >
        <h1 className="text-white text-3xl md:text-4xl font-light text-glow animate-glow">
          click to enter...
        </h1>
      </motion.div>
    </motion.div>
  );
};

export default IntroScreen;
