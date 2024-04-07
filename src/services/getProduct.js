import { post, get, patch, del } from "../utils/request";

export const createProduct = async (data) => {
  const result = await post("/products", data);
  return result;
}

export const editProduct = async (id, data) => {
  const result = await patch(`/products/${id}`, data);
  return result;
}

export const deleteProduct = async (id) => {
  const result = await del(`/products/${id}`);
  return result;
}

export const getProductList = async () => {
  const result = await get("/products");
  return result;
}

export const getProduct = async (id) => {
  const result = await get(`/products/${id}`);
  return result;
}