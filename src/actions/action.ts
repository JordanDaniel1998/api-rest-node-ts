import { ActionFunctionArgs, redirect } from "react-router-dom";
import {
  addProduct,
  availabilityProduct,
  deleteProduct,
  updateProduct,
} from "../services/ProductService";

export async function actionNewProduct({ request }: ActionFunctionArgs) {
  const data = Object.fromEntries(await request.formData());
  let error = "";
  if (Object.values(data).includes("")) {
    error = "Todos los campos son obligatorios";
  }

  if (error.length) {
    return error;
  }

  await addProduct(data);

  return redirect("/");
}

export async function actionEditProduct({
  request,
  params,
}: ActionFunctionArgs) {
  const data = Object.fromEntries(await request.formData());
  let error = "";
  if (Object.values(data).includes("")) {
    error = "Todos los campos son obligatorios";
  }
  if (error.length) {
    return error;
  }
  if (params.id !== undefined) {
    await updateProduct(+params.id, data);
    return redirect("/");
  }
}

export async function actionDeleteProduct({ params }: ActionFunctionArgs) {
  try {
    if (params.id !== undefined) {
      await deleteProduct(+params.id);
    }
    return redirect("/");
  } catch (error) {
    console.log(error);
  }
}

export async function actionAvailabilityProduct({
  request,
}: ActionFunctionArgs) {
  try {
    const data = Object.fromEntries(await request.formData());
    await availabilityProduct(+data.id);
    return {};
  } catch (error) {
    console.log(error);
  }
}
