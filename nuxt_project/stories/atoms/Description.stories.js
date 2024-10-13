import Description from '../../components/atoms/DescriptionText.vue';

export default {
  title: 'Atoms/DescriptionText',
  component: Description,
};

const Template = (args) => ({
  components: { Description },
  setup() {
    return { args };
  },
  template: '<Description v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  // You can define any default props here if needed
};
