import StateWrapper from "../components/stateWrapper";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <StateWrapper>
      {" "}
      {/* al embolver nuestra pagina hacemos que la opcion de ingresas a el carrito de compras este disponible en cualquier parte de la app */}
      <Component {...pageProps} />
    </StateWrapper>
  );
}

export default MyApp;
