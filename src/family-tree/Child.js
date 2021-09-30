import React from 'react'
import Grandchild from './Grandchild'
import {
    atom,
    useRecoilValue, // one way props
    useRecoilState, // allows you to change/update state
} from 'recoil'

//setup atoms

const familyNames = atom({
    key: 'familyState',
    default: 'Name unknown'
})

const childAge = atom({
    key: 'childAgeState',
    default: 10,
})

export default function Child(props) {

    const names = useRecoilValue(familyNames);
    const [age, setAge] = useRecoilState(childAge)

    const minusYear = () => {
        setAge(age - 1)
    }
    const plusYear = () => {
        setAge(age + 1)
    }

    return (
        <>
            <h2>Child: {names.child}  aged {age} years old.</h2>
            <div>

                <button onClick={minusYear} className="minus"> - year</button>
                <button onClick={plusYear} className="plus"> + year</button>
            </div>
            <Grandchild grandChildName={props.grandChildName} />
        </>
    )
}