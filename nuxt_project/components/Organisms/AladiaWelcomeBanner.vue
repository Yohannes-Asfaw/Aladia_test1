<template>
  <div class="flex items-center justify-between mb-5 border border-white/20 bg-black mt-5 h-[120px] rounded-md bg-[url('assets/backgroundaladia.jpg')] bg-cover bg-center">
    <LogoAndText />
  </div>
</template>

<script>
import LogoAndText from '../molecules/LogoAndText.vue';
export default {
  components: {
   LogoAndText
  },
}
</script>


<style scoped>
/* Add specific styles for the welcome banner if needed */
</style>

