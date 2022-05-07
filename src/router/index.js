import HomePage from "@/pages/HomePage";
import CatalogPage from "@/pages/CatalogPage";
import ProductPage from "@/pages/ProductPage";
import CartPage from "@/pages/CartPage";
import NotFoundPage from "@/pages/NotFoundPage";

const routes = [
  { path: "/", name: "home", component: HomePage },
  { path: "/catalog", name: "catalog", component: CatalogPage },
  { path: "/product/:id", name: "product", component: ProductPage },
  { path: "/cart/", name: "cart", component: CartPage },
  { path: "/404", name: "404", component: NotFoundPage },
  { path: "/:catchAll(.*)", redirect: "/404" },
];

export default routes;
