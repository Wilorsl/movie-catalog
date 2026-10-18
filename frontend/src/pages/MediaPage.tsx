import { Link } from 'react-router'
import { MediaCard } from '../components/MediaCard'
import { mediaItems } from '../data/media'

export function MediaPage() {
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

      {mediaItems.length === 0 ? (
        <p className="empty-state">В каталоге пока нет фильмов и сериалов.</p>
      ) : (
        <div className="media-list">
          {mediaItems.map((item) => (
            <MediaCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </section>
  )
}
