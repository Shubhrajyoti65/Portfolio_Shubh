import HeroText from '../components/HeroText';
import ParallaxBackground from '../components/ParallaxBackground';
import { Canvas } from '@react-three/fiber';
import { Astronaut } from '../components/Astronaut';
import { Float } from '@react-three/drei';
import { useMediaQuery } from 'react-responsive';
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';
import { Suspense } from 'react';
import Loader from '../components/Loader';
import ScrollIndicator from '../components/ScrollIndicator';

function Hero() {
  const isMobile = useMediaQuery({ maxWidth: 850 }); // Adjust the breakpoint as needed
  return (
    <section
      id="home"
      className="flex items-start justify-center md:item-start md:justify-start min-h-screen  c-space"
    >
      <HeroText />
      <ParallaxBackground />
      <figure 
        className="absolute inset-0"
        style={{ width: '100vw', height: '100vh'}}
      >
        <Canvas camera={{ position: [0, 1, 3] }}>
          <Suspense fallback={<Loader/>}>
             {/* Suspense is used to handle the loading state of the 3D model. It allows you to show a fallback (like a loader) while the model is being loaded, preventing any rendering issues or errors that might occur if the model takes time to load. */}
            <Float>
              <Astronaut 
                scale={isMobile ? 0.23 : 0.3}
                position={isMobile ? [0, -1.5, 0] : [1.3, -1, 0]}
              />
            </Float>

            <Rig />
          </Suspense>
        </Canvas>
      </figure>
      <ScrollIndicator />
    </section>
  )
};

function Rig(){
  useFrame((state, delta) => {
    easing.damp3(
      state.camera.position, 
      [state.mouse.x/10, 1+state.mouse.y/10, 3], 
      0.5, 
      delta
    );
  });
  return null;
}

export default Hero;