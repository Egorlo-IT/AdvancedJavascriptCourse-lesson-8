<template>
  <div class="cart-item">
    <div class="product-bio">
      <img
        :src="require(`@/assets/images/png/${cartItem.img}`)"
        alt="Some image"
      />
      <div class="product-desc">
        <p class="product-title">{{ cartItem.product_name }}</p>
        <p class="product-quantity">Quantity: {{ cartItem.quantity }}</p>
        <p class="product-single-price">{{ cartItem.price }}$ per item</p>
      </div>
    </div>
    <div class="right-block">
      <p class="product-price">{{ cartItem.quantity * cartItem.price }}$</p>
      <button class="del-btn" @click="$emit('remove', cartItem)">
        &times;
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartItem",
  props: ["cartItem"],
};
</script>
