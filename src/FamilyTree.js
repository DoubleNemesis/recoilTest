import Grandparent from './family-tree/Grandparent'
import { useState } from 'react'

export default function App(props) {

    const [grandChildName, setGrandchildName] = useState('Frank')
    return (
        <>
            <h1>My Family Tree</h1>
            <Grandparent grandChildName={grandChildName} />
        </>
    )
}