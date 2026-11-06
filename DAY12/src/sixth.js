
import GlobalContext from "./Global";
import { useContext } from "react";

export default function Sixth() {
    const { count, setCount } = useContext(GlobalContext);

    return (
        <>
            <h2>I am Sixth</h2>
            <h3>Count: {count}</h3>

            <button onClick={() => setCount(count + 1)}>
                Increase
            </button>
        </>
    );
}
