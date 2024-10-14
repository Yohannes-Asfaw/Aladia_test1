import LoginRedirectButton from '../../components/Organisms/LoginRedirectButton.vue';

export default {
  title: 'Organisms/LoginRedirectButton',
  component: LoginRedirectButton,
};

const Template = (args) => ({
  components: { LoginRedirectButton },
  setup() {
    return { args };
  },
  template: '<LoginRedirectButton v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {};
