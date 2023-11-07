const LoginPage = require("./login.page");
const ProductsPage = require("./products.page");

/**
 * @param name {"login" | "products"}
 * @returns {LoginPage | ProductsPage}
 */
function pages(name) {
  const items = {
    login: new LoginPage(),
    products: new ProductsPage(),
  };

  return items[name.toLowerCase()];
}

module.exports = {
  LoginPage,
  ProductsPage,
  pages,
};
