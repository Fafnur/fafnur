import { linkedinIcon, mediumIcon, telegramIcon, twitterIcon, vkIcon } from '../icons/icons';
import { NavigationLink } from '../navigation/navigation.interface';

export const SOCIAL_LINKS: (NavigationLink & { icon: string })[] = [
  {
    route: 'https://vk.com/fafnur',
    label: 'Vkontakte',
    icon: 'vkontakte',
  },
  {
    route: 'https://t.me/f_a_f_n_u_r',
    label: 'Telegram',
    icon: 'telegram',
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
    route: 'https://medium.com/@fafnur',
    label: 'Medium',
    icon: 'medium',
  },
];

export const SOCIAL_ICONS = [
  {
    name: 'vkontakte',
    icon: vkIcon,
  },
  {
    name: 'telegram',
    icon: telegramIcon,
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
    name: 'medium',
    icon: mediumIcon,
  },
];
