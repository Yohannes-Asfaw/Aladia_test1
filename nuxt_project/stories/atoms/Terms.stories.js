import Terms from '../../components/atoms/terms.vue';

export default {
  title: 'Atoms/Terms',
  component: Terms,
};

const Template = (args) => ({
  components: { Terms },
  setup() {
    return { args };
  },
  template: '<Terms v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {};
