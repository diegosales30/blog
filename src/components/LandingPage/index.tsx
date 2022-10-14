import Link from "next/link";
import styles from "./styles.module.scss";

function LandingPage() {
  return (
    <div className={styles.container}>
      <div className={styles.containerTitle}>
        <div className={styles.title}>
          <h1>FaceBlog</h1>
        </div>
        <div className={styles.containerButton}>
          <Link href="/login">
            <button>Entrar</button>
          </Link>
          <Link href="/register">
            <button>Cadastrar</button>
          </Link>
          <button>Github</button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
