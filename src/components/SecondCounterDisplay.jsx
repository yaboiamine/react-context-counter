import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

const SecondCounterDisplay = () => {

    const { count } = useContext(CounterContext);

    return (
        <>
            <h1>ANOTHER DISPLAY OF COUNTER: {count}</h1>
        </>
    );

}

export default SecondCounterDisplay;