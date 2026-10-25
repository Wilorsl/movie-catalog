import { Link, useNavigate, useParams } from 'react-router'
import { MediaForm } from '../components/MediaForm'
import type { GenresLoad } from '../hooks/useGenres'
import type { MediaDraft, MediaItem } from '../types/media'

type EditMediaPageProps = {
  items: MediaItem[]
  genreLoad: GenresLoad
  retryGenres: () => void
  onUpdate: (id: string, draft: MediaDraft) => void
}

export function EditMediaPage({
  items,
  genreLoad,
  retryGenres,
  onUpdate,
}: EditMediaPageProps) {
  const { id } = useParams()
  const navigate = useNavigate()
  const item = items.find((mediaItem) => mediaItem.id === id)

  if (!item) {
    return (
      <section className="message-page">
        <p className="eyebrow">Каталог</p>
        <h1>Запись не найдена</h1>
        <p>Нельзя отредактировать отсутствующую запись.</p>
        <Link className="text-link" to="/movies">
          Вернуться к каталогу
        </Link>
      </section>
    )
  }

  const initialValues: MediaDraft = {
    title: item.title,
    description: item.description,
    kind: item.kind,
    genre: item.genre,
    releaseYear: item.releaseYear,
    status: item.status,
    rating: item.rating,
    isFavorite: item.isFavorite,
  }

  return (
    <section className="message-page">
      <p className="eyebrow">Каталог</p>
      <h1>Редактирование записи</h1>
      <MediaForm
        key={item.id}
        initialValues={initialValues}
        genreLoad={genreLoad}
        retryGenres={retryGenres}
        onSave={(draft) => {
          onUpdate(item.id, draft)
          navigate(`/movies/${item.id}`)
        }}
        onCancel={() => navigate(`/movies/${item.id}`)}
      />
    </section>
  )
}
