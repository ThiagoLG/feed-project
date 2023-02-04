import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post() {

  return (
    <article className={styles.post}>
      {/* Post Header */}
      <header>

        <div className={styles.author}>

          <img className={styles.avatar} src="https://github.com/thiagolg.png" alt="user profile photo" />
          <div className={styles.authorInfos}>
            <strong>Thiago Lourençon Ghebra</strong>
            <span>Software Developer</span>
          </div>

        </div>

        <time dateTime="2022-01-09 21:45:00" title="09 de Janeiro às 21:45h">Publicado há 1h</time>

      </header>

      {/* Post Content */}
      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p> <a href="#">jane.design/doctorcare</a></p>
        <p>
          <a href="#">#novoprojeto</a>{' '}
          <a href="#">#nlw</a>{' '}
          <a href="#">#rocketseat</a>
        </p>
      </div>

      {/* Post Comments */}
      <form className={styles.commentForm}>

        <strong>Deixe seu feedback</strong>
        <textarea placeholder='Deixe um comentário' />
        <footer>
          <button type='submit'>Publish</button>
        </footer>

      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>

    </article>
  )

}