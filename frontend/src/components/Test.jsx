import { useState } from "react"

function Test() {
    let [start,setStart] = useState(0);
    console.log("render")
    const handleClick = ()=>{
        setStart(start+1);
    }
    return (
        <div className="flex h-64 mt-14 flex-col items-center">
            <div>{start}</div>
            <div><button className="border border-black " onClick={handleClick}>click me</button></div>
        </div>
    )
}

export default Test
