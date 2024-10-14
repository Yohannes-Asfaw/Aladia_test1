// Signup.stories.js

import Signup from '../../pages/signup.vue';

export default {
  title: 'Pages/Signup',
  component: Signup,
};

// Template for rendering the Signup component
const Template = (args) => ({
  components: { Signup },
  setup() {
    return { args };
  },
  template: '<Signup v-bind="args" />',
});

// Default story
export const Default = Template.bind({});
Default.args = {
  // You can define props here if your component accepts any
};

// Additional stories can be added here
export const WithImagePreview = Template.bind({});
WithImagePreview.args = {
  imagePreview: 'https://example.com/image.png', // Example image preview URL
};

// Add more variations as needed
