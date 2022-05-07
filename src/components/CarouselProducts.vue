<template>
  <div class="product-page__carousel">
    <div class="arrow-left">
      <svg
        width="9"
        height="14"
        viewBox="0 0 9 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.99512 2L3.99512 7L8.99512 12L7.99512 14L0.995117 7L7.99512 0L8.99512 2Z"
          fill="black"
        ></path>
      </svg>
    </div>
    <img
      class="picture"
      :src="require(`@/assets/images/png/${img}`)"
      alt="picture"
    />
    <div class="arrow-right">
      <svg
        width="9"
        height="14"
        viewBox="0 0 9 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.994995 12L5.995 7L0.994995 2L1.995 0L8.995 7L1.995 14L0.994995 12Z"
          fill="black"
        ></path>
      </svg>
    </div>
  </div>
  <div class="collections-block container">
    <h2 class="subtitle">THE BEST COLLECTION</h2>
    <h1 class="title">{{ product.product_name }}</h1>
    <p class="text color-grey">
      {{ product.desc }}
    </p>
    <span class="price color-red">${{ product.price }}</span>
    <hr class="line" />
    <nav class="filters">
      <ul>
        <li>
          CHOOSE COLOR
          <img
            class="icon"
            src="@/assets/images/svg/arrow-down-icon.svg"
            alt="arrow down icon"
          />
        </li>
        <li>
          CHOOSE SIZE
          <img
            class="icon"
            src="@/assets/images/svg/arrow-down-icon.svg"
            alt="arrow down icon"
          />
        </li>
        <li>
          QUANTITY
          <img
            class="icon"
            src="@/assets/images/svg/arrow-down-icon.svg"
            alt="arrow down icon"
          />
        </li>
      </ul>
    </nav>
    <div
      @click="
        {
          $root.$refs.header.$refs.cart.addProduct(product);
          $root.$refs.header.$refs.cart.openCart();
        }
      "
      class="btn-pink"
    >
      <button class="product">Add to cart</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
const HOST = "http://localhost:3000";

export default {
  name: "CarouselProducts",
  props: {
    id: Number,
  },
  data() {
    return {
      productsList: [],
      product: [],
      img: "picture-12.png",
      id_product: null,
    };
  },
  methods: {
    async getProducts() {
      await axios.get(HOST + "/api/products").then((res) => {
        this.productsList = res.data;
      });
      if (this.$route.params.id) {
        this.id_product = this.$route.params.id;
        let find = await this.productsList.find(
          (el) => el.id_product === +this.$route.params.id
        );
        if (find) {
          this.product = Object.assign(find);
          this.img = this.product.img;
        }
      }
    },
  },
  async mounted() {
    await this.getProducts();
  },
};
</script>
