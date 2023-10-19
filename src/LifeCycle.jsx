import { useState } from "react";

export default function LifeCycle() {
    const [name, setName] = useState('');
    const [number, setNumber] = useState(0);

    const increment = () => {
        setNumber(number + 1);
    }

    return (
        <>
            <div className="container">
                <div className="row text-center">
                    <div className="col">
                        <p>{name}</p>
                        <p>{number}</p>
                        <button className="btn btn-primary" onClick={increment}>+1</button>
                    </div>
                </div>
            </div>
        </>
    )
}

