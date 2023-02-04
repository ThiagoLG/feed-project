import { Avatar, Comment } from '../'
import styles from './Post.module.css'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export function Post({ author, content, publishedAt }) {

  const publishedDateFormat = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, { locale: ptBR, addSuffix: true });

  return (
    <article className={styles.post}>
      {/* Post Header */}
      <header>

        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfos}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          dateTime={publishedAt.toISOString()}
          title={publishedDateFormat}>
          Publicado {publishedDateRelativeToNow}
        </time>

      </header>

      {/* Post Content */}
      <div className={styles.content}>

        {
          content.map(line => {
            switch (line.type) {
              case 'paragraph':
                return <p>{line.content}</p>
              case 'link':
                return <p><a href="#">{line.content}</a></p>
            }

          })
        }
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