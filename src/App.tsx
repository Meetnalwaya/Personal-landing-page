import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import IntroScreen from './components/IntroScreen';
import Home from './components/Home';

function App() {
  const [showIntro, setShowIntro] = useState(true);

  const handleEnter = () => {
    setShowIntro(false);
  };

  return (
    <div className="w-screen h-screen bg-black">
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
