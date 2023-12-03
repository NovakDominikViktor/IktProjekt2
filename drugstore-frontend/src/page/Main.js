import React, { useState } from 'react';
import GetCars from "../hooks/GetCars"
import CreateCar from "../hooks/CreateCar"

function Main()
{
    const [count, setCount] = useState(0)

    const handleCountState = () =>
    {
        setCount(count + 1)
    };


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-9">
                    <GetCars stateChange={handleCountState} count={count} />
                </div>

                <div className="col-md-3">
                    <CreateCar stateChange={handleCountState} count={count} />
                </div>
            </div>


        </div>
    )

}
export default Main