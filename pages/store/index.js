import Layout from "../../components/Layout";
import Product from "../../components/Product";
import { getItems } from "../../services/itemServices";

import stylesItems from "../../styles/Product.module.css";

export default function Index({ items }) {
  return (
    <Layout>
      <div className={stylesItems.items}>
        {items &&
          items.map((item) => (
            <Product key={item.id} item={item} showAs="Default" />
          ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  /* que esta funcion se ejecute al momento de compliar el codigo */

  const res = await getItems();

  /* Esto es obligatorio de next, tenemos que retornar un objeto que contenga PROPS, con el nombre q le*/
  return {
    props: {
      /* tenemos que dar un nombre al props, con esto hacemos q next vea el codigo, lo ejecute y 
    cree un nuevo props que va a inyectar dentro de INDEX  */
      items: res,
    },
  };
}

/*getServerSideProps -> le decimos a next q se genere esta funcion cada 
vez que el usuario  manda a solicitar la pagina d*/
