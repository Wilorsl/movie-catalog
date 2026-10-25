import { useState } from 'react'
import type { FormEvent } from 'react'
import type { MediaDraft } from '../types/media'
import { mediaKindLabels, watchStatusLabels } from '../utils/mediaLabels'

type MediaFormValues = Omit<MediaDraft, 'rating' | 'releaseYear'> & {
  rating: string
  releaseYear: string
}

type MediaFormProps = {
  initialValues: MediaDraft
  onSave: (draft: MediaDraft) => void
  onCancel: () => void
}

export function MediaForm({ initialValues, onSave, onCancel }: MediaFormProps) {
  const [draft, setDraft] = useState<MediaFormValues>(() => ({
    ...initialValues,
    rating: initialValues.rating === null ? '' : String(initialValues.rating),
    releaseYear: String(initialValues.releaseYear),
  }))
  const [error, setError] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const title = draft.title.trim()
    const description = draft.description.trim()
    const genre = draft.genre.trim()
    const releaseYear = Number(draft.releaseYear)
    const rating = draft.rating === '' ? null : Number(draft.rating)

    if (title.length < 3 || title.length > 100) {
      setError('Название должно содержать от 3 до 100 символов.')
      return
    }
    if (!description) {
      setError('Введите описание.')
      return
    }
    if (!genre) {
      setError('Укажите жанр.')
      return
    }
    if (
      !Number.isInteger(releaseYear) ||
      releaseYear < 1888 ||
      releaseYear > new Date().getFullYear() + 10
    ) {
      setError('Укажите корректный год выпуска.')
      return
    }
    if (rating !== null && (!Number.isFinite(rating) || rating < 1 || rating > 10)) {
      setError('Оценка должна быть от 1 до 10 или оставаться пустой.')
      return
    }

    setError('')
    onSave({ ...draft, title, description, genre, releaseYear, rating })
  }

  function handleKindChange(value: string) {
    if (value === 'movie' || value === 'series') {
      setDraft((current) => ({ ...current, kind: value }))
    }
  }

  function handleStatusChange(value: string) {
    if (value === 'planned' || value === 'watching' || value === 'watched') {
      setDraft((current) => ({ ...current, status: value }))
    }
  }

  return (
    <form className="media-form" onSubmit={handleSubmit} noValidate>
      <div className="form-field">
        <label htmlFor="media-title">Название</label>
        <input
          id="media-title"
          value={draft.title}
          required
          maxLength={100}
          onChange={(event) =>
            setDraft((current) => ({ ...current, title: event.target.value }))
          }
        />
      </div>
      <div className="form-field">
        <label htmlFor="media-description">Описание</label>
        <textarea
          id="media-description"
          value={draft.description}
          required
          rows={4}
          onChange={(event) =>
            setDraft((current) => ({
              ...current,
              description: event.target.value,
            }))
          }
        />
      </div>
      <div className="form-grid">
        <div className="form-field">
          <label htmlFor="media-kind">Тип</label>
          <select
            id="media-kind"
            value={draft.kind}
            onChange={(event) => handleKindChange(event.target.value)}
          >
            <option value="movie">{mediaKindLabels.movie}</option>
            <option value="series">{mediaKindLabels.series}</option>
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="media-genre">Жанр</label>
          <input
            id="media-genre"
            value={draft.genre}
            required
            onChange={(event) =>
              setDraft((current) => ({ ...current, genre: event.target.value }))
            }
          />
        </div>
        <div className="form-field">
          <label htmlFor="media-release-year">Год выпуска</label>
          <input
            id="media-release-year"
            type="number"
            value={draft.releaseYear}
            required
            min={1888}
            max={new Date().getFullYear() + 10}
            onChange={(event) =>
              setDraft((current) => ({
                ...current,
                releaseYear: event.target.value,
              }))
            }
          />
        </div>
        <div className="form-field">
          <label htmlFor="media-status">Статус просмотра</label>
          <select
            id="media-status"
            value={draft.status}
            onChange={(event) => handleStatusChange(event.target.value)}
          >
            <option value="planned">{watchStatusLabels.planned}</option>
            <option value="watching">{watchStatusLabels.watching}</option>
            <option value="watched">{watchStatusLabels.watched}</option>
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="media-rating">Оценка (1–10, необязательно)</label>
          <input
            id="media-rating"
            type="number"
            value={draft.rating}
            min={1}
            max={10}
            step={1}
            onChange={(event) =>
              setDraft((current) => ({ ...current, rating: event.target.value }))
            }
          />
        </div>
      </div>
      <label className="checkbox-field" htmlFor="media-favorite">
        <input
          id="media-favorite"
          type="checkbox"
          checked={draft.isFavorite}
          onChange={(event) =>
            setDraft((current) => ({
              ...current,
              isFavorite: event.target.checked,
            }))
          }
        />
        Добавить в избранное
      </label>
      {error && (
        <p className="form-error" role="alert">
          {error}
        </p>
      )}
      <div className="form-actions">
        <button className="button-link" type="submit">
          Сохранить
        </button>
        <button className="secondary-button" type="button" onClick={onCancel}>
          Отмена
        </button>
      </div>
    </form>
  )
}
