import Btn from "./Btns.jsx";
import { useState } from "react";
import { btns, displayStyle, btnContainerStyle } from "./helper.js";

function App() {
    const [display, setDisplay] = useState("0");

    // add btn value on the screen
    const btnHandler = (event) => {
        const value = event.target.innerText;

        if (display === "0") {
            setDisplay(value);
        } else {
            setDisplay(display + value);
        }
    };

    // remove btn value on the screen
    const backSpace = () => {
        if (display.length > 1) {
            setDisplay(display.slice(0, -1));
        } else {
            setDisplay("0");
        }
    };

    // equal handler
    const equalhandler = () => {
        setDisplay(eval(display));
    };

    return (
        <>
            {/* display */}
            <div style={displayStyle} onClick={backSpace}>
                <h1>{display}</h1>
            </div>

            {/* buttons */}
            <div style={btnContainerStyle}>
                {btns.map((item) => (
                    <Btn value={item.value} handler={item.value != "=" ? btnHandler : equalhandler} themColorBtn={item.themColorBtn} key={item.id} />
                ))}
            </div>
        </>
    );
}

export default App;
