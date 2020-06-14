import customFetch from "./customFetch";
import { apiPath } from "./apiPath";

export default class APIService {
  static fetchAllProducts() {
    return customFetch(apiPath().PRODUCTS);
  }

  static fetchProduct(productId) {
    return customFetch(apiPath(productId).SINGLE_PRODUCT);
  }

  static login(email, password) {
    return customFetch(apiPath().LOGIN, "POST", { email, password });
  }

  static logout() {
    const email = localStorage.getItem("email");
    return customFetch(apiPath().LOGOUT, "POST", { email });
  }

  static storeProduct(title, description, category, price, images) {
    const nickNameUser = localStorage.getItem("nickname");
    
    const product = {
      title: title,
      description: description,
      category: category,
      price: price,
      images: images,
      seller: nickNameUser
    }

    return customFetch(apiPath().PRODUCTS, "POST", product);
  }
}
