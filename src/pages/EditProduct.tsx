import { Form, Link, useActionData, useLoaderData } from "react-router-dom";
import Alert from "../components/Alert";
import { Product } from "../types";

const availabilityOptions = [
  { name: "Disponible", value: true },
  { name: "No Disponible", value: false },
];

export default function EditProduct() {
  const error = useActionData() as string;
  const product = useLoaderData() as Product;

  return (
    <>
      <section>
        <div className="flex justify-between items-center">
          <h2 className="text-4xl font-black text-slate-500">
            Editar Producto
          </h2>
          <Link
            to="/"
            className="rounded-md bg-indigo-600 text-sm p-3 text-white shadow-sm hover:bg-indigo-500 font-medium md:hover:duration-300"
          >
            Volver a Productos
          </Link>
        </div>
        {error && <Alert>{error}</Alert>}
        <Form className="mt-10" method="POST">
          <div className="mb-4">
            <label className="text-gray-800" htmlFor="name">
              Nombre Producto:
            </label>
            <input
              id="name"
              type="text"
              className="mt-2 block w-full p-3 bg-gray-50"
              placeholder="Nombre del Producto"
              name="name"
              defaultValue={product.name}
            />
          </div>

          <div className="mb-4">
            <label className="text-gray-800" htmlFor="price">
              Precio:
            </label>
            <input
              id="price"
              type="number"
              className="mt-2 block w-full p-3 bg-gray-50"
              placeholder="Precio Producto. ej. 200, 300"
              name="price"
              step="0.01"
              defaultValue={product.price}
            />
          </div>

          <div className="mb-4">
            <label className="text-gray-800" htmlFor="availability">
              Disponibilidad:
            </label>
            <select
              id="availability"
              className="mt-2 block w-full p-3 bg-gray-50"
              name="availability"
              defaultValue={product?.availability.toString()}
            >
              {availabilityOptions.map((option) => (
                <option key={option.name} value={option.value.toString()}>
                  {option.name}
                </option>
              ))}
            </select>
          </div>
          <input
            type="submit"
            className="mt-5 w-full bg-indigo-600 p-2 text-white font-bold text-lg cursor-pointer rounded"
            value="Actualizar Producto"
          />
        </Form>
      </section>
    </>
  );
}
