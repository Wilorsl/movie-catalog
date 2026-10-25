import { Link } from 'react-router'
import type { Genre } from '../types/genre'
import type { MediaItem } from '../types/media'
import { mediaKindLabels, watchStatusLabels } from '../utils/mediaLabels'

type MediaCardProps = {
  item: MediaItem
  genres: Genre[]
}

export function MediaCard({ item, genres }: MediaCardProps) {
  const genreName =
    genres.find((genre) => genre.id === item.genre)?.name ??
    `Неизвестный жанр (${item.genre})`

  return (
    <article className="media-card">
      <div className="media-card__topline">
        <span className="media-kind">{mediaKindLabels[item.kind]}</span>
        {item.isFavorite && <span className="favorite-label">Избранное</span>}
      </div>
      <h2>
        <Link to={`/movies/${item.id}`}>{item.title}</Link>
      </h2>
      <p className="media-card__description">{item.description}</p>
      <p className="media-card__meta">
        {genreName} · {item.releaseYear}
      </p>
      <div className="media-card__footer">
        <span className={`status status--${item.status}`}>
          {watchStatusLabels[item.status]}
        </span>
        <span className="rating">
          Оценка: {item.rating === null ? 'Не оценено' : `${item.rating}/10`}
        </span>
      </div>
    </article>
  )
}
