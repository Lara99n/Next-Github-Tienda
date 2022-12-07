import Link from "next/link";
import styles from "../styles/Menu.module.css";
import { useAppContext } from "./stateWrapper";

export const Menu = () => {
  const cart = useAppContext();

  function handleOpenCart() {
    cart.openCart();
  }

  return (
    <nav className={styles.menu}>
      <div>
        <div className={styles.link}>
          <Link href="/">Home</Link>
        </div>
        <div className={styles.link}>
          <Link href="/store">Store</Link>
        </div>
        <div className={styles.link}>
          <Link href="/faq">FAQ</Link>
        </div>
      </div>
      <div>
        <a href="#" className={styles.link} onClick={handleOpenCart}>
          Cart ({cart.getNumberOfItems()})
        </a>
      </div>
    </nav>
  );
};
