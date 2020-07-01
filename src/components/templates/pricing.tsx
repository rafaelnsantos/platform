import { useRef, useState, useEffect } from 'react';
import Animation from 'content/animations/switch.json';
import Lottie, { AnimationItem } from '@rafaelns/react-lottie';

export function PricingTemplate() {
  const ref = useRef<AnimationItem>();
  const [dark, setDark] = useState(false);

  useEffect(() => {
    ref.current?.goToAndStop(dark ? 0 : 62, true);
  }, []);

  const toggleTheme = () => {
    if (!ref.current) return;
    const anim = ref.current;
    if (!anim.isPaused) return;

    anim.playSegments(dark ? [26, 61] : [90, 121], true);

    setDark(!dark);
  };

  return (
    <div>
      <Lottie
        animationRef={ref}
        source={Animation}
        autoPlay={false}
        loop={false}
        className="w-32"
        speed={2}
        onClick={toggleTheme}
      />
    </div>
  );
}
