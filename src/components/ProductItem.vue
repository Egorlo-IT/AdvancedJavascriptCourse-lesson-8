<template>
  <div class="card">
    <div class="wrap">
      <div class="overlay">
        <div
          class="wrap"
          @click="
            {
              $root.$refs.header.$refs.cart.addProduct(product);
              $root.$refs.header.$refs.cart.openCart();
            }
          "
        >
          <img src="@/assets/images/svg/cart-icon.svg" alt="cart icon" />
          <p>Add to Cart</p>
        </div>
      </div>
      <img class="img-product-card" :src="image" alt="model" />
    </div>
    <div class="text-block">
      <p class="subtittle">{{ name }}</p>
      <p class="text">
        {{ desc }}
      </p>
      <div class="wrap">
        <p class="total">${{ price }}</p>
        <div class="open-prod" data-title="Click to open">
          <router-link
            :to="{
              name: 'product',
              params: { id: product.id_product },
              body: { product },
            }"
            ><i class="fa fa-eye" aria-hidden="true"></i
          ></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductItem",
  props: ["product", "image", "price", "desc", "name"],
};
</script>
