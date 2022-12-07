import React from "react";
import Layout from "../components/Layout";
import styles from "../styles/Faq.module.css";

const faq = () => {
  return (
    <Layout>
      <div className={styles.faq}>
        <h2>FAQ</h2>
        <div>
          <h3>Do you shop internationally?</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
            cupiditate tenetur iste, voluptas, fuga, ratione architecto aut
            nobis quia alias fugit possimus. Omnis magni voluptatem perspiciatis
            repellat expedita ad est?
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default faq;
