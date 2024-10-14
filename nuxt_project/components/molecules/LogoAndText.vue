<template>
  <div class="flex items-center">
    <div class="flex-1">
      <AladiaLogo />
    </div>
    <div class="flex-1">
      <TextBlock />
    </div>
  </div>
</template>

<script>
import AladiaLogo from '../atoms/AladiaLogo.vue';
import TextBlock from '../molecules/TextBlock.vue';

export default {
  components: {
    AladiaLogo,
    TextBlock,
  },
};
</script>

<style scoped>
/* Add specific styles for the logo and text layout if needed */
</style>

