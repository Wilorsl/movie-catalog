import { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router'
import { mediaItems as initialMediaItems } from './data/media'
import { AppLayout } from './app/AppLayout'
import { MediaDetailsPage } from './pages/MediaDetailsPage'
import { EditMediaPage } from './pages/EditMediaPage'
import { MediaPage } from './pages/MediaPage'
import { NewMediaPage } from './pages/NewMediaPage'
import { NotFoundPage } from './pages/NotFoundPage'
import type { MediaDraft, MediaItem } from './types/media'
import './App.css'

export default function App() {
  const [mediaItems, setMediaItems] = useState<MediaItem[]>(() =>
    initialMediaItems.map((item) => ({ ...item })),
  )

  function createMedia(draft: MediaDraft): string {
    const id = crypto.randomUUID()
    setMediaItems((current) => [...current, { ...draft, id }])
    return id
  }

  function updateMedia(id: string, draft: MediaDraft): void {
    setMediaItems((current) =>
      current.map((item) => (item.id === id ? { ...draft, id: item.id } : item)),
    )
  }

  function deleteMedia(id: string): void {
    setMediaItems((current) => current.filter((item) => item.id !== id))
  }

  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<Navigate to="/movies" replace />} />
        <Route path="movies" element={<MediaPage items={mediaItems} />} />
        <Route
          path="movies/new"
          element={<NewMediaPage onCreate={createMedia} />}
        />
        <Route
          path="movies/:id"
          element={<MediaDetailsPage items={mediaItems} onDelete={deleteMedia} />}
        />
        <Route
          path="movies/:id/edit"
          element={<EditMediaPage items={mediaItems} onUpdate={updateMedia} />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
