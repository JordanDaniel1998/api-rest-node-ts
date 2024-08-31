import { Link, useLoaderData } from "react-router-dom";
import ProductDetail from "../components/ProductDetail";
import { Product } from "../types";

export default function Products() {
  // useLoaderData() -> retorna los datos al componente que hace referencia
  const products = useLoaderData() as Product[];
  return (
    <>
      <section>
        <div className="flex justify-between items-center">
          <h2 className="text-4xl font-black text-slate-500">Productos</h2>
          <Link
            to="productos/nuevo"
            className="rounded-md bg-indigo-600 text-sm p-3 text-white shadow-sm hover:bg-indigo-500 font-medium md:hover:duration-300"
          >
            Agregar Producto
          </Link>
        </div>
        <div className="p-2">
          <table className="w-full mt-5 table-auto">
            <thead className="bg-slate-800 text-white">
              <tr>
                <th className="p-2">Producto</th>
                <th className="p-2">Precio</th>
                <th className="p-2">Disponibilidad</th>
                <th className="p-2">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <ProductDetail key={product.id} product={product} />
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
