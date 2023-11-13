import TREE_IMAGE from './assets/images/tree.png'
import LOGO from './assets/icons/LOGO.svg'

import './assets/styles/main.css'

const App: React.FC = () => {
  return (
    <div>
      <h1>Helloo TypeScript User , V.Anji!!!!!!</h1>
      <img src={TREE_IMAGE} alt="tree" />
      <br />
      <img src={LOGO} alt="logo" />
    </div>
  )
}

export default App
