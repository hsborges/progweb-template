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
    const product = {
      title: title,
      description: description,
      category: category,
      price: price,
      seller: nickname,
      image: image
    };

    return customFetch(apiPath().PRODUCTS, "POST", product);
  }

  static uploadImage(image) {
    const blob = new FormData();
    blob.append("image", image);
    return customFetch(apiPath().IMAGES, "POST", {}, blob);
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
