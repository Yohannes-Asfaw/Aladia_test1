<template>
  <div class="relative mb-1">
    <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
      <slot name="icon"></slot>
    </div>
    <input
      :type="inputType"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :disabled="disabled"
      class="input-field bg-white-900 border border-gray-300 text-sm rounded-md block w-full ps-10 p-2.5 text-black outline-none focus:outline-none focus:bg-gray-300"
    />
  </div>
</template>
<script>
export default {
  props: {
    modelValue: {
      type: [String, Number],
      required: true
    },
    placeholder: {
      type: String,
      required: true
    },
    inputType: {
      type: String,
      default: 'text'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:modelValue']
};
</script>

<style scoped>
/* Add your styles here */
</style>
