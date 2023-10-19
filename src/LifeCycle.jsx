import { useState } from "react";

export default function LifeCycle() {
    const [name, setName] = useState('');
    const [number, setNumber] = useState(0);

    const increment = () => {
        setNumber(number + 1);
    }

    //change name base on input value
    const changeName = (e) => {
        setName(e.target.value);
    }

    return (
        <>
            <div className="container">
                <div className="row text-center">
                    <div className="col">
                        <p>{name}</p>
                        <p>{number}</p>
                        <button className="btn btn-primary" onClick={increment}>+1</button>
                        <input type="text" onChange={changeName} />
                    </div>
                </div>
            </div>
        </>
    )
}

