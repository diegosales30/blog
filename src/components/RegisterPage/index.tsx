import Link from "next/link";
import styles from "./styles.module.scss";

const RegisterPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h1 className={styles.title}>FaceBlog</h1>
        <section className={styles.containerForm}>
          <h2>SignUp</h2>
          <form>
            <label>
              Username:
              <input type="text" placeholder="ex: Jhon" />
            </label>
            <label>
              Email:
              <input type="text" placeholder="ex: jhonDoe@email.com" />
            </label>
            <label>
              Password:
              <input type="password" placeholder="password" />
            </label>
            <label>
              Imagem:
              <input type="text" placeholder="link da imagem" />
            </label>
          </form>
          <div className={styles.containerButton}>
            <button>Cadastrar</button>
            <p>
              Já possui conta?{" "}
              <Link href="/login">
                <span>Fazer login</span>
              </Link>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default RegisterPage;
