<template>
  <header>
    <div class="nav container">
      <div class="nav__block-block-left">
        <router-link to="/">
          <img class="logo" src="@/assets/images/svg/logo.svg" alt="logo" />
        </router-link>
        <FilterSearch />
      </div>
      <div class="nav__block-block-right">
        <img
          @click="showMenu = !showMenu"
          class="icons menu-icon toggle-menu"
          src="@/assets/images/svg/burger-icon.svg"
          alt="menu icon"
        />
        <nav
          class="menu animate__animated animate__zoomIn animate__faster"
          v-show="showMenu"
        >
          <img
            @click="showMenu = false"
            class="cross-icon"
            src="@/assets/images/svg/cross-icon.svg"
            alt="cross icon"
          />
          <div class="wrap-menu">
            <span> MENU</span>
            <ul>
              <li>
                <router-link to="/">HOME</router-link>
              </li>
              <li>
                <router-link to="/catalog">CATALOG</router-link>
              </li>
              <li>
                <router-link to="/cart">CART</router-link>
              </li>
            </ul>
          </div>
        </nav>
        <img
          class="icons user-icon"
          src="@/assets/images/svg/user-icon.svg"
          alt="user icon"
        />
        <ProductsCart ref="cart" />
      </div>
    </div>
  </header>
</template>

<script>
import FilterSearch from "@/components/FilterSearch.vue";
import ProductsCart from "@/components/ProductsCart.vue";

export default {
  name: "HeaderBlock",
  data() {
    return {
      showMenu: false,
    };
  },
  components: {
    FilterSearch,
    ProductsCart,
  },
};
</script>
