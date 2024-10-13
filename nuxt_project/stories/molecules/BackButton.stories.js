import BackButton from '../../components/molecules/BackButton.vue';

export default {
  title: 'Molecules/BackButton',
  component: BackButton,
};

const Template = (args) => ({
  components: { BackButton },
  setup() {
    return { args };
  },
  template: '<BackButton v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {};
