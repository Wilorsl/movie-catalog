import { Link, NavLink, Outlet } from 'react-router'

export function AppLayout() {
  return (
    <div className="app">
      <header className="site-header">
        <Link className="brand" to="/movies" aria-label="КиноКаталог — главная">
          <span className="brand__mark" aria-hidden="true">
            К
          </span>
          <span>КиноКаталог</span>
        </Link>
        <nav className="main-nav" aria-label="Основная навигация">
          <NavLink to="/movies" end>
            Каталог
          </NavLink>
          <NavLink to="/movies/new">Добавить</NavLink>
        </nav>
      </header>
      <main className="main-content">
        <Outlet />
      </main>
      <footer className="site-footer">Ваша личная коллекция историй</footer>
    </div>
  )
}
