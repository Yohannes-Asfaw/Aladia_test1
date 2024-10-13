// components/Organisms/TermsAndConditionsCheckbox.stories.js
import TermsAndConditionsCheckbox from '../../components/Organisms/TermsAndConditionsCheckbox.vue';

export default {
  title: 'Organisms/TermsAndConditionsCheckbox',
  component: TermsAndConditionsCheckbox,
};

const Template = (args) => ({
  components: { TermsAndConditionsCheckbox },
  setup() {
    return { args };
  },
  template: '<TermsAndConditionsCheckbox v-bind="args" />',
});

// Default Story
export const Default = Template.bind({});
Default.args = {
  // Define any props if necessary, or keep it empty if the component doesn't require props
};

// With Checked State Story (if CheckboxWithLabel supports it)
export const Checked = Template.bind({});
Checked.args = {
  // Assuming CheckboxWithLabel supports a prop for checked state, set it here
  // For example:
  checked: true, // or any prop relevant to your CheckboxWithLabel component
};

// With Unchecked State Story (if CheckboxWithLabel supports it)
export const Unchecked = Template.bind({});
Unchecked.args = {
  // Assuming CheckboxWithLabel supports a prop for unchecked state, set it here
  checked: false,
};
