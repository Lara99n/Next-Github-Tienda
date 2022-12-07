import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";
import Product from "../components/Product";
import { getLtestItems } from "../services/itemServices";

import styleProduct from "../styles/Product.module.css";
import style from "../styles/Home.module.css";

export default function Home({ items }) {
  return (
    <Layout title="Bienvenido">
      <div className={style.banner}>
        <div className={style.bannerBackground}>
          <div className={style.bannerInfo}>
            <h2>Shop the Summer 2022 Collection</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
              consectetur reiciendis. Officiis perspiciatis modi consequatur,
              sit repellat, rem placeat incidunt deleniti beatae suscipit
              soluta, fugit reprehenderit perferendis iste eius architecto!
            </p>
          </div>
        </div>
      </div>
      <h3>Latest Products</h3>
      <div className={styleProduct.items}>
        {items &&
          items.map((item) => (
            <Product key={item.id} item={item} showAs="item" />
          ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await getLtestItems();

  return {
    props: {
      items: res,
    },
  };
}
