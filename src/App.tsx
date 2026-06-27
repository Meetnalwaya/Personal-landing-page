import { useState, useRef } from 'react';  // ← added useRef
import { AnimatePresence } from 'framer-motion';
import IntroScreen from './components/IntroScreen';
import Home from './components/Home';

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleEnter = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.muted = false;
      videoRef.current.play();
    }
    setShowIntro(false);
  };

  return (
    <div className="w-screen h-screen bg-black">

    {/* Video + its overlays as one unit */}
    <div 
    style={{ zIndex: 0 }}
    className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
      showIntro ? 'opacity-0 pointer-events-none' : 'opacity-100'
    }`}>
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover heavy-blur"
      >
        <source src="/bgVideo.mp4" type="video/mp4" />
      </video>

      {/* Overlays sit directly on the video — fade in together as one unit */}
      <div className="video-overlay" />
      <div className="pixel-grid-overlay" />
    </div>

    {/* Noise overlay - always visible */}
    

    <AnimatePresence mode="wait">
      {showIntro ? (
        <IntroScreen key="intro" onEnter={handleEnter} />
      ) : (
        <Home key="home" />
      )}
    </AnimatePresence>
  </div>
  );
}

export default App;