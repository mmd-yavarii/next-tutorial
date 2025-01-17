const btns = [
    { id: 1, value: "1", themColorBtn: false },
    { id: 2, value: "2", themColorBtn: false },
    { id: 3, value: "3", themColorBtn: false },
    { id: 4, value: "+", themColorBtn: true },
    { id: 5, value: "4", themColorBtn: false },
    { id: 6, value: "5", themColorBtn: false },
    { id: 7, value: "6", themColorBtn: false },
    { id: 8, value: "-", themColorBtn: true },
    { id: 9, value: "7", themColorBtn: false },
    { id: 10, value: "8", themColorBtn: false },
    { id: 11, value: "9", themColorBtn: false },
    { id: 12, value: "*", themColorBtn: true },
    { id: 13, value: "0", themColorBtn: false },
    { id: 14, value: ".", themColorBtn: false },
    { id: 15, value: "=", themColorBtn: false },
    { id: 16, value: "/", themColorBtn: true },
];

// styles
const displayStyle = {
    boxShadow: "inset 1px 2px 5px #ccc",
    margin: "1em",
    textAlign: "right",
    padding: "1em",
    borderRadius: "10px",
    height: "12em",
};
const btnContainerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gridTemplateRows: "repeat(4, 1fr)",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    justifyItems: "center",
    padding: "1em",
    gap: "1em",
};

export { btns, displayStyle, btnContainerStyle };
