// components/Organisms/signupDetails.stories.js
import SignupDetails from '../../components/Organisms/signupDetails.vue';

export default {
  title: 'Organisms/SignupDetails',
  component: SignupDetails,
};

const Template = (args) => ({
  components: { SignupDetails },
  setup() {
    return { args };
  },
  template: '<SignupDetails v-bind="args" />',
});

// Default Story
export const Default = Template.bind({});
Default.args = {
  name: '',
  surname: '',
  email: 'example@example.com',
  newPassword: '',
  validationErrors: {
    name: '',
    surname: '',
  },
  isPasswordVisible: false,
};

// Error State Story
export const ErrorState = Template.bind({});
ErrorState.args = {
  name: '',
  surname: '',
  email: 'example@example.com',
  newPassword: '',
  validationErrors: {
    name: 'Name is required.',
    surname: 'Surname is required.',
  },
  isPasswordVisible: false,
};

// Disabled Email Story
export const DisabledEmail = Template.bind({});
DisabledEmail.args = {
  name: 'John',
  surname: 'Doe',
  email: 'example@example.com',
  newPassword: '',
  validationErrors: {},
  isPasswordVisible: false,
};
