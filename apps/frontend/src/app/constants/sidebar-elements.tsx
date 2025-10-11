import {
  IconChess,
  IconPuzzle,
  IconSchool,
  IconBinoculars,
  IconArticle,
  IconUsers,
} from '@tabler/icons-react';

//play{tournaments,online} ,puzzles,learn,watch,news,friends
export const sideBarElementsConfig = [
  {
    label: 'play',
    icon: IconChess,
    url: '/play/online',
  },
  {
    label: 'puzzles',
    icon: IconPuzzle,
    url: '/',
  },
  {
    label: 'learn',
    icon: IconSchool,
    url: '/play/',
  },
  {
    label: 'watch',
    icon: IconBinoculars,
    url: '/play/',
  },
  {
    label: 'news',
    icon: IconArticle,
    url: '/play/',
  },
  {
    label: 'friends',
    icon: IconUsers,
    url: '/play/',
  },
];
