<template>
  <div>
    <InputField
      v-model="name"
      placeholder="Name"
    >
            <template #icon>

          <svg class="w-4 h-4 text-gray-900 dark:text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10 2a5 5 0 1 0 0 10A5 5 0 0 0 10 2zm0 12c-5.33 0-8 2.67-8 4v1h16v-1c0-1.33-2.67-4-8-4z"/>
    </svg>
        </template>

    </InputField>
<div class="error-message">
  <p v-if="validationErrors.name"  class="text-red-500 text-xs" >{{ validationErrors.name }}</p>
      </div>

    <InputField
      v-model="surname"
      placeholder="Surname"
    >
      
        <!-- SVG for Surname input -->
        <template #icon>

    <svg class="w-4 h-4 text-gray-900 dark:text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10 2a5 5 0 1 0 0 10A5 5 0 0 0 10 2zm0 12c-5.33 0-8 2.67-8 4v1h16v-1c0-1.33-2.67-4-8-4z"/>
    </svg>
        </template>

      
    </InputField>
<div class="error-message">
  <p v-if="validationErrors.surname"  class="text-red-500 text-xs" >{{ validationErrors.surname}}</p>
      </div>
    <InputField
      v-model="email"
      placeholder="Email Address"
      inputType="email"
      :disabled="true"
    >
   
        <template #icon>
    <svg class="w-4 h-4 text-gray-900 dark:text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
      <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
      <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
    </svg>
</template>
    </InputField>

<div class="error-message ">
      </div>
<div class="relative mb-3">

    <InputField
      v-model="newPassword"
      :inputType="isPasswordVisible ? 'text' : 'password'"
      placeholder="Password"
    >
      <template #icon>
        <!-- Key Icon for Password -->
      <svg class="w-4 h-4" version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve" fill="#000000" transform="matrix(-1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path fill="#231F20" d="M22,16c-3.309,0-6,2.691-6,6s2.691,6,6,6s6-2.691,6-6S25.309,16,22,16z"></path> <path fill="#231F20" d="M22,12c-5.514,0-10,4.486-10,10s4.486,10,10,10s10-4.486,10-10S27.514,12,22,12z M22,30 c-4.411,0-8-3.589-8-8s3.589-8,8-8s8,3.589,8,8S26.411,30,22,30z"></path> <path fill="#231F20" d="M44,22C44,9.85,34.15,0,22,0S0,9.85,0,22s9.85,22,22,22S44,34.15,44,22z M22,34c-6.617,0-12-5.383-12-12 s5.383-12,12-12s12,5.383,12,12S28.617,34,22,34z"></path> <path fill="#231F20" d="M63.414,50.586L44.13,31.302c-1.084,2.575-2.61,4.915-4.475,6.939L64,62.582V52 C64,51.47,63.789,50.961,63.414,50.586z"></path> <path fill="#231F20" d="M29.852,44.68l0.734,0.734C30.961,45.789,31.47,46,32,46h4v4c0,1.104,0.896,2,2,2h4v4c0,1.104,0.896,2,2,2 h4v4c0,1.104,0.896,2,2,2h12.582l-24.34-24.344C35.844,41.862,32.997,43.59,29.852,44.68z"></path> </g> </g></svg>

      </template>


    </InputField>
<div 
      class="absolute inset-y-0 right-3 flex items-center cursor-pointer"
      @click="togglePasswordVisibility"
    >
<svg v-if="isPasswordVisible" class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M16.8494 7.05025C14.1158 4.31658 9.6836 4.31658 6.94993 7.05025L4.82861 9.17157C3.49528 10.5049 2.82861 11.1716 2.82861 12C2.82861 12.8284 3.49528 13.4951 4.82861 14.8284L6.94993 16.9497C9.6836 19.6834 14.1158 19.6834 16.8494 16.9497L18.9707 14.8284C20.3041 13.4951 20.9707 12.8284 20.9707 12C20.9707 11.1716 20.3041 10.5049 18.9707 9.17157L16.8494 7.05025ZM12.0002 8.75C10.2053 8.75 8.75019 10.2051 8.75019 12C8.75019 13.7949 10.2053 15.25 12.0002 15.25C13.7951 15.25 15.2502 13.7949 15.2502 12C15.2502 10.2051 13.7951 8.75 12.0002 8.75Z" fill="#323232"></path> <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="#323232" stroke-width="2"></path> <path d="M6.94975 7.05025C9.68342 4.31658 14.1156 4.31658 16.8492 7.05025L18.9706 9.17157C20.3039 10.5049 20.9706 11.1716 20.9706 12C20.9706 12.8284 20.3039 13.4951 18.9706 14.8284L16.8492 16.9497C14.1156 19.6834 9.68342 19.6834 6.94975 16.9497L4.82843 14.8284C3.49509 13.4951 2.82843 12.8284 2.82843 12C2.82843 11.1716 3.49509 10.5049 4.82843 9.17157L6.94975 7.05025Z" stroke="#323232" stroke-width="2" stroke-linejoin="round"></path> </g></svg>
      <svg v-else class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.1" d="M6.29528 7.87634L5 9.17162C3.66667 10.505 3 11.1716 3 12C3 12.8285 3.66667 13.4951 5 14.8285L7.12132 16.9498C9.85499 19.6835 14.2871 19.6835 17.0208 16.9498L17.4322 16.5384L14.5053 14.2619C13.9146 14.8713 13.0873 15.2501 12.1716 15.2501C10.3766 15.2501 8.92157 13.795 8.92157 12.0001C8.92157 11.3746 9.09827 10.7904 9.40447 10.2946L6.29528 7.87634Z" fill="#323232"></path> <path d="M3.17139 5.12988L21.1714 19.1299" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M14.3653 13.8456C13.8162 14.5483 12.9609 15 12 15C10.3431 15 9 13.6569 9 12C9 11.3256 9.22253 10.7032 9.59817 10.2021" stroke="#323232" stroke-width="2"></path> <path d="M9 5.62667C11.5803 4.45322 14.7268 4.92775 16.8493 7.05025L19.8511 10.052C20.3477 10.5486 20.5959 10.7969 20.7362 11.0605C21.0487 11.6479 21.0487 12.3521 20.7362 12.9395C20.5959 13.2031 20.3477 13.4514 19.8511 13.948V13.948L19.799 14" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M7.01596 8.39827C7.40649 8.00774 7.40649 7.37458 7.01596 6.98406C6.62544 6.59353 5.99228 6.59353 5.60175 6.98406L7.01596 8.39827ZM7.65685 16.2427L5.53553 14.1213L4.12132 15.5356L6.24264 17.6569L7.65685 16.2427ZM16.1421 16.2427C13.799 18.5858 10 18.5858 7.65685 16.2427L6.24264 17.6569C9.36684 20.7811 14.4322 20.7811 17.5563 17.6569L16.1421 16.2427ZM5.53553 9.8787L7.01596 8.39827L5.60175 6.98406L4.12132 8.46449L5.53553 9.8787ZM16.7465 15.6383L16.1421 16.2427L17.5563 17.6569L18.1607 17.0526L16.7465 15.6383ZM5.53553 14.1213C4.84888 13.4347 4.40652 12.9893 4.12345 12.6183C3.85798 12.2704 3.82843 12.1077 3.82843 12H1.82843C1.82843 12.7208 2.1322 13.3056 2.53341 13.8315C2.917 14.3342 3.47464 14.8889 4.12132 15.5356L5.53553 14.1213ZM4.12132 8.46449C3.47464 9.11116 2.917 9.6658 2.53341 10.1686C2.1322 10.6944 1.82843 11.2792 1.82843 12H3.82843C3.82843 11.8924 3.85798 11.7297 4.12345 11.3817C4.40652 11.0107 4.84888 10.5654 5.53553 9.8787L4.12132 8.46449Z" fill="#323232"></path> </g></svg>

    </div>
</div>
<div class="error-message">
  <p v-if="validationErrors.password"  class="text-red-500 text-xs" >{{ validationErrors.password }}</p>
      </div>


<div class="relative mb-3">

    <InputField
      v-model="confirmPassword"
      :inputType="isConfirmPasswordVisible ? 'text' : 'password'"
      placeholder="Confirm Password"
    >
      <template #icon>
        <!-- Key Icon for Password -->
      <svg class="w-4 h-4" version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve" fill="#000000" transform="matrix(-1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path fill="#231F20" d="M22,16c-3.309,0-6,2.691-6,6s2.691,6,6,6s6-2.691,6-6S25.309,16,22,16z"></path> <path fill="#231F20" d="M22,12c-5.514,0-10,4.486-10,10s4.486,10,10,10s10-4.486,10-10S27.514,12,22,12z M22,30 c-4.411,0-8-3.589-8-8s3.589-8,8-8s8,3.589,8,8S26.411,30,22,30z"></path> <path fill="#231F20" d="M44,22C44,9.85,34.15,0,22,0S0,9.85,0,22s9.85,22,22,22S44,34.15,44,22z M22,34c-6.617,0-12-5.383-12-12 s5.383-12,12-12s12,5.383,12,12S28.617,34,22,34z"></path> <path fill="#231F20" d="M63.414,50.586L44.13,31.302c-1.084,2.575-2.61,4.915-4.475,6.939L64,62.582V52 C64,51.47,63.789,50.961,63.414,50.586z"></path> <path fill="#231F20" d="M29.852,44.68l0.734,0.734C30.961,45.789,31.47,46,32,46h4v4c0,1.104,0.896,2,2,2h4v4c0,1.104,0.896,2,2,2 h4v4c0,1.104,0.896,2,2,2h12.582l-24.34-24.344C35.844,41.862,32.997,43.59,29.852,44.68z"></path> </g> </g></svg>

      </template>


    </InputField>

<div 
      class="absolute inset-y-0 right-3 flex items-center cursor-pointer"
      @click="toggleConfirmPasswordVisibility"
    >
<svg v-if="isConfirmPasswordVisible" class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M16.8494 7.05025C14.1158 4.31658 9.6836 4.31658 6.94993 7.05025L4.82861 9.17157C3.49528 10.5049 2.82861 11.1716 2.82861 12C2.82861 12.8284 3.49528 13.4951 4.82861 14.8284L6.94993 16.9497C9.6836 19.6834 14.1158 19.6834 16.8494 16.9497L18.9707 14.8284C20.3041 13.4951 20.9707 12.8284 20.9707 12C20.9707 11.1716 20.3041 10.5049 18.9707 9.17157L16.8494 7.05025ZM12.0002 8.75C10.2053 8.75 8.75019 10.2051 8.75019 12C8.75019 13.7949 10.2053 15.25 12.0002 15.25C13.7951 15.25 15.2502 13.7949 15.2502 12C15.2502 10.2051 13.7951 8.75 12.0002 8.75Z" fill="#323232"></path> <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="#323232" stroke-width="2"></path> <path d="M6.94975 7.05025C9.68342 4.31658 14.1156 4.31658 16.8492 7.05025L18.9706 9.17157C20.3039 10.5049 20.9706 11.1716 20.9706 12C20.9706 12.8284 20.3039 13.4951 18.9706 14.8284L16.8492 16.9497C14.1156 19.6834 9.68342 19.6834 6.94975 16.9497L4.82843 14.8284C3.49509 13.4951 2.82843 12.8284 2.82843 12C2.82843 11.1716 3.49509 10.5049 4.82843 9.17157L6.94975 7.05025Z" stroke="#323232" stroke-width="2" stroke-linejoin="round"></path> </g></svg>
      <svg v-else class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.1" d="M6.29528 7.87634L5 9.17162C3.66667 10.505 3 11.1716 3 12C3 12.8285 3.66667 13.4951 5 14.8285L7.12132 16.9498C9.85499 19.6835 14.2871 19.6835 17.0208 16.9498L17.4322 16.5384L14.5053 14.2619C13.9146 14.8713 13.0873 15.2501 12.1716 15.2501C10.3766 15.2501 8.92157 13.795 8.92157 12.0001C8.92157 11.3746 9.09827 10.7904 9.40447 10.2946L6.29528 7.87634Z" fill="#323232"></path> <path d="M3.17139 5.12988L21.1714 19.1299" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M14.3653 13.8456C13.8162 14.5483 12.9609 15 12 15C10.3431 15 9 13.6569 9 12C9 11.3256 9.22253 10.7032 9.59817 10.2021" stroke="#323232" stroke-width="2"></path> <path d="M9 5.62667C11.5803 4.45322 14.7268 4.92775 16.8493 7.05025L19.8511 10.052C20.3477 10.5486 20.5959 10.7969 20.7362 11.0605C21.0487 11.6479 21.0487 12.3521 20.7362 12.9395C20.5959 13.2031 20.3477 13.4514 19.8511 13.948V13.948L19.799 14" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M7.01596 8.39827C7.40649 8.00774 7.40649 7.37458 7.01596 6.98406C6.62544 6.59353 5.99228 6.59353 5.60175 6.98406L7.01596 8.39827ZM7.65685 16.2427L5.53553 14.1213L4.12132 15.5356L6.24264 17.6569L7.65685 16.2427ZM16.1421 16.2427C13.799 18.5858 10 18.5858 7.65685 16.2427L6.24264 17.6569C9.36684 20.7811 14.4322 20.7811 17.5563 17.6569L16.1421 16.2427ZM5.53553 9.8787L7.01596 8.39827L5.60175 6.98406L4.12132 8.46449L5.53553 9.8787ZM16.7465 15.6383L16.1421 16.2427L17.5563 17.6569L18.1607 17.0526L16.7465 15.6383ZM5.53553 14.1213C4.84888 13.4347 4.40652 12.9893 4.12345 12.6183C3.85798 12.2704 3.82843 12.1077 3.82843 12H1.82843C1.82843 12.7208 2.1322 13.3056 2.53341 13.8315C2.917 14.3342 3.47464 14.8889 4.12132 15.5356L5.53553 14.1213ZM4.12132 8.46449C3.47464 9.11116 2.917 9.6658 2.53341 10.1686C2.1322 10.6944 1.82843 11.2792 1.82843 12H3.82843C3.82843 11.8924 3.85798 11.7297 4.12345 11.3817C4.40652 11.0107 4.84888 10.5654 5.53553 9.8787L4.12132 8.46449Z" fill="#323232"></path> </g></svg>

    </div>
</div>
<div class="error-message">
  <p v-if="validationErrors.confirmPassword"  class="text-red-500 text-xs" >{{ validationErrors.confirmPassword }}</p>
      </div>

    <buttons @navigate="handleSubmit" />




    
 
</div>
</template>

<script>
import InputField from '../atoms/InputField.vue';
import buttons from '../atoms/buttons.vue';
export default {
components: {
    InputField,
    buttons

  },
  data() {
 return {
    name: '',
    surname: '',
    email: '',
    newPassword: '',
    confirmPassword: '',
   isPasswordVisible: false,
   isConfirmPasswordVisible:false,
   
    validationErrors: {
      name: '',
      surname: '',
      password: '',
      confirmPassword: '',
    },
  };
  },
  methods: {
    togglePasswordVisibility() {
      this.isPasswordVisible = !this.isPasswordVisible;
    },
  toggleConfirmPasswordVisibility(){

  this.isConfirmPasswordVisible=!this.isConfirmPasswordVisible
},
 validateForm() {
    let isValid = true;

    // Reset validation errors
    this.validationErrors = {
      name: '',
      surname: '',
      password: '',
      confirmPassword: '',
    };

    // Name validation
    if (!this.name) {
      this.validationErrors.name = 'Name is required.';
      isValid = false;
    }

    // Surname validation
    if (!this.surname) {
      this.validationErrors.surname = 'Surname is required.';
      isValid = false;
    }

    // Password validation
    if (!this.newPassword) {
      this.validationErrors.password = 'Password is required.';
      isValid = false;
    } else if (this.newPassword.length < 6) {
      this.validationErrors.password = 'Password must be at least 6 characters.';
      isValid = false;
    }

    // Confirm Password validation
    if (this.newPassword !== this.confirmPassword) {
      this.validationErrors.confirmPassword = 'Passwords do not match.';
      isValid = false;
    }

    return isValid;
    },
   handleSubmit() {
    if (this.validateForm()) {
      // Redirect to email confirmation page
      this.$router.push({ name: 'emailConfirmation' });
    } else {
      console.log('Form has validation errors.');
    }
  },
  }
};
</script>

<style scoped>
.error-message {
  min-height: 17px; /* Prevent layout shift */
}


</style>
