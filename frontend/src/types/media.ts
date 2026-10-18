export type MediaKind = 'movie' | 'series'
export type WatchStatus = 'planned' | 'watching' | 'watched'

export type MediaItem = {
  id: string
  title: string
  description: string
  kind: MediaKind
  genre: string
  releaseYear: number
  status: WatchStatus
  rating: number | null
  isFavorite: boolean
}
