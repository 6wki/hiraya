import Redirect from "./Redirect/Redirect";
import styles from "./navbar.module.css";
import add from "@/../public/add.svg";
import home from "@/../public/home.svg";
import product from "@/../public/orders.svg";
import orders from "@/../public/products.svg";
import Image from "next/image";
import Logout from "../Logout/Logout";
import ActiveLink from "@/app/lib/ActiveClass";

const AdminNavbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Redirect cn={styles.cn} />
        </li>
      </ul>
      <ul className={styles.secondSection}>
        <li>
          <ActiveLink href="/admin/dashboard">
            <Image src={home} height={30} width={30} alt="Home" />
          </ActiveLink>
        </li>
        <li>
          <ActiveLink href="/admin/add">
            <Image src={add} height={30} width={30} alt="Add" />
          </ActiveLink>
        </li>
        <li>
          <ActiveLink href="/admin/products">
            <Image src={product} height={30} width={30} alt="Products" />
          </ActiveLink>
        </li>
        <li>
          <ActiveLink href="/admin/orders">
            <Image src={orders} height={30} width={30} alt="Orders" />
          </ActiveLink>
        </li>
      </ul>
      <ul>
        <li>
          <Logout />
        </li>
      </ul>
    </nav>
  );
};

export default AdminNavbar;
