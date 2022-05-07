<template>
  <div class="main-page">
    <TopBlock />
    <CategoriesBlock />
    <ProductsCards ref="products" />
    <FeatureBlock />
    <SubscribeBlock />
  </div>
</template>
<script>
import ProductsCards from "@/components/ProductsCards.vue";
import SubscribeBlock from "@/components/SubscribeBlock";
import FeatureBlock from "@/components/FeatureBlock";
import TopBlock from "@/components/TopBlock";
import CategoriesBlock from "@/components/CategoriesBlock";

export default {
  name: "HomePage",
  components: {
    ProductsCards,
    SubscribeBlock,
    FeatureBlock,
    TopBlock,
    CategoriesBlock,
  },
};
</script>
