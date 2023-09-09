import { getServerSession } from "next-auth";
import styles from "./footer.module.css";

const Footer = () => {
  // const session = getServerSession();
  const getCurrentYear = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    return currentYear;
  };

  const year = getCurrentYear();
  return (
    <>
      <footer className={`${styles.footer} containerAdjust `}>
        <div className={styles.footerContainer}>
          <div className={styles.topFooter}>
            <div className={styles.definitions}>
              {/* Definitions */}
              <p>
                Hiraya is an Islamic clothing brand in Munich that sells stylish
                and affordable clothes for Muslim women.
              </p>
              <p>
                The brand was founded in 2023 and offers a wide range of modest
                and stylish clothing options, including Abayas, Jilbabs,
                Khimars.
              </p>
            </div>
            {/* Informations */}
            {/* <div className={styles.menu + " " + styles.box}>
              <h2>Menü</h2>
              <p>Impressum</p>
              <p>Versandinformationen</p>
              <p>Allgemeine Geschäftsbedingungen Datenschutz</p>
              <p>Widerrufsrecht</p>
              <p>Jobs</p>
              <p>Jobs</p>
              <p>Mein Konto</p>
            </div> */}
            {/* Social Media */}
            <div className={styles.socialMedia + " " + styles.box}>
              <h2>Folge uns</h2>
              {/* Icons */}
              <img src="/Instagram.svg" alt="Instagram" />
            </div>

            {/* Payment Methods */}
            <div className={styles.methods}>
              <h2>Wir akzeptieren</h2>
              <div className={styles.method}>
                <img src="/paypal.svg" alt="" />
                <img src="/card.svg" alt="" />
              </div>
            </div>
          </div>

          <div className={styles.bottomFooter}>
            <p>{`© ${year} HIRAYA`}</p>
            <h1>HIRAYA</h1>
            <ul>
              <li>Terms of Service</li>
              <li>Privacy & Policy</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
