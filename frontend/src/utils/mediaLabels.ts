import type { MediaKind, WatchStatus } from '../types/media'

export const mediaKindLabels: Record<MediaKind, string> = {
  movie: 'Фильм',
  series: 'Сериал',
}

export const watchStatusLabels: Record<WatchStatus, string> = {
  planned: 'В планах',
  watching: 'Смотрю',
  watched: 'Просмотрено',
}
