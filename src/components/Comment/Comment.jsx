import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from '../'

export function Comment({ content, onDeleteComment }) {

  /*- Calls delete comment on superior component level -*/
  function handleDeleteComment() {
    onDeleteComment(content)
  }

  return (
    <div className={styles.comment}>
      {/* Avatar Region */}
      <Avatar noBorder src="https://github.com/thiagolg.png" />

      {/* Comment region */}
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Thiago Lourençon Ghebra</strong>
              <time dateTime="2022-01-09 21:45:00" title="09 de Janeiro às 21:45h">Cerca de 1h atrás.</time>
            </div>

            <button title='Deletar Comentário' onClick={handleDeleteComment}>
              <Trash size={24} />
            </button>


          </header>

          <p>{content}</p>

        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>28</span>
          </button>
        </footer>
      </div>

    </div>
  )
}