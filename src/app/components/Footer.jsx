import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>&copy; {new Date().getFullYear()} Street Burguer</p>
        <div>
          <a className={styles.a} target="_blank" href="https://www.instagram.com">
            <FontAwesomeIcon
              className={styles.instagramIcon}
              icon={faInstagram}
              size="2x"
            />
          </a>
        </div>
        <div>
          <a className={styles.a} target="_blank" href="https://www.facebook.com/profile.php?id=100063743344193">
            <FontAwesomeIcon
              className={styles.facebookIcon}
              icon={faFacebook}
              size="2x"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
