<template>
  <div class="h-[680px] flex items-center justify-center bg-black">
    <!-- Card Container -->
    <div class=" h-[630px] shadow-md max-w-[430px] w-full border border-white/20 p-7 bg-transparent">
      <!-- Logo and Welcome Text -->
      <AladiaWelcomeBanner/>
<!-- <h1 class="text-white text-5xl">visible</h1> -->
      <div class="flex items-center justify-center  bg-transparent mb-6">
        <p class="text-white text-sm">Enter your email</p>
      </div>

    <InputField
      v-model="email"
      placeholder="Email Address"
      inputType="email"
    >
   
      <template #icon>
    <svg class="w-4 h-4 text-gray-900 dark:text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
      <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
      <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
    </svg>
</template>
    </InputField>


      <!-- Error Message for Invalid Email or Empty Email -->
      <div class="error-message mb-1">
        <p v-if="errorMessage" class="text-red-500 text-xs mb-4">{{ errorMessage }}</p>
      </div>

      <!-- Enter Button -->
      <button @click="validateEmail" class="w-full text-white py-3 rounded-md mb-5 bg-[url('assets/backgroundaladia.jpg')] bg-cover bg-center">
        Enter
      </button>

      <!-- Divider Line -->
      <div class="flex items-center w-full mb-4">
        <hr class="flex-grow border-0 h-px bg-gradient-to-r from-transparent to-white">
        <span class="px-4 text-sm text-white">Or</span>
        <hr class="flex-grow border-0 h-px bg-gradient-to-r from-white to-transparent">
      </div>

      <!-- Social Login Buttons -->
      <div class="space-y-4">
        <!-- Google Login -->
        <button class="w-full flex items-center justify-center bg-transparent border border-white/20 text-gray-800 py-2 rounded-md hover:bg-white/20">
          <span class="mr-3">
<svg viewBox="0 0 32 32" fill="none" class="w-6 h-6"   xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M30.0014 16.3109C30.0014 15.1598 29.9061 14.3198 29.6998 13.4487H16.2871V18.6442H24.1601C24.0014 19.9354 23.1442 21.8798 21.2394 23.1864L21.2127 23.3604L25.4536 26.58L25.7474 26.6087C28.4458 24.1665 30.0014 20.5731 30.0014 16.3109Z" fill="#4285F4"></path> <path d="M16.2863 29.9998C20.1434 29.9998 23.3814 28.7553 25.7466 26.6086L21.2386 23.1863C20.0323 24.0108 18.4132 24.5863 16.2863 24.5863C12.5086 24.5863 9.30225 22.1441 8.15929 18.7686L7.99176 18.7825L3.58208 22.127L3.52441 22.2841C5.87359 26.8574 10.699 29.9998 16.2863 29.9998Z" fill="#34A853"></path> <path d="M8.15964 18.769C7.85806 17.8979 7.68352 16.9645 7.68352 16.0001C7.68352 15.0356 7.85806 14.1023 8.14377 13.2312L8.13578 13.0456L3.67083 9.64746L3.52475 9.71556C2.55654 11.6134 2.00098 13.7445 2.00098 16.0001C2.00098 18.2556 2.55654 20.3867 3.52475 22.2845L8.15964 18.769Z" fill="#FBBC05"></path> <path d="M16.2864 7.4133C18.9689 7.4133 20.7784 8.54885 21.8102 9.4978L25.8419 5.64C23.3658 3.38445 20.1435 2 16.2864 2C10.699 2 5.8736 5.1422 3.52441 9.71549L8.14345 13.2311C9.30229 9.85555 12.5086 7.4133 16.2864 7.4133Z" fill="#EB4335"></path> </g></svg>          
</span>
<span class="text-sm text-white">Continue with Google</span>
                  

</button>

        <!-- Facebook Login -->
        <button class="w-full flex items-center justify-center bg-transparent border border-white/20 text-gray-800 py-2 rounded-md hover:bg-white/20">
          <span class="ml-3">
            <svg viewBox="0 0 32 32" fill="none" class="w-6 h-6"  xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="16" cy="16" r="14" fill="url(#paint0_linear_87_7208)"></circle> <path d="M21.2137 20.2816L21.8356 16.3301H17.9452V13.767C17.9452 12.6857 18.4877 11.6311 20.2302 11.6311H22V8.26699C22 8.26699 20.3945 8 18.8603 8C15.6548 8 13.5617 9.89294 13.5617 13.3184V16.3301H10V20.2816H13.5617V29.8345C14.2767 29.944 15.0082 30 15.7534 30C16.4986 30 17.2302 29.944 17.9452 29.8345V20.2816H21.2137Z" fill="white"></path> <defs> <linearGradient id="paint0_linear_87_7208" x1="16" y1="2" x2="16" y2="29.917" gradientUnits="userSpaceOnUse"> <stop stop-color="#18ACFE"></stop> <stop offset="1" stop-color="#0163E0"></stop> </linearGradient> </defs> </g></svg>
          </span>
          <span class="text-sm text-white ml-3">Continue with Facebook</span>
        </button>

        <!-- Apple Login -->
        <button class="w-full flex items-center justify-center bg-transparent border border-white/20 text-gray-800 py-2 rounded-md hover:bg-white/20">
          <span class="mr-2">
   <svg fill="#ffffff" height="24px" width="24px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 22.773 22.773" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M15.769,0c0.053,0,0.106,0,0.162,0c0.13,1.606-0.483,2.806-1.228,3.675c-0.731,0.863-1.732,1.7-3.351,1.573 c-0.108-1.583,0.506-2.694,1.25-3.561C13.292,0.879,14.557,0.16,15.769,0z"></path> <path d="M20.67,16.716c0,0.016,0,0.03,0,0.045c-0.455,1.378-1.104,2.559-1.896,3.655c-0.723,0.995-1.609,2.334-3.191,2.334 c-1.367,0-2.275-0.879-3.676-0.903c-1.482-0.024-2.297,0.735-3.652,0.926c-0.155,0-0.31,0-0.462,0 c-0.995-0.144-1.798-0.932-2.383-1.642c-1.725-2.098-3.058-4.808-3.306-8.276c0-0.34,0-0.679,0-1.019 c0.105-2.482,1.311-4.5,2.914-5.478c0.846-0.52,2.009-0.963,3.304-0.765c0.555,0.086,1.122,0.276,1.619,0.464 c0.471,0.181,1.06,0.502,1.618,0.485c0.378-0.011,0.754-0.208,1.135-0.347c1.116-0.403,2.21-0.865,3.652-0.648 c1.733,0.262,2.963,1.032,3.723,2.22c-1.466,0.933-2.625,2.339-2.427,4.74C17.818,14.688,19.086,15.964,20.67,16.716z"></path> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </g> </g></svg>

          </span>
          <span class="text-sm text-white">Continue with Apple</span>
        </button>
      </div>
<p class="mt-3 text-center text-gray-500 text-sm font-semibold">
  <a href="#" class="hover:underline">Terms & Conditions</a>
</p>
    </div>
  </div>
</template>
<script>
import loginHeader from '~/components/Organisms/loginHeader'
// import AladiaWelcomeBanner from '~/components/Organisms/AladiaWelcomeBanner.vue';
import AladiaWelcomeBanner from '~/components/Organisms/AladiaWelcomeBanner.vue';
import InputField from '~/components/atoms/InputField.vue';
export default {
  components: {
    loginHeader,
AladiaWelcomeBanner,
InputField
  },

  data() {
    return {
      email: '',
      errorMessage: '',
    };
  },
  methods: {
    validateEmail() {
      const email = this.email.trim();

      // Simple email regex validation
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

      if (!email) {
        this.errorMessage = 'Email cannot be empty.';
      } else if (!emailRegex.test(email)) {
        this.errorMessage = 'Please enter a valid email address.';
      } else {
        this.errorMessage = '';
        // Redirect to signup page
        this.$router.push('/signup');
      }
    },
  },
};
</script>


<style scoped>
.input-field {
  background-color: #fff;
  color: #000;
}

.input-field:focus {
  background-color: #f0f0f0;
}

/* Error message container with fixed height */
.error-message {
  min-height: 20px; /* Prevent layout shift */
}

</style>
