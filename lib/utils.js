import { getItems } from "../services/itemServices";

export async function getPathsFromIds() {
  const items = await getItems();

  const ids = items.map((item) => {
    return {
      params: {
        /*  se coloca si o si con el nombre PARAMS, cuando queremos que nuestras rutas sean dinamicas */
        //id: item.id.toString() /* El nombre del id debe ser el mismo que colocamos en [id].js */,
        id: convertToPath(item.title) /* cambiar en la url en id x el title */,
      },
    };
  });

  return ids;
}

export async function getItemData(id) {
  const items = await getItems();

  // const product = items.find((item) => item.id.toString() === id);
  const product = items.find(
    (item) => convertToPath(item.title) === id
  ); /* cambiar en la url en id x el title */

  return {
    id: id,
    data: product,
  };
}

export function convertToPath(title) {
  /* cambiamos en la url los id de los NUMEROS por el nombre de cada producto */
  return title.toLowerCase().replace(/\s/g, "-");
}
