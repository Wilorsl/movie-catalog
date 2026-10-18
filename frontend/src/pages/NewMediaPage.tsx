import { Link } from 'react-router'

export function NewMediaPage() {
  return (
    <section className="message-page">
      <p className="eyebrow">Каталог</p>
      <h1>Добавление записи</h1>
      <p>
        Форма добавления фильма или сериала появится в следующей лабораторной
        работе.
      </p>
      <Link className="text-link" to="/movies">
        Вернуться к каталогу
      </Link>
    </section>
  )
}
