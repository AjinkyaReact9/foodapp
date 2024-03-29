import React, { useState } from 'react'

const Form = () => {
    const [name, setName] = useState("");
    const [data, setcontact] = useState("");

    const setName1 = (e) => {
        e.preventDefault();
       setName(
        e.target.value
       )
    }

    const setName2 = (e) => {
        e.preventDefault();
        setcontact(
        e.target.value
       )
    }

    // const setData1 = () => {
    //     setData(
    //         console.log(data, "")
    //     )
        
    // }
    
    return (
    <div className='mt-3'>
    <input type='text' onChange={setName1} name='name' placeholder='username' value={name}/>
    <input type='number' name='contact' placeholder='contact' onChange={setName2} value={data}/>
    <button onClick={() => {
        console.log( name, data, "" + "");
        
    }} className='btn btn-success'>Subject</button>
    </div>
  )
}

export default Form;
