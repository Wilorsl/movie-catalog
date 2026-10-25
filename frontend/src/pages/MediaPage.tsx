import { useState } from 'react'
import { Link } from 'react-router'
import { MediaCard } from '../components/MediaCard'
import type { MediaItem, WatchStatus } from '../types/media'
import { watchStatusLabels } from '../utils/mediaLabels'

type MediaPageProps = {
  items: MediaItem[]
}

export function MediaPage({ items }: MediaPageProps) {
  const [status, setStatus] = useState<WatchStatus | 'all'>('all')
  const visibleItems = items.filter(
    (item) => status === 'all' || item.status === status,
  )

  function handleStatusChange(value: string) {
    if (
      value === 'all' ||
      value === 'planned' ||
      value === 'watching' ||
      value === 'watched'
    ) {
      setStatus(value)
    }
  }

  return (
    <section className="page-section" aria-labelledby="media-title">
      <div className="page-heading">
        <div>
          <p className="eyebrow">Ваша коллекция</p>
          <h1 id="media-title">Мои фильмы и сериалы</h1>
          <p>Соберите всё, что уже посмотрели или планируете посмотреть.</p>
        </div>
        <Link className="button-link" to="/movies/new">
          Добавить запись
        </Link>
      </div>

      <div className="media-filter">
        <label htmlFor="status-filter">Статус просмотра</label>
        <select
          id="status-filter"
          value={status}
          onChange={(event) => handleStatusChange(event.target.value)}
        >
          <option value="all">Все записи</option>
          <option value="planned">{watchStatusLabels.planned}</option>
          <option value="watching">{watchStatusLabels.watching}</option>
          <option value="watched">{watchStatusLabels.watched}</option>
        </select>
        <button
          className="secondary-button"
          type="button"
          onClick={() => setStatus('all')}
          disabled={status === 'all'}
        >
          Сбросить фильтр
        </button>
      </div>

      {items.length === 0 ? (
        <p className="empty-state">В каталоге пока нет фильмов и сериалов.</p>
      ) : visibleItems.length === 0 ? (
        <p className="empty-state">
          Нет записей с выбранным статусом.
        </p>
      ) : (
        <div className="media-list">
          {visibleItems.map((item) => (
            <MediaCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </section>
  )
}
