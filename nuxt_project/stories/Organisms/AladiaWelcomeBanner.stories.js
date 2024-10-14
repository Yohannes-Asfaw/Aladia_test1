import AladiaWelcomeBanner from '../../components/Organisms/AladiaWelcomeBanner.vue';

export default {
  title: 'Organisms/AladiaWelcomeBanner',
  component: AladiaWelcomeBanner,
};

const Template = (args) => ({
  components: { AladiaWelcomeBanner },
  setup() {
    return { args };
  },
  template: '<AladiaWelcomeBanner v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {};
