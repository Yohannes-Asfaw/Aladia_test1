// components/Organisms/SignupHeader.stories.js
import SignupHeader from '../../components/Organisms/SignupHeader.vue';

export default {
  title: 'Organisms/SignupHeader',
  component: SignupHeader,
};

const Template = (args) => ({
  components: { SignupHeader },
  setup() {
    return { args };
  },
  template: '<SignupHeader v-bind="args" />',
});

// Default Story
export const Default = Template.bind({});
Default.args = {
  imagePreview: 'https://develop.aladia.io/_nuxt/image.ChQ3biW9.png', // Default image URL
};

// With Custom Image Story
export const WithCustomImage = Template.bind({});
WithCustomImage.args = {
  imagePreview: 'https://example.com/custom-image.png', // Replace with a custom image URL
};

// Empty Image Preview Story
export const EmptyImagePreview = Template.bind({});
EmptyImagePreview.args = {
  imagePreview: '', // No image set
};
