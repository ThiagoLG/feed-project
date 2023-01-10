import styles from './Post.module.css'
export function Post() {

  return (
    <article className={styles.post}>
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

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p>👉 <a href="#">jane.design/doctorcare</a></p>
        <p>
          <a href="#">#novoprojeto</a>{' '}
          <a href="#">#nlw</a>{' '}
          <a href="#">#rocketseat</a>
        </p>
      </div>

    </article>
  )

}