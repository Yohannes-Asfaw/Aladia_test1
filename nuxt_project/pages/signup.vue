<template>
  <div class="h-[700px] flex items-center justify-center bg-black dark:bg-black">
    <div class=" h-[650px] shadow-md max-w-[430px] w-full border border-white/20 p-9 pt-0 bg-transparent">
    <SignupHeader />
    <signupDetails/>
    <terms/>
    </div>

  </div>
</template>

<script>
 

import '@fortawesome/fontawesome-free/css/all.min.css';
import SignupHeader from '~/components/Organisms/SignupHeader.vue';
import signupDetails from '~/components/Organisms/signupDetails.vue';
import buttons from '~/components/atoms/buttons.vue';
import terms from '~/components/atoms/terms.vue';


export default {
  components: {
    SignupHeader,
    signupDetails,
    buttons,
    terms,
  },
  head() {
    return {
      title: 'User Registration'
    }
  },
  data() {
    return {
      // Initially hide the icon
      isVisible: false,
imagePreview: 'https://develop.aladia.io/_nuxt/image.ChQ3biW9.png',
 newPassword: '', 
      isPasswordVisible: false, 
confirmPassword: '',
      isConfirmPasswordVisible: false
    }
  },
  methods: {
 goToEmailConfirmation() {
      this.$router.push('/emailConfirmation'); 
    },
    toggleVisibility() {
      // Toggle the isVisible state
      this.isVisible = !this.isVisible;
    },
 toggleConfirmPasswordVisibility() {
      this.isConfirmPasswordVisible = !this.isConfirmPasswordVisible;
    },
togglePasswordVisibility() {
      this.isPasswordVisible = !this.isPasswordVisible;
    },
  previewImage(event) {
      // Ensure there is a file selected and it is valid
      const file = event.target.files && event.target.files[0];

      if (file) {
        // Check if the file is an image
        if (!file.type.startsWith("image/")) {
          console.error("Selected file is not an image.");
          return;
        }

        const reader = new FileReader();
        reader.onload = () => {
          this.imagePreview = reader.result; // Set the imagePreview to the file content
        };

        reader.onerror = (err) => {
          console.error("Error reading the file:", err);
        };

        // Read the file as a Data URL (base64 encoded)
        reader.readAsDataURL(file);
      } else {
        console.error("No file selected or the file is invalid.");
      }
    },
  redirectToLogin() {
      this.$router.push('/login');
    },
  },
}
</script>

<style scoped>
.input-field::placeholder {
  transition: font-size 0.3s ease; /* Adds a smooth transition to the placeholder size */
}

.input-field:focus::placeholder {
  font-size: 0.75rem; /* Tailwind's text-xs equivalent for smaller font size */
}

</style>
