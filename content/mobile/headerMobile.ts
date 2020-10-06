import {
  faCoffee,
  faHome,
  faEnvelope,
  faMoneyBill,
  faKey,
  faLock,
} from '@fortawesome/free-solid-svg-icons';

export const links = [
  {
    href: '/',
    text: 'Início',
    icon: faHome,
  },
  {
    href: '/contact',
    text: 'Contato',
    icon: faEnvelope,
  },
  {
    href: '/about',
    text: 'Sobre',
    icon: faCoffee,
  },
  {
    href: '/pricing',
    text: 'Preços',
    icon: faMoneyBill,
  },
  {
    href: '/login',
    text: 'Entrar',
    icon: faKey,
  },
  {
    href: '/register',
    text: 'Registre-se',
    icon: faLock,
  },
];
