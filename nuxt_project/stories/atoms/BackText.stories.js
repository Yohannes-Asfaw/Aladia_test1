import BackText from '../../components/atoms/BackText.vue';

export default {
  title: 'Atoms/BackText',
  component: BackText,
};

const Template = (args, { argTypes }) => ({
  components: { BackText },
  template: '<BackText />',
});

export const Default = Template.bind({});
Default.args = {
  // No props are needed for this basic text component
};
