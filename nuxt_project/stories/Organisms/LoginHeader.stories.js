import LoginHeader from '../../components/Organisms/loginHeader.vue';

export default {
  title: 'Organisms/LoginHeader',
  component: LoginHeader,
};

const Template = (args) => ({
  components: { LoginHeader },
  setup() {
    return { args };
  },
  template: '<LoginHeader v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {};

