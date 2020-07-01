import Animation from 'content/animations/stay-safe-stay-home.json';
import Lottie from '@rafaelns/react-lottie';

export function LandingTemplate() {
  return (
    <div>
      <Lottie source={Animation} autoPlay className="w-64" />
    </div>
  );
}
