import WelcomeTitle from '../../components/atoms/WelcomeTitle.vue';

export default {
  title: 'Atoms/WelcomeTitle',
  component: WelcomeTitle,
};

const Template = (args) => ({
  components: { WelcomeTitle },
  setup() {
    return { args };
  },
  template: '<WelcomeTitle v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {};
