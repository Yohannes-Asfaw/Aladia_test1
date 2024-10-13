<template>
  <div class="flex items-center justify-center mb-4 w-50">
    <CheckboxIcon :isVisible="isVisible" @toggle="toggleVisibility" />
    <LabelText />
  </div>
</template>

<script>
import CheckboxIcon from '../atoms/CheckboxIcon.vue';
import LabelText from '../atoms/LabelText.vue';

export default {
  components: {
    CheckboxIcon,
    LabelText,
  },
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
/* Add specific styles for the molecule if needed */
</style>
