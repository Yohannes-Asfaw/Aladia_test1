<template>
  <div class="flex items-center space-x-2">
    <BackIcon />
    <BackText />
  </div>
</template>

<script>
import BackIcon from '../atoms/BackIcon.vue';
import BackText from '../atoms/BackText.vue';

export default {
  components: {
    BackIcon,
    BackText,
  },
};
</script>

<style scoped>
/* Add specific styles for the button layout if needed */
</style>
