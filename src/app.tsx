import './style.css'

import TREE_IMAGE from './assets/images/tree.png'
import LOGO from './assets/icons/LOGO.svg'

export default function App() {
  return (
    <div>
      <h1>Helloo TypeScript User , V.Anji!!!!!!</h1>
      <p>This is para</p>
      <p>ddddd</p>
      <p>this is local</p>
      <img src={TREE_IMAGE} alt="tree" />
      <br />
      <img src={LOGO} alt="logo" />
    </div>
  )
}
