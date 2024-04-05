import { useState } from "react";


const Form = () => {
    const [userName, setUserName] = useState("");
    const [userNumber, setUserNumber] = useState("");

    const data = (e) => {
        setUserName(e.target.value)
    }

    const number = (e) =>{
        setUserNumber(e.target.value)
    }

    const submitedData = () => {
        console.log("data", userName, userNumber);
    }

    return (
        <div>
                <input type="text" placeholder="username" value={userName} onChange={data}/>
                <input type="number" placeholder="enter number" value={userNumber} onChange={number}/>
                <button className="btn btn-primary" onClick={submitedData}>Submit</button>
        </div>
    )
}

export default Form;
