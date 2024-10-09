<template>
  <div class="login-container">
    <div class="login-box">
      <div class="header">
        <img src="/logo.png" alt="Logo" class="logo" />
        <h2>Welcome to Aladia</h2>
        <p>Create or access your account from here</p>
      </div>
      <div class="form">
        <input type="email" placeholder="Email Address" v-model="email" class="email-input" />
        <button class="login-button" @click="handleLogin">Enter</button>
        <p class="or">Or</p>
        <button class="social-button google">
          <img src="/google-icon.png" alt="Google" /> Continue with Google
        </button>
        <button class="social-button facebook">
          <img src="/facebook-icon.png" alt="Facebook" /> Continue with Facebook
        </button>
        <button class="social-button apple">
          <img src="/apple-icon.png" alt="Apple" /> Continue with Apple
        </button>
      </div>
      <p class="terms">Terms & Conditions</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')

const handleLogin = () => {
  console.log('Login clicked with email:', email.value)
  // Here you would add the login logic (API call, validation, etc.)
}
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #000;
}

.login-box {
  background-color: #1a1a1a;
  padding: 40px;
  border-radius: 8px;
  text-align: center;
  color: white;
  width: 400px;
}

.header {
  margin-bottom: 20px;
}

.logo {
  width: 60px;
  margin-bottom: 10px;
}

.email-input {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 4px;
  border: 1px solid #333;
  background-color: #2a2a2a;
  color: white;
}

.login-button {
  background-color: #333;
  color: white;
  border: none;
  padding: 12px;
  border-radius: 4px;
  width: 100%;
  cursor: pointer;
}

.or {
  margin: 20px 0;
  color: #aaa;
}

.social-button {
  width: 100%;
  padding: 12px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.social-button img {
  width: 20px;
  margin-right: 10px;
}

.terms {
  margin-top: 20px;
  color: #777;
}
</style>
