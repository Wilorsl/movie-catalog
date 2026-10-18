import { Link } from 'react-router'

export function NotFoundPage() {
  return (
    <section className="message-page">
      <p className="eyebrow">Ошибка 404</p>
      <h1>Страница не найдена</h1>
      <p>Такого адреса нет в приложении.</p>
      <Link className="text-link" to="/movies">
        Перейти к каталогу
      </Link>
    </section>
  )
}
