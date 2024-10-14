<template>
  <div class="text-left ml-4">
    <WelcomeTitle />
    <DescriptionText />
  </div>
</template>

<script>
import WelcomeTitle from '../atoms/WelcomeTitle.vue';
import DescriptionText from '../atoms/DescriptionText.vue';

export default {
  components: {
    WelcomeTitle,
    DescriptionText,
  },
};
</script>

<style scoped>
/* Add specific styles for the text block if needed */
</style>
