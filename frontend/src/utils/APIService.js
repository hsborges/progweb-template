import customFetch from "./customFetch";
import { apiPath } from "./apiPath";
import { CATEGORIES } from "./enums";

export default class APIService {
  static fetchAllProducts(category) {
    return category === CATEGORIES.RECENTES
      ? customFetch(apiPath().PRODUCTS)
      : customFetch(apiPath().PRODUCTS, "GET", {}, null, category);
  }

  static fetchProductsFromUser(user, page) {
    return customFetch(
      apiPath().PRODUCTS,
      "GET",
      {},
      null,
      `user=${user}&page=${page}`
    );
  }

  static fetchProduct(productId) {
    return customFetch(apiPath(productId).SINGLE_PRODUCT);
  }

  static updateUser(data) {
    const { id } = JSON.parse(localStorage.getItem("userProfile"));
    return customFetch(apiPath(id).SINGLE_USER, "PUT", data);
  }

  static deleteProduct(id) {
    return customFetch(apiPath(id).SINGLE_PRODUCT, "DELETE");
  }

  static updateProduct(id, data) {
    return customFetch(apiPath(id).SINGLE_PRODUCT, "PUT", data);
  }

  static fetchUser(nick) {
    return customFetch(apiPath(nick).SINGLE_USER);
  }

  static login(email, password) {
    return customFetch(apiPath().LOGIN, "POST", { email, password });
  }

  static logout() {
    const { email } = JSON.parse(localStorage.getItem("userProfile"));
    return customFetch(apiPath().LOGOUT, "POST", { email });
  }

  static storeProduct(title, description, category, price, image) {
    const { nickname, phone } = JSON.parse(localStorage.getItem("userProfile"));
    const product = {
      title: title,
      description: description,
      category: category,
      price: price,
      seller: nickname,
      sellerPhone: phone,
      image: image,
    };

    return customFetch(apiPath().PRODUCTS, "POST", product);
  }

  static uploadImage(image) {
    const blob = new FormData();
    blob.append("image", image);
    return customFetch(apiPath().IMAGES, "POST", {}, blob);
  }

  static registerUser(name, nickname, email, phone, password) {
    const user = {
      name,
      nickname,
      email,
      phone,
      password,
    };
    return customFetch(apiPath().USERS, "POST", user);
  }
}
