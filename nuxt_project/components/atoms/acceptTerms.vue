<template>
    <div class="flex items-center justify-center mb-4 w-50">
      <div
        class="flex h-4 w-4 cursor-pointer items-center justify-center rounded border pt-0.5 transition-all border-white/50 hover:border-white"
        @click="toggleVisibility"
      >
        <i v-show="isVisible" class="fa-solid fa-check text-sm text-white"></i>
      </div>
      <label
        for="terms-checkbox"
        class="text-gray-400 text-sm ml-2.5 font-semibold"
        >I accept <a href="#" class="text-white/90 font-semibold underline">Terms & Conditions</a> and <a href="#" class="text-white/90 font-semibold underline">Privacy Policy</a></label
      >
    </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: false, 
    };
  },
  methods: {
    toggleVisibility() {
      this.isVisible = !this.isVisible;
    },
  },

};
</script>

<style scoped>

</style>
