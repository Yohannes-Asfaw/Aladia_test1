import LabelText from '../../components/atoms/LabelText.vue';

export default {
  title: 'Atoms/LabelText',
  component: LabelText,
};

const Template = (args) => ({
  components: { LabelText },
  setup() {
    return { args };
  },
  template: '<LabelText v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {};
