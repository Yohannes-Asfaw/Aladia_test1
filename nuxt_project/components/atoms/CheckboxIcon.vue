<template>
  <div
    class="flex h-4 w-4 cursor-pointer items-center justify-center rounded border pt-0.5 transition-all border-white/50 hover:border-white"
    @click="$emit('toggle')"
  >
    <i v-show="isVisible" class="fa-solid fa-check text-sm text-white"></i>
  </div>
</template>

<script>
export default {
  props: {
    isVisible: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
/* Add specific styles for the checkbox icon if needed */
</style>
