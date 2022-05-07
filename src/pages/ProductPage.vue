<template>
  <div class="product-page">
    <PageTopBlock />
    <ProductItemBlock />
    <SubscribeBlock />
  </div>
</template>
<script>
import ProductItemBlock from "@/components/ProductItemBlock";
import PageTopBlock from "@/components/PageTopBlock";
import SubscribeBlock from "@/components/SubscribeBlock";

export default {
  name: "ProductPage",
  components: {
    ProductItemBlock,
    PageTopBlock,
    SubscribeBlock,
  },
};
</script>
