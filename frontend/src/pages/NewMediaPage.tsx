import { useNavigate } from 'react-router'
import { MediaForm } from '../components/MediaForm'
import type { GenresLoad } from '../hooks/useGenres'
import type { MediaDraft } from '../types/media'

type NewMediaPageProps = {
  onCreate: (draft: MediaDraft) => string
  genreLoad: GenresLoad
  retryGenres: () => void
}

const emptyMedia: MediaDraft = {
  title: '',
  description: '',
  kind: 'movie',
  genre: '',
  releaseYear: new Date().getFullYear(),
  status: 'planned',
  rating: null,
  isFavorite: false,
}

export function NewMediaPage({
  onCreate,
  genreLoad,
  retryGenres,
}: NewMediaPageProps) {
  const navigate = useNavigate()

  function handleSave(draft: MediaDraft) {
    const id = onCreate(draft)
    navigate(`/movies/${id}`)
  }

  return (
    <section className="message-page">
      <p className="eyebrow">Каталог</p>
      <h1>Добавление записи</h1>
      <MediaForm
        initialValues={emptyMedia}
        genreLoad={genreLoad}
        retryGenres={retryGenres}
        onSave={handleSave}
        onCancel={() => navigate('/movies')}
      />
    </section>
  )
}
