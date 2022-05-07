<template>
  <div class="catalog-page">
    <PageTopBlock />
    <div class="filters-block container">
      <div class="filters-block__1">
        <div class="wrap-filter">
          <span class="filter">FILTER</span>
          <svg
            class="burger-icon2"
            width="15"
            height="10"
            viewBox="0 0 15 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.833333 10H4.16667C4.625 10 5 9.625 5 9.16667C5 8.70833 4.625 8.33333 4.16667 8.33333H0.833333C0.375 8.33333 0 8.70833 0 9.16667C0 9.625 0.375 10 0.833333 10ZM0 0.833333C0 1.29167 0.375 1.66667 0.833333 1.66667H14.1667C14.625 1.66667 15 1.29167 15 0.833333C15 0.375 14.625 0 14.1667 0H0.833333C0.375 0 0 0.375 0 0.833333ZM0.833333 5.83333H9.16667C9.625 5.83333 10 5.45833 10 5C10 4.54167 9.625 4.16667 9.16667 4.16667H0.833333C0.375 4.16667 0 4.54167 0 5C0 5.45833 0.375 5.83333 0.833333 5.83333Z"
              fill="black"
            ></path>
          </svg>
          <nav class="filters-block__menu">
            <span class="filter">FILTER</span>
            <svg
              class="burger-icon2"
              width="15"
              height="10"
              viewBox="0 0 15 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.833333 10H4.16667C4.625 10 5 9.625 5 9.16667C5 8.70833 4.625 8.33333 4.16667 8.33333H0.833333C0.375 8.33333 0 8.70833 0 9.16667C0 9.625 0.375 10 0.833333 10ZM0 0.833333C0 1.29167 0.375 1.66667 0.833333 1.66667H14.1667C14.625 1.66667 15 1.29167 15 0.833333C15 0.375 14.625 0 14.1667 0H0.833333C0.375 0 0 0.375 0 0.833333ZM0.833333 5.83333H9.16667C9.625 5.83333 10 5.45833 10 5C10 4.54167 9.625 4.16667 9.16667 4.16667H0.833333C0.375 4.16667 0 4.54167 0 5C0 5.45833 0.375 5.83333 0.833333 5.83333Z"
                fill="black"
              ></path>
            </svg>

            <ul>
              <li>CATEGORY</li>
              <li>Accessories</li>
              <li>Bags</li>
              <li>Denim</li>
              <li>Hoodies &amp; Sweatshirts</li>
              <li>Jackets &amp; Coats</li>
              <li>Polos</li>
              <li>Shirts</li>
              <li>Shoes</li>
              <li>Sweaters &amp; Knits</li>
              <li>T-Shirts</li>
              <li>Tanks</li>
            </ul>
            <ul>
              <li>BRAND</li>
            </ul>
            <ul>
              <li>DESIGNER</li>
            </ul>
          </nav>
        </div>
      </div>
      <div class="filters-block__2">
        <div class="filter">
          TRENDING NOW
          <img
            class="arrow-down-icon"
            src="@/assets/images/svg/arrow-down-icon.svg"
            alt="arrow down icon"
          />
        </div>
        <div class="filter">
          SIZE
          <img
            class="arrow-down-icon"
            src="@/assets/images/svg/arrow-down-icon.svg"
            alt="arrow down icon"
          />
          <nav class="filters-size-menu">
            <ul class="list-size">
              <li>
                <input type="checkbox" id="id-xs" name="xs" value="XS" />
                <label for="id-xs">XS</label>
              </li>
              <li>
                <input type="checkbox" id="id-s" name="s" value="S" />
                <label for="id-s">S</label>
              </li>
              <li>
                <input type="checkbox" id="id-m" name="m" value="M" />
                <label for="id-m">M</label>
              </li>
              <li>
                <input type="checkbox" id="id-l" name="l" value="L" />
                <label for="id-l">L</label>
              </li>
            </ul>
          </nav>
        </div>
        <div class="filter">
          PRICE
          <img
            class="arrow-down-icon"
            src="@/assets/images/svg/arrow-down-icon.svg"
            alt="arrow down icon"
          />
        </div>
      </div>
    </div>
    <ProductsCards ref="products" />
    <SubscribeBlock />
  </div>
</template>
<script>
import ProductsCards from "@/components/ProductsCards.vue";
import PageTopBlock from "@/components/PageTopBlock";
import SubscribeBlock from "@/components/SubscribeBlock";

export default {
  name: "CatalogPage",
  components: {
    ProductsCards,
    PageTopBlock,
    SubscribeBlock,
  },
};
</script>
