import InputField from '../../components/atoms/InputField.vue';

export default {
  title: 'Atoms/InputField',
  component: InputField,
  argTypes: {
    modelValue: { control: 'text' }, // Control for modelValue
    placeholder: { control: 'text' }, // Control for placeholder
    inputType: { control: 'select', options: ['text', 'password', 'email'] }, // Control for input type
    disabled: { control: 'boolean' }, // Control for disabled state
  },
};

const Template = (args) => ({
  components: { InputField },
  setup() {
    return { args };
  },
  template: '<InputField v-bind="args" @update:modelValue="args.modelValue = $event" />',
});

export const Default = Template.bind({});
Default.args = {
  modelValue: '',
  placeholder: 'Enter text',
  inputType: 'text',
  disabled: false,
};
