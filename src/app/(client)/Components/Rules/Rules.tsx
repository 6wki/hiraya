import Image from "next/image";
import support from "../../../../../public/Support.svg";
import returnProducts from "../../../../../public/ReturnProducts.svg";
import payments from "../../../../../public/Payment.svg";
import styles from "./rules.module.css";

const Rules = () => {
  return (
    <div className="containerAdjust">
      <div className={styles.rules}>
        <div className={styles.box}>
          <Image src={support} height={70} width={70} alt="Support" />
          <h2>SUPPORT</h2>
          <p>
            Du hast eine Frage? Wir garantieren eine Antwort innerhalb von 48h.
          </p>
        </div>
        <div className={styles.box}>
          <Image
            src={returnProducts}
            height={70}
            width={70}
            alt="Return Products"
          />
          <h2>NICHT ZUFRIEDEN?</h2>
          <p>Wir versprechen unseren Kunden ganze 14 Tage RIckgaberecht. </p>
        </div>
        <div className={styles.box}>
          <Image src={payments} height={70} width={70} alt="Payments" />
          <h2>SCHERE BEZAHLUNG</h2>
          <p>
            Unser Angebot an Zahlungsmethoden ist vielfaltig. Du hast die
            sichere Auswahl.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Rules;
