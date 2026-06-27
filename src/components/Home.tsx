import { motion } from 'framer-motion';
import GlassCard from './GlassCard';


const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 w-screen h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Overlays on top of the video that lives in App.tsx */}
      
      {/* Glass Card */}
      <GlassCard />
    </motion.div>
  );
};

export default Home;