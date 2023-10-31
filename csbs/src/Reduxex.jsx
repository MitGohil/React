import React, { useState } from 'react'
import { Incnumber, Decnumber, Reset_bg, Change_bg } from './action';
import { text } from './action';
// import { bg } from './action';
import { useSelector, useDispatch } from 'react-redux';
import { MDBBtn } from "mdb-react-ui-kit";


export default function Reduxex() {
    const mystate = useSelector((state) => state.Changenumber)
    const mytext = useSelector((state) => state.Chnagetext)
    const viewBg = useSelector((state) => state.Changebg);
    const [show, setShow] = useState(true)
    const dispatch = useDispatch()
    return (
        <>
            <button onClick={() => dispatch(Incnumber())}>+</button>
            <h1>{mystate}</h1>
            <button onClick={() => dispatch(Decnumber())}>-</button>
            <h2>{mytext}</h2>
            <button onClick={() => dispatch(text())}>Change-text</button>

            <div style={{ height: 700, backgroundColor: viewBg.color }} >

                <MDBBtn
                    onClick={() => dispatch(Change_bg())}
                    className="mx-5 mt-5"
                    rounded
                >
                    change color
                </MDBBtn>
                <MDBBtn
                    onClick={() => dispatch(Reset_bg())}
                    color="danger"
                    className=""
                    rounded
                >
                    reset color
                </MDBBtn>
                <br />
                <MDBBtn rounded className='m-3' onClick={() => setShow(!show)}>Toggle</MDBBtn> <br />
                {
                    show ? <MDBBtn
                        onClick={() => dispatch(Change_bg())}
                        className="m-3"
                        rounded
                    >
                        change color
                    </MDBBtn> : <MDBBtn
                        onClick={() => dispatch(Reset_bg())}
                        color="danger"
                        className="m-3"
                        rounded
                    >
                        reset color
                    </MDBBtn>
                }
            </div>
        </>
    );
}