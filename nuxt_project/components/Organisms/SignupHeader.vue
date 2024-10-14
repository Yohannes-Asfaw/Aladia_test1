<template>
    <backtologin/>
    <div class="flex items-end text-white mb-6 space-x-4" style="height: 100px;">
      <div class="w-40 h-40 relative flex items-end justify-center">
        <div
          class="ml-5 relative bg-cover bg-center bg-[url('assets/backgroundaladia.jpg')] border border-white border-opacity-20 rounded-lg"
          style="width: 105px; height: 105px;"
        >
          <img :src="imagePreview" alt="Default Image" class="w-full h-full object-cover" />
        </div>

        <input
          type="file"
          accept="image/*"
          class="absolute inset-0 opacity-0 cursor-pointer"
          @change="previewImage"
          style="position: absolute; width: 120px; height: 100px; object-fit: cover;"
        />
      </div>

      <div style="margin-right: 90px; align-items: flex-end;">
        <h2 class="text-sm font-bold mb-1">Nice to meet you,</h2>
        <p class="text-xs text-white/50 font-bold">Upload a profile picture and complete your presentation</p>
      </div>
    </div>

   <acceptTerms/>

</template>

<script>
import backtologin from '../atoms/backtologin.vue';
import acceptTerms from '../atoms/acceptTerms.vue'
export default {
components: {
    backtologin,
    acceptTerms
  },
  data() {
    return {
      imagePreview: 'https://develop.aladia.io/_nuxt/image.ChQ3biW9.png', 
      isVisible: false, 
    };
  },
  methods: {
    // Function to redirect to login page
    redirectToLogin() {
      this.$router.push("/login");
    },

    previewImage(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          this.imagePreview = reader.result;
        };
        reader.readAsDataURL(file);
      }
    },

    toggleVisibility() {
      this.isVisible = !this.isVisible;
    },
  },

};
</script>

<style scoped>

</style>
