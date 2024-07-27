import styles from "./Layout.module.css"

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <h1>Crypto App</h1>
        <p>
          <a href="https://botostart.ir">Botostart</a> | Reactjs Full Course
        </p>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Developed by Hesam Khaki with ❤️</p>
      </footer>
    </>
  );
}

export default Layout;
