import { Link, useParams } from 'react-router'
import { mediaItems } from '../data/media'
import { mediaKindLabels, watchStatusLabels } from '../utils/mediaLabels'

export function MediaDetailsPage() {
  const { id } = useParams()
  const item = mediaItems.find((mediaItem) => mediaItem.id === id)

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
          <dd>{item.genre}</dd>
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
    </article>
  )
}
