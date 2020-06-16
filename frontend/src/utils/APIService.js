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
    const { email } = JSON.parse(localStorage.getItem("userProfile"));
    return customFetch(apiPath().LOGOUT, "POST", { email });
  }

  static storeProduct(title, description, category, price, image) {
    const { nickname } = JSON.parse(localStorage.getItem("userProfile"));
    console.log(image); // TODO: Adicionar handler
    const product = {
      title: title,
      description: description,
      category: category,
      price: price,
      seller: nickname,
    };

    return customFetch(apiPath().PRODUCTS, "POST", product);
  }

  static registerUser(name, nickname, email, password) {
    const user = {
      name,
      nickname,
      email,
      password,
    };
    return customFetch(apiPath().USERS, "POST", user);
  }
}
