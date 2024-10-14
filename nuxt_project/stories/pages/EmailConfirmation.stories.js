// EmailConfirmation.stories.js

import EmailConfirmation from '../../pages/emailConfirmation.vue';

export default {
  title: 'Pages/EmailConfirmation',
  component: EmailConfirmation,
};

// Template for rendering the EmailConfirmation component
const Template = (args) => ({
  components: { EmailConfirmation },
  setup() {
    return { args };
  },
  template: '<EmailConfirmation v-bind="args" />',
});

// Default story
export const Default = Template.bind({});
Default.args = {
  // You can define any props here if your component accepts any
};

// Example story to simulate user input for the code
export const WithCodeInput = Template.bind({});
WithCodeInput.args = {
  // You can pre-fill the code array for demonstration purposes
  code: ['1', '2', '3', '4', '5', '6'], // Example of pre-filled input
};
