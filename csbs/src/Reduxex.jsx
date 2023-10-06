import React from 'react'
import { Incnumber, Decnumber } from './action';
import { text } from './action';
import { dark } from './action';
import { useSelector, useDispatch } from 'react-redux';

export default function Reduxex() {
    const mystate = useSelector((state) => state.Changenumber)
    const mytext = useSelector((state) => state.Chnagetext)
    const chngbg = useSelector((state) => state.Changebg)
    // const dispatch = useDispatch()
    const dispatch = useDispatch()
    return (
        <>
            <button onClick={() => dispatch(Incnumber())}>+</button>
            <h1>{mystate}</h1>
            <button onClick={() => dispatch(Decnumber())}>-</button>
            <h2>{mytext}</h2>
            <button onClick={() => dispatch(text())}>Change-text</button>
            <button onClick={() => dispatch(dark())}>Change-Background</button>

        </>
    );
}