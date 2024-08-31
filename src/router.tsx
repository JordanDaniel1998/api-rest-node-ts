import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import Products from "./pages/Products";
import NewProduct from "./pages/NewProduct";
import {
  actionNewProduct,
  actionEditProduct,
  actionDeleteProduct,
  actionAvailabilityProduct,
} from "./actions/action";
import { loaderEditProduct, loaderGetProducts } from "./loaders/loader";
import EditProduct from "./pages/EditProduct";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Products />, // Componente
        loader: loaderGetProducts, // Se ejecuta la función antes que el componente sea renderizado, el valor de retorno solo será disponible dentro de su propio componente
        action: actionAvailabilityProduct,
      },
      {
        path: "/productos/nuevo",
        element: <NewProduct />, // Formulario
        action: actionNewProduct, // Se ejecuta la función cuando el formulario es enviado
      },
      {
        path: "/productos/:id/editar",
        element: <EditProduct />,
        loader: loaderEditProduct,
        action: actionEditProduct,
      },
      {
        path: "/productos/:id/eliminar",
        action: actionDeleteProduct,
      },
    ],
  },
]);
