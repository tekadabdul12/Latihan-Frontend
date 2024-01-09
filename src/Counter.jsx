import { useState } from "react";

const Counter = (props) => {
    const [count, setCount] = useState(0);
    const [nama] = useState(" rena ")
    return(
        <button onClick={() => setCount((count) => count + 1)}>
          {props.label} {count}
        </button>
    );
};

export default Counter;