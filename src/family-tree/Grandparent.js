import Parent from './Parent'
import {
    atom,
    useRecoilValue,
  } from 'recoil';

  const familyNames = atom({
    key: 'familyState',
    default: 'Name unknown',
  });

export default function Grandparent(props){

    const name = useRecoilValue(familyNames);
    return(
        <>
        <h2>Grandparent: {name.grandParent}</h2>
        <Parent grandChildName={props.grandChildName}/>
        </>
    )
}