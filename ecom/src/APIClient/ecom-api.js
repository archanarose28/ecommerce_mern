const BASE_URL = "http://localhost:4010";

export const getProducts = async () => {
  try {
    const response = await fetch(BASE_URL + "/products");
    return response;
  } catch (e) {
    return [];
  }
};

export const getProduct = async (id) => {
  try {
    const response = await fetch(BASE_URL + "/product/" + id);
    return response;
  } catch (e) {
    return undefined;
  }
};
