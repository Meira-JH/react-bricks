import { Image, RichText, types } from 'react-bricks/frontend'

//=============================
// Local Types
//=============================
type Padding = 'big' | 'small'

interface HeroUnitProps {
  padding: Padding
  title: string
  text: string
}

//=============================
// Component to be rendered
//=============================
const HeroSubmitPhone: types.Brick<HeroUnitProps> = ({ padding }) => {
  return (
    <div
      className={`max-w-xl mx-auto px-6 ${
        padding === 'big' ? 'py-20' : 'py-12'
      }`}
    >
      <div>
        <RichText
          renderBlock={(props) => (
            <h1 className="mb-8 text-4xl text-center text-purple-800 dark:text-gray-100 font-bold">
              {props.children}
            </h1>
          )}
          placeholder="Type a text..."
          propName="title"
          allowedFeatures={[
            types.RichTextFeatures.Bold,
            types.RichTextFeatures.Italic,
            types.RichTextFeatures.Highlight,
            types.RichTextFeatures.Code,
            types.RichTextFeatures.Link,
          ]}
        />
        <Image
          propName="hero"
          alt="hero"
          aspectRatio={1}
          maxWidth={100}
          imageClassName="w-full mb-0 mx-auto"
        />
        <div className={`w-full flex-column items-end border-2 border-red-500`}>
          <input
            type="text"
            id="phone"
            className="mb-2 max-w-s bg-gray-50 border border-grey-900 text-gray-900 text-sm rounded-lg focus:ring-purple-800 focus:border-purple-800 w-3/4 p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
            placeholder="Seu telefone..."
            required
          />
          <button
            type="button"
            className="w-3/4 focus:outline-none text-black font-bold bg-green-500 hover:bg-green-300 focus:ring-4 focus:ring-green-300  rounded-lg text-m px-5 py-2.5  dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Assine Agora
          </button>
        </div>
      </div>
    </div>
  )
}

//=============================
// Brick Schema
//=============================
HeroSubmitPhone.schema = {
  name: 'HeroSubmitPhone',
  label: 'HeroSubmitPhone',
  previewImageUrl: `/bricks-preview-images/hero-vivae-1.png`,
  getDefaultProps: () => ({
    padding: 'big',
    title: 'Aprenda o que existe de mais atual com os cursos rápidos Vivae',
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

export default HeroSubmitPhone
