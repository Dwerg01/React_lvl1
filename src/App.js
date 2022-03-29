import React, {useState} from "react";
import "./App.css"

function App() {
    const[count, setCount] = useState(0);
    const[prevCount, setPrevCount] = useState(0);


    const handleClick = () => {
        setCount((prevCount) => {
            setPrevCount(prevCount);
            setCount(count + 1);
        });
    };

    return (
        <>
            <h3>Current: {count}</h3>
            <h3>Previous: {prevCount}</h3>
            <button onClick={handleClick}>Increase</button>
        </>
    );
}



export default App;


// function App() {
//     const [value, setValue] = useState("");

//     const eventHandler = (e) => {
//         setValue(e.target.value);
//         console.log(e.target);
//     };

//     return (
//         <>
//             <input
//                 value={value}
//                 placeholder="Enter Name"
//                 onChange={eventHandler}
//             />
//         </>
//     );
// }

// export default App;