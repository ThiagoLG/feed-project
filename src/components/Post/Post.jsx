import { useState } from 'react'
import styles from './Post.module.css'
import { Avatar, Comment } from '../'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export function Post({ author, content, publishedAt }) {

  /*- States -*/
  const [comments, setComments] = useState(['Muito bom!']);
  const [newCommentText, setNewCommentText] = useState('');
  /*- ------ -*/

  /*- Control dates to show -*/
  const publishedDateFormat = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", { locale: ptBR });
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, { locale: ptBR, addSuffix: true });
  /*- --------------------- -*/

  /*- Form handlers -*/
  function handleCommentSubmit() {
    event.preventDefault();

    setComments([...comments, newCommentText]);
    setNewCommentText('');
  }

  function handleNewCommentChange() {
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value);
  }

  function handleNewCommentInvalid() {
    event.target.setCustomValidity('Por favor, preencha o conteúdo do comentário.')
  }

  function deleteComment(comment) {
    const commentsWithoutDeletedOne = comments.filter(c => c != comment)
    setComments(commentsWithoutDeletedOne);
  }
  /*- ------------- -*/

  /*- Genral flags -*/
  const isNewCommentEmpty = newCommentText.length === 0;
  /*- ------------ -*/

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
                return <p key={line.content}>{line.content}</p>
              case 'link':
                return <p key={line.content}><a href="#">{line.content}</a></p>
            }

          })
        }
      </div>

      {/* Post Comments */}
      <form className={styles.commentForm} onSubmit={handleCommentSubmit}>
        <strong>Deixe seu feedback</strong>
        <textarea
          placeholder='Deixe um comentário'
          onChange={handleNewCommentChange}
          value={newCommentText}
          required
          onInvalid={handleNewCommentInvalid}
        />
        <footer>
          <button
            type='submit'
            disabled={isNewCommentEmpty}
          >Publish</button>
        </footer>

      </form>

      <div className={styles.commentList}>
        {
          comments.map(comment => {
            return (
              <Comment
                key={comment}
                content={comment}
                onDeleteComment={deleteComment}
              />
            )
          })
        }
      </div>

    </article>
  )

}