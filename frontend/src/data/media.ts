import type { MediaItem } from '../types/media'

export const mediaItems: MediaItem[] = [
  {
    id: 'interstellar',
    title: 'Интерстеллар',
    description:
      'Команда исследователей отправляется за пределы Солнечной системы, чтобы найти человечеству новый дом.',
    kind: 'movie',
    genre: 'Фантастика, драма',
    releaseYear: 2014,
    status: 'watched',
    rating: 10,
    isFavorite: true,
  },
  {
    id: 'better-call-saul',
    title: 'Лучше звоните Солу',
    description:
      'Адвокат Джимми Макгилл строит карьеру и постепенно превращается в Сола Гудмана.',
    kind: 'series',
    genre: 'Драма, криминал',
    releaseYear: 2015,
    status: 'watched',
    rating: 10,
    isFavorite: true,
  },
  {
    id: 'one-battle-after-another',
    title: 'Битва за битвой',
    description:
      'История о бывших революционерах, которых вновь затягивает опасное противостояние.',
    kind: 'movie',
    genre: 'Триллер, драма',
    releaseYear: 2025,
    status: 'planned',
    rating: null,
    isFavorite: false,
  },
  {
    id: 'succession',
    title: 'Наследники',
    description:
      'Семья Рой борется за влияние и контроль над крупной медиакомпанией.',
    kind: 'series',
    genre: 'Драма',
    releaseYear: 2018,
    status: 'watching',
    rating: null,
    isFavorite: true,
  },
  {
    id: 'the-mentalist',
    title: 'Менталист',
    description:
      'Консультант Патрик Джейн помогает расследовать преступления, полагаясь на наблюдательность и дедукцию.',
    kind: 'series',
    genre: 'Детектив, драма',
    releaseYear: 2008,
    status: 'planned',
    rating: null,
    isFavorite: false,
  },
]
