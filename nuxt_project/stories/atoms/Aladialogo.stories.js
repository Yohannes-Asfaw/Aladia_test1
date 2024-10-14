import LogoImage from '../../components/atoms/AladiaLogo.vue';

export default {
  title: 'Atoms/LogoImage',
  component: LogoImage,
};

const Template = (args, { argTypes }) => ({
  components: { LogoImage },
  template: '<LogoImage />',
});

export const Default = Template.bind({});
Default.args = {
  // No props are needed for this basic component
};
