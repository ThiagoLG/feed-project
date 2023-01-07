import { Header } from "./components/Header"
import styles from "./App.module.css"

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <aside></aside>
        <main>
          <h1>Hello World</h1>
          <h1>Hello World</h1>
          <h1>Hello World</h1>
          <h1>Hello World</h1>
        </main>
      </div>
    </>
  )
}

export default App
