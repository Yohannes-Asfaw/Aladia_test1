import AcceptTerms from '../../components/atoms/acceptTerms.vue';

export default {
  title: 'Atoms/AcceptTerms',
  component: AcceptTerms,
};

const Template = (args, { argTypes }) => ({
  components: { AcceptTerms },
  props: Object.keys(argTypes),
  template: '<AcceptTerms v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  // Any initial props if needed
};

export const Checked = Template.bind({});
Checked.args = {
  isVisible: true, // Simulate the checkbox being checked
};
