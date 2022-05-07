<template>
  <div class="main-page">
    <HeaderBlock ref="header" />
    <main class="animate__animated animate__fadeIn">
      <router-view v-slot="{ Component }">
        <component ref="view" :is="Component" />
      </router-view>
    </main>
    <FooterBlock />
  </div>
</template>

<script>
import HeaderBlock from "@/components/HeaderBlock.vue";
import FooterBlock from "@/components/FooterBlock.vue";

export default {
  name: "App",
  components: {
    HeaderBlock,
    FooterBlock,
  },
};
</script>
