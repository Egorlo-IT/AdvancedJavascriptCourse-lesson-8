<template>
	<form action="#" 
		class="search-form" 
		@submit.prevent="$root.$refs.view.$refs.products.filter(userSearch)"
	>
		<button 
			class="btn-search" 
		>
			<img
				class="icons"
				src="@/assets/images/svg/magnifier-icon.svg"
				alt="magnifier"
			/>
		</button>
		<input type="text" class="search-field" v-model="userSearch">
	</form>
</template>
<script>
export default {
  name: "FilterSearch",
	data() {
    return {
      userSearch: "",
    };
  }
};
</script>