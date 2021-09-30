import Child from './Child'
import {
    atom,
    useRecoilValue,
  } from 'recoil';

  const familyNames = atom({
    key: 'familyState',
    default: 'Name unknown',
  });

export default function App(props){

    const name = useRecoilValue(familyNames);
    return(
        <>
        <h2>Parent: {name.parent}</h2>
        <Child grandChildName={props.grandChildName}/>
        </>
    )
}