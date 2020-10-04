import Lottie, { AnimationItem } from '@rafaelns/react-lottie';
import { useRef, useState, useEffect } from 'react';
import success from 'content/animations/payment-success.json';
import failed from 'content/animations/payment-failed.json';
import { Button, Container } from '@material-ui/core';
import { Header } from '@organisms/Header';
import { Text } from '../atoms';
import { motion } from 'framer-motion';
import { Animated } from '../atoms/Animated';

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
      {/* <Button onClick={handleLoading}>loading</Button>
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
      /> */}
      <Animated>
        <Container maxWidth="md">
          <Text>Rede Cardápio é uma plataforma de cardápios online!</Text>
          <br></br>
          <Text>
            Ela foi desenvolvida para facilitar e automatizar a maneira como você disponibiliza os
            produtos do seu estabelecimento.
          </Text>
          <br></br>
          <Text>
            Onde os clientes podem ver os produtos e as informações necessárias para realizar
            pedidos através do próprio celular!
          </Text>
          <br></br>
          <Text>
            Basta adicionar a imagem do QR Code gerado pela Rede Cardápio na mesa do seu
            estabelecimento e então o cliente poderá acessar ao cardápio online e realizar o pedido
            automaticamente!
          </Text>{' '}
        </Container>
      </Animated>
    </div>
  );
}
