import Link from "next/link";
import styles from "./styles.module.scss";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h1 className={styles.title}>FaceBlog</h1>
        <section className={styles.containerForm}>
          <h1>SignIn</h1>
          <form>
            <label>
              Email:
              <input type="text" placeholder="ex: jhonDoe@email.com" />
            </label>
            <label>
              Password:
              <input type="password" placeholder="password" />
            </label>
          </form>
          <div className={styles.containerButton}>
            <button>Entrar</button>
            <p>
              Não possui conta?{" "}
              <Link href="/register">
                <span>Cadastro</span>
              </Link>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LoginPage;
