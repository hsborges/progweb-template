export const API_ROOT = `http://localhost:3001/api`;

export const apiPath = (urlParam) => ({
  USERS: `${API_ROOT}/users`,
  SINGLE_USER: `${API_ROOT}/users/${urlParam}`,
  PRODUCTS: `${API_ROOT}/products`,
  SINGLE_PRODUCT: `${API_ROOT}/products/${urlParam}`,
  LOGIN: `${API_ROOT}/login`,
  LOGOUT: `${API_ROOT}/logout`,
});
