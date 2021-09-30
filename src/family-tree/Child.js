import React from 'react'
import Grandchild from './Grandchild'
import {
    atom,
    useRecoilValue,
    useRecoilState
  } from 'recoil';

  const familyNames = atom({
    key: 'familyState',
    default: 'Name unknown',
  });
  const childAge = atom({
    key: 'childAgeState',
    default: 0,
  });

export default function App(props){

    const name = useRecoilValue(familyNames);
    const [age, setAge] = useRecoilState(childAge);
    const addYear = ()=>{
        setAge(age+1)
    }
    const minusYear = ()=>{
        setAge(age-1)
    }

    return(
        <>
        <h2>Child: {name.child} aged {age} years old.</h2>
        <div>
        <button onClick={minusYear} className="minus">- year</button>
        <button onClick={addYear} className="plus">+ year</button>
        </div>
        <Grandchild grandChildName={props.grandChildName}/>
        </>
    )
}