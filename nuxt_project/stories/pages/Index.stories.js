// stories/pages/Index.stories.js
import Index from '../../pages/index.vue';

export default {
  title: 'Pages/Index',
  component: Index,
  argTypes: {
    email: { control: 'text' },
    errorMessage: { control: 'text' },
  },
};

const Template = (args) => ({
  components: { Index },
  setup() {
    return { args };
  },
  template: '<Index v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  email: '',
  errorMessage: '',
};

export const ErrorState = Template.bind({});
ErrorState.args = {
  email: '',
  errorMessage: 'Please enter a valid email address.',
};

export const FilledEmail = Template.bind({});
FilledEmail.args = {
  email: 'test@example.com',
  errorMessage: '',
};
