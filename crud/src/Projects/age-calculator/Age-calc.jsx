import React, { useState } from 'react'
import "../Projects.css"

const Agecalc = () => {
    const [date, setDate] = useState()
    // setDate(new Date().toISOString().split("T")[0]);
    const [age, setAge] = useState()

    // function calcage() {
    //     let dob = new Date(date.value);
    //     let d1 = dob.getDate();
    //     let m1 = dob.getMonth() + 1;
    //     let y1 = dob.getFullYear();

    //     let today = new Date();
    //     let d2 = today.getDate();
    //     let m2 = today.getMonth() + 1;
    //     let y2 = today.getFullYear();

    //     let d3, m3, y3;
    //     y3 = y2 - y1;
    //     if (m2 >= m1) {
    //         m3 = m2 - m1;
    //     } else {
    //         y3--;
    //         m3 = 12 + m2 - m1;
    //     }
    //     if (d2 >= d1) {
    //         d3 = d2 - d1;
    //     } else {
    //         m3--;
    //         d3 = getDays(y1, m1) + d2 - d1;
    //     }
    //     if (m3 < 0) {
    //         m3 = 11;
    //         y3--;
    //     }
    //     //   console.log(y3, m3, d3);
    //     setAge(`you are ${y3} years , ${m3} months and ${d3} days old `);
    //     function getDays(year, month) {
    //         return new Date(year, month, 0).getDate();
    //     }
    // }

    return (
        <>
            <div class="age">
                <div class="calc">
                    <h1>Age Calculator</h1>
                    <div class="input">
                        <input type="date" name="" id="date" value={date} onChange={(e) => setDate(e.target.value)} />
                        <button>Calculator</button>
                    </div>
                    <h1>{age}</h1>
                </div>
            </div>  
        </>
    );
}

export default Agecalc;