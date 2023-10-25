// Thumbnail.tsx
import { types } from 'react-bricks/frontend'

const Teste: types.Brick = () => {
  return (
    <div className="p-6 text-center">
      <h1>UM COMPONENTE TESTE</h1>
      <p className="text-sky-400">testando a estilização com tailwind</p>
    </div>
  )
}

Teste.schema = {
  name: 'Teste',
  label: 'Teste',
  sideEditProps: [],
}

export default Teste
