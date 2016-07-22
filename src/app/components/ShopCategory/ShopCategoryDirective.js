angular
  .module('app')
  .directive('shopCategoryDirective', ShopCategoryDirective);

function ShopCategoryDirective() {
  var dir = {};
  dir.templateUrl = "app/components/ShopCategory/ShopCategory.html";
  dir.scope = {
    image: "@",
    title: "@",
    subtitle: "@",
    delay: "@",
    full: "@"
  };

  return dir;
}
