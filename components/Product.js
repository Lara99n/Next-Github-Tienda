import Image from "next/image";
import Link from "next/link";
import { convertToPath } from "../lib/utils";
import styles from "../styles/Product.module.css";
import CartButton from "./CartButton";

export default function Product({ item, showAs }) {
  if (showAs === "Page") {
    return (
      <div className={styles.page}>
        <div className={styles.image}>
          <Image
            src={item.image}
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </div>
        <div className={styles.info}>
          <div>
            <h2>{item.title}</h2>
          </div>
          <div className={styles.price}>${item.price}</div>
          <div className={styles.description}>{item.description}</div>
          <div>
            <CartButton item={item} />
          </div>
        </div>
      </div>
    );
  }
  if (showAs === "ListItem") {
    return (
      <div className={styles.listItem}>
        <div>
          <Image
            src={item.image}
            alt="Picture of the author"
            width={100}
            height={100}
          />
        </div>
        <div>
          <div>
            <h3>{item.title}</h3>
          </div>
          <div>${item.price}</div>
          {item.qty === 0 ? "" : <div>{item.qty} units</div>}
          {item.qty === 0 ? "" : <div>Subtotal: ${item.qty * item.price}</div>}
        </div>
      </div>
    );
  }

  return (
    <div className={styles.item}>
      <Link href={`/store/${convertToPath(item.title)}`}>
        <div>
          <Image
            src={item.image}
            alt={item.description}
            width={200}
            height={200}
          />
        </div>
        <div>
          <h3>{item.title}</h3>
        </div>
        <div>
          <h3>${item.price}</h3>
        </div>
      </Link>
      <div>
        <div>
          <CartButton item={item} />
        </div>
      </div>
    </div>
  );
}
