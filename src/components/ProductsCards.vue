<template>
  <section class="products">
    <div class="container">
      <div class="products__title">
        <h1>Fetured Items</h1>
        <p>Shop for items based on what we featured in this week</p>
      </div>

      <div class="products__cards">
        <ProductItem
          v-for="item of filtered"
          :key="item.id_product"
          :image="require(`@/assets/images/png/${item.img}`)"
          :name="item.product_name"
          :price="item.price"
          :desc="item.desc"
          :product="item"
        />
      </div>
      <div class="btn-pink">
        <button>Browse All Product</button>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import ProductItem from "@/components/ProductItem.vue";
const HOST = "http://localhost:3000";

export default {
  name: "ProductsCards",
  props: {
    textSearch: String,
  },
  components: {
    ProductItem,
  },
  data() {
    return {
      products: [],
      filtered: [],
      imgCatalog: "@/assets/images/png/",
    };
  },
  methods: {
    async getProducts() {
      await axios.get(HOST + "/api/products").then((res) => {
        this.products = res.data;
        this.filtered = res.data;
      });
    },
    async filter(value) {
      let regexp = new RegExp(value, "i");
      this.filtered = this.products.filter((el) =>
        regexp.test(el.product_name)
      );
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>
