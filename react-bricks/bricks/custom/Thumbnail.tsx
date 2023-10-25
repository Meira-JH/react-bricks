import { Text, types } from 'react-bricks/frontend'

const Thumbnail: types.Brick = () => {
  return (
    <div className="p-6 text-center">
      {' '}
      <Text
        propName="title"
        renderBlock={({ children }) => (
          <h1 className="text-2xl font-bold">{children}</h1>
        )}
        placeholder="Type a text..."
        // multiline={false} : boolean
        // softLineBreak={false} : boolean
      />
    </div>
  )
}

Thumbnail.schema = {
  name: 'thumbnail',
  label: 'Thumbnail',
  sideEditProps: [],
}

export default Thumbnail
