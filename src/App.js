import './App.css';
import {
  RecoilRoot,
  atom,
} from 'recoil'

import FamilyTree from './FamilyTree'

const familyState = atom({
  key: 'familyState', //unique id
  default: {
    grandParent: 'Ron',
    parent: 'Sal',
    child: 'Dave',
    grandchild: 'Micky'
  }
})


const childAgeState = atom({
  key: 'childAgeState',
  default: 0,
})

export default function App() {
  return (
    <RecoilRoot>
      <div className="container">
        <FamilyTree />
      </div>
    </RecoilRoot>


  )
}
