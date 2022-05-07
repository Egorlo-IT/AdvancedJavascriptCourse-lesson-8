<template>
  <div class="shopping-cart">
    <h1
      class="cart-empty"
      v-if="!$root.$refs.header.$refs.cart.cartItems.contents?.length"
    >
      Cart is empty
    </h1>
    <div class="shopping-cart__group container">
      <div class="shopping-cart__block animate__animated animate__fadeInLeft">
        <div class="block-orders">
          <CartItemBlock
            class="order"
            v-for="item of $root.$refs.header.$refs.cart.cartItems.contents"
            :key="item.id_product"
            :cart-item="item"
          />
          <div class="block-buttons">
            <div class="btn-grey">
              <button>Clear shopping cart</button>
            </div>
            <div class="btn-grey">
              <button>Continue shopping</button>
            </div>
          </div>
        </div>
      </div>
      <div
        class="shopping-cart__purchase_info animate__animated animate__fadeInRight"
      >
        <div class="address-block">
          <span class="address__title">SHIPPING ADRESS</span>
          <input
            class="address__info color-grey"
            type="text"
            placeholder="Bangladesh"
          />
          <input
            class="address__info color-grey"
            type="text"
            placeholder="State"
          />
          <input
            class="address__info color-grey"
            type="text"
            placeholder="Postcode / Zip"
          />
          <div class="btn-grey btn">
            <button>GET A QUOTE</button>
          </div>
        </div>
        <div class="total-block color-grey">
          <div class="sub-total">
            <span>SUB TOTAL </span>
            <span>${{ $root.$refs.header.$refs.cart.cartItems.amount }}</span>
          </div>
          <div class="grand-total">
            <span>GRAND TOTAL </span>
            <span class="total color-pink"
              >${{ $root.$refs.header.$refs.cart.cartItems.amount }}</span
            >
          </div>
          <div class="wrap">
            <hr />
            <div class="btn-pink btn">
              <button>PROCEED TO CHECKOUT</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CartItemBlock from "@/components/CartItemBlock.vue";

export default {
  name: "ProductsCartBlock",
  components: {
    CartItemBlock,
  },
};
</script>
