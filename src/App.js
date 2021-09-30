import './App.css';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil'

import FamilyTree from './FamilyTree'

const familyState = atom({
  key: 'familyState', // unique ID (with respect to other atoms/selectors)
  default: {grandParent: 'Ron',
            parent: 'Sal',
            child: 'Dave',
            grandChild: 'Micky'
}, // default value (aka initial value)
});

const childAgeState = atom({
  key: 'childAgeState', // unique ID (with respect to other atoms/selectors)
  default: 0, // default value (aka initial value)
});

export default function App(){    
    return(
      <RecoilRoot>
        <div className="container">
        <FamilyTree/>
        </div>
      </RecoilRoot>
    )
}
