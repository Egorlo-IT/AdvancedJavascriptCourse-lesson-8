<template>
  <div class="subscribe-block">
    <div class="items container">
      <div class="items__1">
        <div class="wrap">
          <img
            src="@/assets/images/png/picture-circle-1.png"
            alt="photo face"
          />
          <em
            >“Vestibulum quis porttitor dui! Quisque viverra nunc mi, a pulvinar
            purus condimentum“
          </em>
        </div>
      </div>
      <div class="items__2">
        <div class="wrap">
          <p class="subtitle">SUBSCRIBE</p>
          <p class="text">FOR OUR NEWLETTER AND PROMOTION</p>
          <div class="block-subscribe">
            <input
              class="block-subscribe__input"
              type="text"
              placeholder="Enter Your Email"
            />
            <button class="block-subscribe__button">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SubscribeBlock",
};
</script>
