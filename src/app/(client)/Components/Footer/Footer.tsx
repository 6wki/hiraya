import { getServerSession } from "next-auth";
import styles from "./footer.module.css";

const Footer = () => {
  const session = getServerSession();

  return (
    <>
      {!session && (
        <footer className={`${styles.footer} containerAdjust `}>
          <div className={styles.footerContainer}>
            <h2>Menü</h2>
            {/* Informations */}
            <p>Impressum</p>
            <p>Versandinformationen</p>
            <p>Allgemeine Geschäftsbedingungen Datenschutz</p>
            <p>Widerrufsrecht</p>
            <p>Jobs</p>
            <p>Jobs</p>
            <p>Mein Konto</p>
            {/* Social Media */}
            <h2>Folge uns</h2>
            {/* Icons */}

            {/* Definitions */}
            <p>
              Hiraya is an Islamic clothing brand in Munich that sells stylish
              and affordable clothes for Muslim women.
            </p>
            <p>
              The brand was founded in 2023 and offers a wide range of modest
              and stylish clothing options, including Abayas, Jilbabs, Khimars.
            </p>

            {/* Payment Methods */}
            <h2>Wir akzeptieren</h2>
          </div>
        </footer>
      )}
    </>
  );
};

export default Footer;
