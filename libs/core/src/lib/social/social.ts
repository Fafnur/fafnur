import { habrIcon, linkedinIcon, mediumIcon, telegramIcon, twitterIcon, vkIcon } from '../icons/icons';
import { NavigationLink } from '../navigation/navigation.interface';

export const SOCIAL_LINKS: (NavigationLink & { icon: string })[] = [
  {
    route: 'https://t.me/f_a_f_n_u_r',
    label: 'Telegram',
    icon: 'telegram',
  },
  {
    route: 'https://habr.com/ru/users/fafnur',
    label: 'Habr',
    icon: 'habr',
  },
  {
    route: 'https://medium.com/@fafnur',
    label: 'Medium',
    icon: 'medium',
  },
  {
    route: 'https://www.linkedin.com/in/fafnur',
    label: 'LinkedIn',
    icon: 'linkedin',
  },
  {
    route: 'https://twitter.com/Fafnur1',
    label: 'Twitter',
    icon: 'twitter',
  },
  {
    route: 'https://vk.com/fafnur',
    label: 'Vkontakte',
    icon: 'vkontakte',
  },
];

export const SOCIAL_ICONS = [
  {
    name: 'telegram',
    icon: telegramIcon,
  },
  {
    name: 'habr',
    icon: habrIcon,
  },
  {
    name: 'medium',
    icon: mediumIcon,
  },
  {
    name: 'linkedin',
    icon: linkedinIcon,
  },
  {
    name: 'twitter',
    icon: twitterIcon,
  },
  {
    name: 'vkontakte',
    icon: vkIcon,
  },
];
