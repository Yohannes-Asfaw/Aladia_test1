<template>
  <div
    class="flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out space-x-2 mb-4 mt-5"
    @click="redirectToLogin"
  >
    <BackButton />
  </div>
</template>

<script>
import BackButton from '../molecules/BackButton.vue';

export default {
  components: {
    BackButton,
  },
  methods: {
    redirectToLogin() {
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
/* Add specific styles for the organism if needed */
</style>
