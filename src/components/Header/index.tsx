import styles from "./styles.module.scss";
import Image from "next/image";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerHeader}>
        <h3>Faceblog</h3>
        <div className={styles.containerProfile}>
          <Image
            width={"40px"}
            height={"40px"}
            src="https://avatars.githubusercontent.com/u/95250284?s=400&u=dc983f165b1127ef8a57ec65d03f60d473420cd7&v=4"
            alt="profile"
          />
          <button>sair</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
