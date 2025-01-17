export default function Btn({ value, handler, themColorBtn }) {
    const btnStyle = {
        padding: "1em",
        border: "none",
        outline: "none",
        backgroundColor: themColorBtn ? "#ff7700" : "#f5f4f0",
        color: themColorBtn ? "#fff" : "#000",
        fontWeight: "bold",
        fontSize: "1.1rem",
        width: "4em",
        height: "4em",
        borderRadius: "50px",
    };
    return (
        <button onClick={handler} style={btnStyle}>
            {value}
        </button>
    );
}
