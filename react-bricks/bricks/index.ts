import { types } from 'react-bricks/frontend'

import HeaderVivae from './custom/HeaderVivae'
import HeroSubmitPhone from './custom/HeroSubmitPhone'
import HeroUnit from './custom/MyHeroUnit'
import Pokemon from './custom/Pokemon'
import Teste from './custom/Test'
import Thumbnail from './custom/Thumbnail'
import reactBricksUITheme from './react-bricks-ui'

const bricks: types.Theme[] = [
  reactBricksUITheme, // React Bricks UI
  {
    themeName: 'Default',
    categories: [
      {
        categoryName: 'Hero sections',
        bricks: [HeroUnit, Thumbnail, HeaderVivae, Teste, HeroSubmitPhone], // Custom Bricks
      },
      {
        categoryName: 'Pokemon',
        bricks: [Pokemon], // External data Bricks
      },
    ],
  },
]

export default bricks
