import styles from '@styles/Organizms.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>&copy; Copyright - {new Date().getFullYear()}</p>
        </footer>
    )
}

export default Footer