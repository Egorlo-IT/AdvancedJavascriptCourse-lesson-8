<template>
  <div class="order">
    <div class="shopping-cart__card">
      <img
        class="shopping-cart__card__img"
        :src="require(`@/assets/images/png/${cartItem.img}`)"
        alt="picture order"
      />
      <div class="shopping-cart__card__info">
        <div class="title">
          {{ cartItem.product_name }}
        </div>
        <div class="description color-grey">
          <span>Price: </span>
          <span class="color-pink">${{ cartItem.price }}</span>
        </div>
        <div class="description color-grey">
          <span>Color: </span>
          <span>{{ cartItem.color }}</span>
        </div>
        <div class="description color-grey">
          <span>Size: </span>
          <span> {{ cartItem.size }}</span>
        </div>
        <div class="description color-grey">
          <span>Quantity: </span>
          <input
            class="quantity"
            type="number"
            min="1"
            id="lname"
            name="lname"
            :value="cartItem.quantity"
            @click="
              {
                $root.$refs.header.$refs.cart.save(
                  cartItem,
                  $event.target.value
                );
                $root.$refs.header.$refs.cart.openCart();
              }
            "
          />
        </div>
      </div>
      <img
        class="cross-icon"
        src="@/assets/images/svg/cross-icon.svg"
        alt="cross icon"
        @click="
          {
            $root.$refs.header.$refs.cart.remove(cartItem, 'all');
            $root.$refs.header.$refs.cart.openCart();
          }
        "
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "CartItemOther",
  props: ["cartItem", "img"],
};
</script>
