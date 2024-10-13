import BackIcon from '../../components/atoms/BackIcon.vue';

export default {
  title: 'Atoms/BackIcon',
  component: BackIcon,
};

const Template = (args, { argTypes }) => ({
  components: { BackIcon },
  template: '<BackIcon />',
});

export const Default = Template.bind({});
Default.args = {
  // No props are needed for this basic icon component
};
