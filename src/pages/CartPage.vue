<template>
  <div class="cart-page">
    <PageTopBlock />
    <ProductsCartBlock />
    <SubscribeBlock />
  </div>
</template>
<script>
import PageTopBlock from "@/components/PageTopBlock";
import SubscribeBlock from "@/components/SubscribeBlock";
import ProductsCartBlock from "@/components/ProductsCartBlock";

export default {
  name: "CartPage",
  components: {
    ProductsCartBlock,
    PageTopBlock,
    SubscribeBlock,
  },
};
</script>
