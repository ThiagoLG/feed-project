import { Header, Sidebar, Post } from "./components"
import styles from "./App.module.css"

function App() {

  const posts = [
    {
      id: 1,
      author: {
        avatarUrl: 'https://github.com/thiagolg.png',
        name: 'Thiago Lourençon Ghebra',
        role: 'Software Developer'
      },
      content: [
        { type: 'paragraph', content: 'Fala galeraa!' },
        { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare.' },
        { type: 'link', content: 'jane.design/doctorcare' },
      ],
      publishedAt: new Date('2023-01-31 19:35:00')
    },
    {
      id: 2,
      author: {
        avatarUrl: 'https://github.com/maykbrito.png',
        name: 'Mayk Brito',
        role: 'Educator @Rocketseat'
      },
      content: [
        { type: 'paragraph', content: 'Fala galeraa!' },
        { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare.' },
        { type: 'link', content: 'jane.design/doctorcare' },
      ],
      publishedAt: new Date('2023-01-31 22:15:00')
    },
  ]

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {
            posts.map(post => {
              return (
                <Post
                  key={post.id}
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />)
            })
          }
        </main>
      </div>
    </>
  )
}

export default App
