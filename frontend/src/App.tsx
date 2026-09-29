import './App.css'

const appTitle: string = 'Кинокаталог'

export default function App() {
  return (
    <main className="app">
      <header>
        <h1>{appTitle}</h1>
        <p>Фильмы и сериалы: оценки, статусы просмотра и избранное.</p>
      </header>

      <section aria-labelledby="items-title">
        <h2 id="items-title">Мои фильмы и сериалы</h2>
        <p>Здесь появится список ваших фильмов и сериалов.</p>
      </section>
    </main>
  )
}