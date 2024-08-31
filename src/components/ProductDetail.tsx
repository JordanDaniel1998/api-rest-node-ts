import { Form, useFetcher, useNavigate } from "react-router-dom";
import { formatCurrency } from "../helpers/formatCurrency";
import { formatNumber } from "../helpers/formatNumber";
import { Product } from "../types";

type ProductDetailProps = {
  product: Product;
};

export default function ProductDetail({ product }: ProductDetailProps) {
  const fetcher = useFetcher();
  const navigate = useNavigate();
  const isAvailability = product.availability;
  return (
    <>
      <tr className="border-b ">
        <td className="p-3 text-lg text-gray-800 text-center font-medium">
          {product.name}
        </td>
        <td className="p-3 text-lg text-gray-800 text-center font-medium">
          {formatCurrency(formatNumber(product.price))}
        </td>
        <td className="p-3 text-lg text-gray-800 text-center font-medium">
          <fetcher.Form method="POST">
            <button
              type="submit"
              name="id"
              value={product.id}
              className={`${
                isAvailability ? "text-black" : "text-red-600"
              } rounded-lg p-2 text-xs uppercase font-bold w-full border hover:cursor-pointer`}
            >
              {isAvailability ? "Disponible" : "No Disponible"}
            </button>
          </fetcher.Form>
        </td>
        <td className="p-3 text-lg text-gray-800 text-center font-medium">
          <div className="flex justify-between items-center gap-2">
            <button
              onClick={() => navigate(`/productos/${product.id}/editar`)}
              className="bg-indigo-600 text-white rounded-lg w-full p-2 uppercase font-bold text-xs flex-1"
            >
              Editar
            </button>

            <Form
              className="flex-1"
              method="POST"
              action={`/productos/${product.id}/eliminar`}
            >
              <input
                type="submit"
                value="Eliminar"
                className="bg-red-600 text-white rounded-lg w-full p-2 uppercase font-bold text-xs cursor-pointer"
              />
            </Form>
          </div>
        </td>
      </tr>
    </>
  );
}
