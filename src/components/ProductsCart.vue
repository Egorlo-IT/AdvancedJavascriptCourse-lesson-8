<template>
  <div class="cart-wrap">
    <div class="wrap" @click="showCart = !showCart">
      <img
        class="icons cart-icon"
        src="@/assets/images/svg/cart-icon.svg"
        alt="cart icon"
      />
      <div class="total">
        <span ref="totalValue" class="total__value"> </span>
      </div>
    </div>
    <div
      class="cart-block animate__animated animate__zoomIn animate__faster"
      v-show="showCart"
    >
      <div v-if="!cartItems.contents?.length">Cart is empty</div>
      <CartItem
        class="cart-item"
        v-for="item of cartItems.contents"
        :key="item.id_product"
        :cart-item="item"
        @remove="remove"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import CartItem from "@/components/CartItem.vue";
const HOST = "http://localhost:3000";
export default {
  name: "ProductsCart",
  components: {
    CartItem,
  },
  data() {
    return {
      cartItems: [],
      showCart: false,
    };
  },
  methods: {
    async getCart() {
      await axios.get(HOST + "/api/cart").then((res) => {
        this.cartItems = res.data;
      });
      this.calculate();
    },
    async addProduct(product) {
      let find = this.cartItems.contents.find(
        (el) => el.id_product === +product.id_product
      );
      if (find) {
        await axios.put(HOST + "/api/cart/" + find.id_product, {
          quantity: 1,
        });
        find.quantity++;
      } else {
        let prod = Object.assign({ quantity: 1 }, product);
        await axios.post(HOST + "/api/cart", prod).then((res) => {
          if (res.data.result === 1) this.cartItems.contents.push(prod);
        });
      }
      this.calculate();
    },
    async remove(item, flag) {
      await axios
        .delete(HOST + "/api/cart/delete/" + item.id_product, {
          data: {
            flag: flag,
          },
        })
        .then((res) => {
          if (res.data.result === 1) {
            if (flag === "all") {
              this.cartItems.contents.splice(
                this.cartItems.contents.indexOf(item),
                1
              );
            } else {
              if (item.quantity > 1) {
                item.quantity--;
              } else {
                this.cartItems.contents.splice(
                  this.cartItems.contents.indexOf(item),
                  1
                );
              }
            }
          }
        });
      this.calculate();
    },
    async save(item, quantityValue) {
      let find = this.cartItems.contents.find(
        (el) => el.id_product === +item.id_product
      );
      if (find) {
        find.quantity = +quantityValue;
        await axios
          .patch(HOST + "/api/cart/path", {
            data: {
              cart: this.cartItems,
            },
          })
          .then((res) => {
            if (res.data.result === 1) return;
          });
      }
      this.calculate();
    },
    openCart() {
      this.showCart = true;
    },

    calculate() {
      this.cartItems.countGoods = this.cartItems.contents.length;
      this.cartItems.amount = 0;
      this.cartItems.contents.forEach((element) => {
        this.cartItems.amount += element.price * element.quantity;
      });
      this.$refs.totalValue.textContent = this.cartItems.countGoods;
    },
  },
  mounted() {
    this.getCart();
  },
};
</script>
