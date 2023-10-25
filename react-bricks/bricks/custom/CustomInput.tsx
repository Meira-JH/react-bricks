import { types } from 'react-bricks/frontend'

//=============================
// Local Types
//=============================
type Padding = 'big' | 'small'

interface CustomInputProps {
  padding: Padding
}

//=============================
// Component to be rendered
//=============================
const CustomInput: types.Brick<CustomInputProps> = ({ padding }) => {
  return (
    <input
      className={`max-w-xl mx-auto px-6 ${
        padding === 'big' ? 'py-20' : 'py-12'
      }`}
    />
  )
}

//=============================
// Brick Schema
//=============================
CustomInput.schema = {
  name: 'custom-input-unit',
  label: 'Custom Input',
  getDefaultProps: () => ({
    padding: 'big',
    title: 'This is a custom Input',
    text: '.',
  }),
  sideEditProps: [
    {
      name: 'padding',
      label: 'Padding',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Select,
        options: [
          { value: 'big', label: 'Big Padding' },
          { value: 'small', label: 'Small Padding' },
        ],
      },
    },
  ],
}

export default CustomInput
