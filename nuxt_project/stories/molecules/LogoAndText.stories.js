import LogoAndText from '../../components/molecules/LogoAndText.vue';

export default {
  title: 'Molecules/LogoAndText',
  component: LogoAndText,
};

const Template = (args) => ({
  components: { LogoAndText },
  setup() {
    return { args };
  },
  template: '<LogoAndText v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {};
