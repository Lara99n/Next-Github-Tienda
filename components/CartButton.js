import styles from "../styles/CartButton.module.css";

import { useAppContext } from "./stateWrapper";

export default function CartButton({ item }) {
  const cart = useAppContext();

  function handleClick() {
    cart.addItemToCart(item);
    cart.openCart();
  }

  return (
    <button className={styles.button} onClick={handleClick}>
      Add to Cart
    </button>
  );
}
