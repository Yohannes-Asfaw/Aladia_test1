<template>
  <div class="h-[680px] flex items-center justify-center bg-black dark:bg-black">
  <div class="relative -mt-20 flex h-[40rem] mt-1 w-[26rem] flex-col rounded-md border border-white/10 bg-black/50 opacity-1 backdrop-blur transition-all duration-300">
    <div class="pointer-events-none absolute inset-0 opacity-70">
      <div class="bg-gradient-top absolute -top-[1px] left-0 right-0 h-[1px]"></div>
      <div class="bg-gradient-top absolute -bottom-[1px] left-0 right-0 h-[1px]"></div>
      <div class="bg-gradient-left absolute -left-[1px] bottom-0 top-0 w-[1px]"></div>
      <div class="bg-gradient-left absolute -right-[1px] bottom-0 top-0 w-[1px]"></div>
    </div>
    <div class="relative z-10  p-5 text-13">
      <div class="flex flex-col items-center px-6 pt-8">
        <img src="/assets/aladia.png" class="mb-2 h-24 w-24 rounded object-cover" alt="Logo">
        <div class="mb-4 text-lg font-semibold text-white">Yohannes Asfaw</div>
        <div class="mb-8 text-white/70">Thanks for joining Aladia.</div>
        <div class="mb-20 text-center text-white/70">
          Please enter below the 6-digit code we sent you through your registration e-mail:
        </div>
        <div class="relative mb-4 flex h-10 w-full justify-between text-xl text-black">
          <input v-model="code[0]" maxlength="1" class="flex w-10 items-center justify-center rounded bg-white text-center outline-none transition-transform active:scale-90">
          <input v-model="code[1]" maxlength="1" class="flex w-10 items-center justify-center rounded bg-white text-center outline-none transition-transform active:scale-90">
          <input v-model="code[2]" maxlength="1" class="flex w-10 items-center justify-center rounded bg-white text-center outline-none transition-transform active:scale-90">
          <input v-model="code[3]" maxlength="1" class="flex w-10 items-center justify-center rounded bg-white text-center outline-none transition-transform active:scale-90">
          <input v-model="code[4]" maxlength="1" class="flex w-10 items-center justify-center rounded bg-white text-center outline-none transition-transform active:scale-90">
          <input v-model="code[5]" maxlength="1" class="flex w-10 items-center justify-center rounded bg-white text-center outline-none transition-transform active:scale-90">
        </div>
        <div class="mb-24 flex w-full justify-center">
          <div class="flex cursor-pointer items-center justify-center text-xs transition-all">
            <div class="text-white/50">You didn't receive any mail?</div>
          </div>
        </div>
        
        <buttons/>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import buttons from '~/components/atoms/buttons.vue';

export default {
components: {
    buttons,
  
  },
  data() {
    return {
      code: ['', '', '', '', '', ''], // Array to hold each digit of the code
    };
  },
  methods: {
    submitCode() {
      const fullCode = this.code.join('');
      console.log("Submitted Code: ", fullCode);
      // Here you would typically handle the code submission logic, like calling an API
    },
  },
};
</script>

<style scoped>
/* You can add your styles here if needed */
</style>
