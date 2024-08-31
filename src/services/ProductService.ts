import { safeParse, pipe, string, transform, parse, boolean } from "valibot";
import {
  DraftProductSchema,
  Product,
  ProductSchema,
  ProductsSchema,
} from "../types";
import axios from "axios";

type ProductoDataProps = {
  [k: string]: FormDataEntryValue;
};

export async function addProduct(data: ProductoDataProps) {
  try {
    const result = safeParse(DraftProductSchema, {
      name: data.name,
      price: +data.price,
    });

    if (result.success) {
      const url = `${import.meta.env.VITE_API_URL_BACKEND}/api/products`;
      await axios.post(url, {
        name: result.output.name,
        price: +result.output.price,
      });
    } else {
      throw new Error("Datos no válidos");
    }
  } catch (error) {
    console.log(error);
  }
}

export async function getProducts() {
  try {
    const url = `${import.meta.env.VITE_API_URL_BACKEND}/api/products`;
    const { data: products } = await axios.get(url);
    const result = safeParse(ProductsSchema, products.data);
    if (result.success) {
      return result.output;
    } else {
      throw new Error("Error en la obtención de productos");
    }
  } catch (error) {
    console.log(error);
  }
}

export async function getProductById(id: Product["id"]) {
  try {
    const url = `${import.meta.env.VITE_API_URL_BACKEND}/api/products/${id}`;
    const { data: product } = await axios.get(url);
    const result = safeParse(ProductSchema, product.data);
    if (result.success) {
      return result.output;
    } else {
      throw new Error("Error en la obtención de productos");
    }
  } catch (error) {
    console.log(error);
  }
}

export async function updateProduct(
  id: Product["id"],
  data: ProductoDataProps
) {
  try {
    const BooleanSchema = pipe(
      string(),
      transform((value) => value === "true"),
      boolean()
    );
    const result = safeParse(ProductSchema, {
      id: id,
      name: data.name,
      price: data.price,
      availability: parse(BooleanSchema, data.availability),
    });

    if (result.success) {
      const url = `${import.meta.env.VITE_API_URL_BACKEND}/api/products/${id}`;
      await axios.put(url, {
        name: result.output.name,
        price: +result.output.price,
        availability: +result.output.availability,
      });
    } else {
      throw new Error("Datos no válidos");
    }
  } catch (error) {
    console.log(error);
  }
}

export async function deleteProduct(id: Product["id"]) {
  try {
    const url = `${import.meta.env.VITE_API_URL_BACKEND}/api/products/${id}`;
    await axios.delete(url);
  } catch (error) {
    console.log(error);
  }
}

export async function availabilityProduct(id: Product["id"]) {
  try {
    const url = `${import.meta.env.VITE_API_URL_BACKEND}/api/products/${id}`;
    await axios.patch(url);
  } catch (error) {
    console.log(error);
  }
}
