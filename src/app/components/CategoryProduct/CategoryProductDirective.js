angular
  .module('app')
  .directive('categoryProduct', CategoryProductDirective);

function CategoryProductDirective() {
  var dir = {};
  dir.templateUrl = "app/components/CategoryProduct/CategoryProduct.html";
  dir.scope = {
    image: "@",
    name: "@",
    category: "@",
    prices: "=",
    productSlug: "@"
  };

  return dir;
}
