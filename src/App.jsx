import { Header } from "./components/Header"
import styles from "./App.module.css"
import { Sidebar } from "./components/Sidebar"

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
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
