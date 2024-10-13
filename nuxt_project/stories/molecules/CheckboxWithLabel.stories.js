import CheckboxWithLabel from '../../components/molecules/CheckboxWithLabel.vue';

export default {
  title: 'Molecules/CheckboxWithLabel',
  component: CheckboxWithLabel,
};

const Template = (args) => ({
  components: { CheckboxWithLabel },
  setup() {
    return { args };
  },
  template: '<CheckboxWithLabel v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {};
