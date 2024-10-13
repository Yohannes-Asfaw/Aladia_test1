<template>
    <div
      class="flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out space-x-2 mb-4 mt-5"
      @click="redirectToLogin"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4 text-white"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M15 18l-6-6 6-6" />
      </svg>
      <span class="text-white text-sm">Back to Log in</span>
    </div>
</template>


<script>
export default {
  methods: {
    redirectToLogin() {
      this.$router.push("/");
    },

    
  },
};
</script>
