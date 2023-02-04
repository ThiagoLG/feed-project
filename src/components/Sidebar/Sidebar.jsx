import styles from './Sidebar.module.css'
import { PencilLine } from 'phosphor-react';
import { Avatar } from '../';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>

      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1614026480209-cd9934144671?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=240&q=60"
        alt="user cover image"
      />

      <div className={styles.profile}>


        <a href="https://github.com/ThiagoLG">
          <Avatar src="https://github.com/thiagolg.png" />  
        </a>

        <strong>Thiago Lourençon Ghebra</strong>
        <span>Software Developer</span>
      </div>

      <footer>

        <a href="#">
          <PencilLine size={20} />
          Edit profile
        </a>
      </footer>


    </aside>
  )
}