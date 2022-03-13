import "./clear.css"

export default function Clear() {

const clearList = (e) => {
    console.log(e.target)
}

    return (
        <button className="Clear" onClick={clearList}>CLEAR</button>
    )
}