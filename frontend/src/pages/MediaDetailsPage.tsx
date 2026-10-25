import { Link, useNavigate, useParams } from 'react-router'
import type { Genre } from '../types/genre'
import type { MediaItem } from '../types/media'
import { mediaKindLabels, watchStatusLabels } from '../utils/mediaLabels'

type MediaDetailsPageProps = {
  items: MediaItem[]
  genres: Genre[]
  onDelete: (id: string) => void
}

export function MediaDetailsPage({
  items,
  genres,
  onDelete,
}: MediaDetailsPageProps) {
  const { id } = useParams()
  const navigate = useNavigate()
  const item = items.find((mediaItem) => mediaItem.id === id)

  if (!item) {
    return (
      <section className="message-page">
        <p className="eyebrow">Каталог</p>
        <h1>Запись не найдена</h1>
        <p>В каталоге нет фильма или сериала с таким адресом.</p>
        <Link className="text-link" to="/movies">
          Вернуться к каталогу
        </Link>
      </section>
    )
  }

  const genreName =
    genres.find((genre) => genre.id === item.genre)?.name ??
    `Неизвестный жанр (${item.genre})`

  return (
    <article className="details-page">
      <p className="eyebrow">
        {mediaKindLabels[item.kind]} · {item.releaseYear}
      </p>
      <h1>{item.title}</h1>
      <p className="details-page__description">{item.description}</p>

      <dl className="details-list">
        <div>
          <dt>Жанр</dt>
          <dd>{genreName}</dd>
        </div>
        <div>
          <dt>Статус просмотра</dt>
          <dd>{watchStatusLabels[item.status]}</dd>
        </div>
        <div>
          <dt>Оценка</dt>
          <dd>
            {item.rating === null ? 'Не оценено' : `${item.rating}/10`}
          </dd>
        </div>
        <div>
          <dt>Избранное</dt>
          <dd>{item.isFavorite ? 'Да' : 'Нет'}</dd>
        </div>
      </dl>

      <Link className="text-link" to="/movies">
        Вернуться к каталогу
      </Link>
      <div className="details-actions">
        <Link className="button-link" to={`/movies/${item.id}/edit`}>
          Редактировать
        </Link>
        <button
          className="danger-button"
          type="button"
          onClick={() => {
            if (window.confirm(`Удалить запись «${item.title}»?`)) {
              onDelete(item.id)
              navigate('/movies', { replace: true })
            }
          }}
        >
          Удалить
        </button>
      </div>
    </article>
  )
}
