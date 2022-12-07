import Layout from "../../components/Layout";
import Product from "../../components/Product";
import { getItemData, getPathsFromIds } from "../../lib/utils";

export default function ProductPage({ productInfo }) {
  return (
    <Layout>
      <Product item={productInfo.data} showAs="Page" />
    </Layout>
  );
}

export async function getStaticPaths() {
  /* genera las rutas dinamicas para cada uno de nuestros elementos */
  const paths = await getPathsFromIds(); /* traemos la informacion de utils */

  return {
    paths: paths /* si o si tenemos q poner en nombre PATHS */,
    fallback: false /* si una ruta no existe nos mande a una 404 */,
  };
}

export async function getStaticProps({ params }) {
  /* lo traemos de utils */

  const id = params.id;
  const product = await getItemData(id);

  return {
    props: {
      productInfo: product,
    },
  };
}
