import TextBlock from '../../components/molecules/TextBlock.vue';

export default {
  title: 'Molecules/TextBlock',
  component: TextBlock,
};

const Template = (args) => ({
  components: { TextBlock },
  setup() {
    return { args };
  },
  template: '<TextBlock v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {};
