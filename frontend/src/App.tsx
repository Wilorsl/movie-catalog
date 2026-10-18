import { Navigate, Route, Routes } from 'react-router'
import { AppLayout } from './app/AppLayout'
import { MediaDetailsPage } from './pages/MediaDetailsPage'
import { MediaPage } from './pages/MediaPage'
import { NewMediaPage } from './pages/NewMediaPage'
import { NotFoundPage } from './pages/NotFoundPage'
import './App.css'

export default function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<Navigate to="/movies" replace />} />
        <Route path="movies" element={<MediaPage />} />
        <Route path="movies/new" element={<NewMediaPage />} />
        <Route path="movies/:id" element={<MediaDetailsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
