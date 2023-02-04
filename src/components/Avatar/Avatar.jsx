import styles from './Avatar.module.css'

export function Avatar({noBorder= false, src}){
  return (
    <img 
    src={src} 
    alt="User profile avatar" 
    className={`${styles.avatar} ${noBorder ? '' : styles.avatarBorder }`}
    />
  )
}