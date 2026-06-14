import { motion } from 'framer-motion';
import GlassCard from './GlassCard';
// import { config } from '../config';
import bgVideo from '../Video/bgVideo.mp4';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 w-screen h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          // muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover heavy-blur"
        >
          <source src={bgVideo} type="video/mp4" />
        </video>
        
        Dark overlay
        <div className="video-overlay" />
        
        {/* 2. PIXEL GRID FILTER (The one you want) */}
        <div className="pixel-grid-overlay" />

        {/* Noise overlay */}
        <div className="noise-overlay" />
      </div>

      {/* Glass Card */}
      <GlassCard />
    </motion.div>
  );
};

export default Home;
