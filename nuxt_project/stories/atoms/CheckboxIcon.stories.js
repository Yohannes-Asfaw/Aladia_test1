import CheckboxIcon from '../../components/atoms/CheckboxIcon.vue';

export default {
  title: 'Atoms/CheckboxIcon',
  component: CheckboxIcon,
  argTypes: {
    isVisible: { control: 'boolean' },  // Allow controlling visibility from Storybook
    toggle: { action: 'toggled' },  // Capture the toggle event
  },
};

const Template = (args, { argTypes }) => ({
  components: { CheckboxIcon },
  props: Object.keys(argTypes),
  methods: Object.keys(argTypes),
  template: '<CheckboxIcon :isVisible="isVisible" @toggle="toggle" />',
});

export const Default = Template.bind({});
Default.args = {
  isVisible: false,  // Set default state of visibility
};
