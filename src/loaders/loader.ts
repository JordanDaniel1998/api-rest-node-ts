import { LoaderFunctionArgs, redirect } from "react-router-dom";
import { getProductById, getProducts } from "../services/ProductService";

export async function loaderGetProducts() {
  const products = await getProducts();
  return products;
}

export async function loaderEditProduct({ params }: LoaderFunctionArgs) {
  if (params.id !== undefined) {
    const product = await getProductById(+params.id);
    if (!product) {
      // Lanzar un error
      /* throw new Response("", {
        status: 404,
        statusText: "Producto no encontrado",
      }); */

      // Redireccionar a la pagina principal
      return redirect("/");
    }
    return product;
  }
}
