import './style.css'

import TREE_IMAGE from './assets/images/tree.png'
import LOGO from './assets/icons/LOGO.svg'

export default function App() {
  const num = 0
  const name = 'anji'
  return (
    <div>
      <h1>Helloo TypeScript User , V.Anji!!!!!!</h1>
      <p>This is para</p>
      <p>ddddd</p>
      <p>this is local</p>
      <img src={TREE_IMAGE} />
      <br />
      <img src={LOGO} />
    </div>
  )
}
