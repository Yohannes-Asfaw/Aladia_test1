import backtologin from '../../components/atoms/backtologin.vue';

export default {
  title: 'Atoms/BackToLogin',
  component: backtologin,
  argTypes: { 
    redirectToLogin: { action: 'clicked' } // To handle click events
  }
};

const Template = (args, { argTypes }) => ({
  components: { backtologin },
  methods: Object.keys(argTypes),
  template: '<backtologin @redirectToLogin="redirectToLogin" />',
});

export const Default = Template.bind({});
Default.args = {
  // You can add any default props if needed
};
