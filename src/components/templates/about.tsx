import Lottie, { AnimationItem } from '@rafaelns/react-lottie';
import { useRef, useState, useEffect } from 'react';
import success from 'content/animations/payment-success.json';
import failed from 'content/animations/payment-failed.json';
import { Button } from '@material-ui/core';
import { Header } from '@organisms/Header';

type Status = 'loading' | 'failed' | 'success' | 'idle';

export function AboutTemplate() {
  const refSuccess = useRef<AnimationItem>();
  const refFailed = useRef<AnimationItem>();

  const [status, setStatus] = useState<Status>('idle');

  const handleLoading = () => setStatus('loading');
  const handleSuccess = () => setStatus('success');
  const handleFailed = () => setStatus('failed');
  const handleIdle = () => setStatus('idle');

  useEffect(() => {
    const animSuccess = refSuccess.current;
    const animFailed = refFailed.current;

    if (!animSuccess || !animFailed) return;

    switch (status) {
      case 'loading':
        animFailed.playSegments([0, 20], true);
        animSuccess.playSegments([0, 20], true);
        break;
      case 'success':
        animSuccess.playSegments([20, 150], true);
        animFailed.goToAndStop(0, true);
        break;
      case 'failed':
        animSuccess.goToAndStop(0, true);
        animFailed.playSegments([20, 101], true);
        break;
      case 'idle':
        animSuccess.playSegments([0, 1], true);
        animFailed.playSegments([0, 1], true);
        break;
    }
  }, [status]);

  return (
    <div>
      <Header />
      <Button onClick={handleLoading}>loading</Button>
      <Button onClick={handleSuccess}>success</Button>
      <Button onClick={handleFailed}>failed</Button>
      <Button onClick={handleIdle}>idle</Button>
      <Lottie
        animationRef={refSuccess}
        source={success}
        loop={false}
        style={{ display: status === 'success' ? 'block' : 'none' }}
      />
      <Lottie
        animationRef={refFailed}
        source={failed}
        loop={false}
        style={{ display: status === 'success' ? 'none' : 'block' }}
      />
    </div>
  );
}
