import buttons from '../../components/atoms/buttons.vue';

export default {
  title: 'Atoms/Buttons',
  component: buttons,
  argTypes: { 
    navigate: { action: 'navigate' } // Handle the click event
  }
};

const Template = (args, { argTypes }) => ({
  components: { buttons },
  methods: Object.keys(argTypes),
  template: '<buttons @navigate="navigate" />',
});

export const Default = Template.bind({});
Default.args = {
  // You can define any default props here if needed
};
