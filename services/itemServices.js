/* Solicitudes http las ahcemos aca */

export async function getItems() {
  const request = await fetch("http://localhost:3000/api/items");
  const items = await request.json();

  return items;
}

export async function getLtestItems() {
  /* pantalla de inicio - articulos mas recientes */

  const items = await getItems();

  return items.slice(0, 3);
}
